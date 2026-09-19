import type { IconType } from "react-icons";
import {
  SiPython,
  SiApachespark,
  SiSnowflake,
  SiApacheairflow,
  SiDbt,
  SiDatabricks,
  SiApachekafka,
  SiAmazonaws,
  SiAmazons3,
  SiAmazonec2,
  SiAmazonredshift,
  SiAwslambda,
  SiMicrosoftazure,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiGithubactions,
  SiLinux,
  SiGit,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFlask,
  SiNodedotjs,
  SiExpress,
  SiPostman,
  SiSolidity,
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiGnubash,
  SiApacheparquet,
  SiArgo,
  SiKedro,
  SiFirebase,
  SiEthereum,
  SiDelta,
  SiJson,
} from "react-icons/si";

export interface Skill {
  name: string;
  icon?: IconType;
  color?: string;
}

export interface SkillCategory {
  category: string;
  blurb: string;
  accent: string;
  skills: Skill[];
}

const skillsCategories: SkillCategory[] = [
  {
    category: "Languages & Querying",
    blurb: "The day-to-day tools for moving and shaping data.",
    accent: "#38bdf8",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Advanced SQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Solidity", icon: SiSolidity, color: "#8C8C8C" },
    ],
  },
  {
    category: "Distributed Processing & Warehousing",
    blurb: "Where the heavy lifting happens — batch and streaming at scale.",
    accent: "#a78bfa",
    skills: [
      { name: "Apache Spark", icon: SiApachespark, color: "#E25A1C" },
      { name: "PySpark", icon: SiApachespark, color: "#E25A1C" },
      { name: "Databricks", icon: SiDatabricks, color: "#FF3621" },
      { name: "Delta Lake", icon: SiDelta, color: "#00ADD4" },
      { name: "Snowflake", icon: SiSnowflake, color: "#29B5E8" },
      { name: "Amazon Redshift", icon: SiAmazonredshift, color: "#8C4FFF" },
      { name: "Parquet", icon: SiApacheparquet, color: "#50ABF1" },
      { name: "JSON", icon: SiJson, color: "#9CA3AF" },
    ],
  },
  {
    category: "Streaming & Orchestration",
    blurb: "Keeping events flowing and pipelines on schedule.",
    accent: "#34d399",
    skills: [
      { name: "Apache Kafka", icon: SiApachekafka, color: "#D1D5DB" },
      { name: "Azure Event Hubs", icon: SiMicrosoftazure, color: "#0078D4" },
      { name: "Apache Airflow", icon: SiApacheairflow, color: "#017CEE" },
      { name: "dbt Core", icon: SiDbt, color: "#FF694B" },
      { name: "Argo Workflows", icon: SiArgo, color: "#EF7B4D" },
      { name: "Kedro", icon: SiKedro, color: "#FFC900" },
      { name: "Azkaban" },
    ],
  },
  {
    category: "Cloud & DevOps",
    blurb: "Infrastructure the pipelines actually run on.",
    accent: "#fbbf24",
    skills: [
      { name: "AWS", icon: SiAmazonaws, color: "#FF9900" },
      { name: "Amazon S3", icon: SiAmazons3, color: "#569A31" },
      { name: "Amazon EMR", icon: SiAmazonec2, color: "#FF9900" },
      { name: "AWS Glue", icon: SiAmazonaws, color: "#FF9900" },
      { name: "AWS Lambda", icon: SiAwslambda, color: "#FF9900" },
      { name: "Azure (ADLS Gen2)", icon: SiMicrosoftazure, color: "#0078D4" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
      { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "ServiceNow" },
    ],
  },
  {
    category: "Engineering Practices",
    blurb: "How the systems are designed, tested, and kept trustworthy.",
    accent: "#f472b6",
    skills: [
      { name: "ETL / ELT Design" },
      { name: "Spark Performance Tuning" },
      { name: "Partitioning & Bucketing" },
      { name: "Skew Handling" },
      { name: "Broadcast Joins" },
      { name: "Data Quality Management" },
      { name: "Data Governance" },
      { name: "Data Observability" },
      { name: "SLA & Freshness Monitoring" },
      { name: "Incident & Alerting" },
      { name: "Star Schema / OBT" },
      { name: "SCD Type 1 & 2" },
      { name: "Medallion Architecture" },
      { name: "Unit Testing (pytest)" },
      { name: "Agile / Scrum" },
    ],
  },
  {
    category: "Databases",
    blurb: "Operational stores behind the applications.",
    accent: "#60a5fa",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    category: "Backend & Web",
    blurb: "Full-stack roots — still useful for internal tooling.",
    accent: "#22d3ee",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#D1D5DB" },
      { name: "Flask", icon: SiFlask, color: "#D1D5DB" },
      { name: "REST APIs", icon: SiPostman, color: "#FF6C37" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#E5E7EB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Ethers.js", icon: SiEthereum, color: "#8247E5" },
    ],
  },
];

export default skillsCategories;
