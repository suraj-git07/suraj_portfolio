"use client";

import * as THREE from "three";
import React, { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { viewState } from "./scrollStore";

/* ------------------------------------------------------------------ *
 * Drifting particle field
 *
 * All motion happens in the vertex shader, so the CPU never touches the
 * position buffer after upload. Particles wrap around a box, which reads
 * as an endless volume of data moving past the camera.
 * ------------------------------------------------------------------ */

const fieldVertex = /* glsl */ `
  uniform float uTime;
  uniform float uScroll;
  uniform float uSize;
  attribute float aScale;
  attribute float aSpeed;
  varying float vDepth;
  varying float vScale;

  void main() {
    vec3 p = position;

    // Flow along -Z, wrapping through a 26-unit deep volume.
    float travel = uTime * aSpeed * 0.6 + uScroll * 9.0;
    p.z = mod(p.z + travel, 26.0) - 13.0;

    // Gentle lateral sway so the field never looks like a rigid lattice.
    p.x += sin(uTime * 0.25 + p.z * 0.35) * 0.22;
    p.y += cos(uTime * 0.2 + p.x * 0.4) * 0.18;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vDepth = clamp(1.0 - (-mv.z - 1.0) / 16.0, 0.0, 1.0);
    vScale = aScale;

    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * aScale * (9.0 / max(-mv.z, 0.6));
  }
`;

const fieldFragment = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform float uOpacity;
  varying float vDepth;
  varying float vScale;

  void main() {
    // Round, soft-edged point sprite.
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    if (d > 0.5) discard;
    float alpha = smoothstep(0.5, 0.05, d);

    vec3 color = mix(uColorA, uColorB, vScale);
    gl_FragColor = vec4(color, alpha * vDepth * uOpacity);
  }
`;

function ParticleField({
  count,
  colorA,
  colorB,
  opacity,
}: {
  count: number;
  colorA: string;
  colorB: string;
  opacity: number;
}) {
  const material = useRef<THREE.ShaderMaterial>(null);

  const { positions, scales, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    const speeds = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 2] = Math.random() * 26 - 13;
      scales[i] = 0.35 + Math.random() * 0.9;
      speeds[i] = 0.5 + Math.random() * 1.6;
    }
    return { positions, scales, speeds };
  }, [count]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uSize: { value: 26 },
      uOpacity: { value: opacity },
      uColorA: { value: new THREE.Color(colorA) },
      uColorB: { value: new THREE.Color(colorB) },
    }),
    // Colours are updated imperatively below so a theme switch does not
    // rebuild the whole buffer geometry.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useFrame((_, delta) => {
    if (!material.current) return;
    const u = material.current.uniforms;
    u.uTime.value += Math.min(delta, 0.05);
    u.uScroll.value = viewState.progress;
    u.uOpacity.value = opacity;
    (u.uColorA.value as THREE.Color).set(colorA);
    (u.uColorB.value as THREE.Color).set(colorB);
  });

  return (
    <points frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aScale" args={[scales, 1]} />
        <bufferAttribute attach="attributes-aSpeed" args={[speeds, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={material}
        uniforms={uniforms}
        vertexShader={fieldVertex}
        fragmentShader={fieldFragment}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ------------------------------------------------------------------ *
 * Node constellation
 *
 * A small graph of nodes joined to their nearest neighbours — the visual
 * shorthand for a pipeline DAG. Rotates slowly and leans towards the cursor.
 * ------------------------------------------------------------------ */

function Constellation({
  nodeCount,
  color,
  accent,
}: {
  nodeCount: number;
  color: string;
  accent: string;
}) {
  const group = useRef<THREE.Group>(null);

  const { nodes, lineGeometry } = useMemo(() => {
    const nodes: THREE.Vector3[] = [];
    // Fibonacci sphere: evenly spread nodes with no clustering at the poles.
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < nodeCount; i++) {
      const y = 1 - (i / (nodeCount - 1)) * 2;
      const radius = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = golden * i;
      nodes.push(
        new THREE.Vector3(
          Math.cos(theta) * radius * 3.1,
          y * 2.1,
          Math.sin(theta) * radius * 3.1,
        ),
      );
    }

    // Connect each node to neighbours within a threshold distance.
    const segments: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 2.5) {
          segments.push(
            nodes[i].x, nodes[i].y, nodes[i].z,
            nodes[j].x, nodes[j].y, nodes[j].z,
          );
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(segments, 3),
    );

    return { nodes, lineGeometry };
  }, [nodeCount]);

  useFrame((state, delta) => {
    if (!group.current) return;
    const d = Math.min(delta, 0.05);

    group.current.rotation.y += d * 0.12;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      viewState.pointerY * 0.18 + viewState.progress * 0.5,
      0.05,
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      -viewState.progress * 3.2,
      0.06,
    );

    const pulse = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.02;
    group.current.scale.setScalar(pulse);
  });

  return (
    <group ref={group}>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial
          color={color}
          transparent
          opacity={0.28}
          depthWrite={false}
        />
      </lineSegments>

      {nodes.map((n, i) => (
        <mesh key={i} position={n}>
          <icosahedronGeometry args={[i % 4 === 0 ? 0.13 : 0.07, 0]} />
          <meshBasicMaterial color={i % 4 === 0 ? accent : color} />
        </mesh>
      ))}
    </group>
  );
}

/* ------------------------------------------------------------------ *
 * Camera rig — dollies forward as the page scrolls, giving the whole
 * page the feel of travelling into the scene rather than past it.
 * ------------------------------------------------------------------ */

function CameraRig() {
  const { camera } = useThree();

  useFrame(() => {
    const p = viewState.progress;
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      viewState.pointerX * 0.55,
      0.04,
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      -viewState.pointerY * 0.35,
      0.04,
    );
    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      9 - p * 3.4,
      0.05,
    );
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ------------------------------------------------------------------ */

export default function PipelineScene({
  isDark,
  quality = "high",
}: {
  isDark: boolean;
  quality?: "high" | "low";
}) {
  const low = quality === "low";

  const colorA = isDark ? "#38bdf8" : "#0284c7";
  const colorB = isDark ? "#a78bfa" : "#7c3aed";
  const lineColor = isDark ? "#64748b" : "#94a3b8";

  return (
    <Canvas
      className="!absolute inset-0"
      dpr={low ? [1, 1.25] : [1, 1.75]}
      gl={{ antialias: !low, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 9], fov: 55 }}
    >
      <CameraRig />
      <ParticleField
        count={low ? 900 : 2600}
        colorA={colorA}
        colorB={colorB}
        opacity={isDark ? 0.7 : 0.5}
      />
      <Constellation
        nodeCount={low ? 20 : 34}
        color={lineColor}
        accent={colorA}
      />
    </Canvas>
  );
}
