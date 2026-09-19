export interface Certification {
  name: string;
  issuer: string;
  year?: string;
  featured?: boolean;
  accent: string;
  initials: string;
}

export const certifications: Certification[] = [
  {
    name: "Certified Data Engineer Professional",
    issuer: "Databricks",
    year: "2026",
    featured: true,
    accent: "#FF3621",
    initials: "DB",
  },
  {
    name: "SnowPro Core Certification",
    issuer: "Snowflake",
    year: "2026",
    featured: true,
    accent: "#29B5E8",
    initials: "SF",
  },
  {
    name: "NetOps: DevOps for Network Engineers — Automating Networks",
    issuer: "LinkedIn Learning",
    accent: "#38bdf8",
    initials: "NO",
  },
  {
    name: "Generative AI: Introduction to Large Language Models",
    issuer: "LinkedIn Learning",
    accent: "#a78bfa",
    initials: "AI",
  },
  {
    name: "Generative AI Skills for Creative Content: Opportunities, Issues, and Ethics",
    issuer: "LinkedIn Learning",
    accent: "#f472b6",
    initials: "GA",
  },
  {
    name: "TezIndia Buildercamp",
    issuer: "Tezos India",
    accent: "#34d399",
    initials: "TZ",
  },
  {
    name: "Solidity 30 Day Challenge",
    issuer: "Solidity Community",
    accent: "#fbbf24",
    initials: "SOL",
  },
];

export interface EducationEntry {
  school: string;
  degree: string;
  detail: string;
  period: string;
  logo: string;
}

export const education: EducationEntry[] = [
  {
    school: "Guru Gobind Singh Indraprastha University",
    degree: "B.Tech, Computer Science Engineering",
    detail: "CGPA 8.9 / 10 — University School of Information, Communication & Technology",
    period: "Nov 2021 — Aug 2025",
    logo: "/ipulogo.webp",
  },
  {
    school: "SSLT Gujarati Senior Secondary School",
    degree: "Higher Secondary (Class XII)",
    detail: "95.2% — Science stream",
    period: "2018 — 2020",
    logo: "/ssltgujrat.jpg",
  },
];

export default certifications;
