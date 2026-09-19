"use client";

import React from "react";
import SceneBackground from "./three/SceneBackground";
import SmoothScroll from "./motion/SmoothScroll";
import Hero from "./sections/Hero";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection";
import CertificationsSection from "./sections/CertificationsSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <SceneBackground />

      <main className="relative z-10">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
