export interface Position {
  role: string;
  type: string;
  timePeriod: string;
  description: string;
  highlights?: string[];
}

export interface Experience {
  img: string;
  companyName: string;
  role: string;
  location: string;
  timePeriod: string;
  description: string;
  stack?: string[];
  highlights?: string[];
  positions?: Position[];
}

const expData: Experience[] = [
  {
    img: "/Experience/nagarro.jpg",
    companyName: "Nagarro",
    role: "Associate Data Engineer",
    location: "Gurugram, India",
    timePeriod: "Jan 2025 — Present",
    description:
      "Building metadata-driven ETL frameworks, enterprise data quality automation, and workflow observability for production data platforms.",
    stack: [
      "Python",
      "PySpark",
      "SQL",
      "Snowflake",
      "Airflow",
      "AWS S3/EMR",
      "Amazon Redshift",
      "Argo Workflows",
      "Kedro",
      "Jenkins",
    ],
    positions: [
      {
        role: "Associate Data Engineer",
        type: "Full-time",
        timePeriod: "Sep 2025 — Present",
        description:
          "Design and build scalable ETL frameworks, data quality solutions, and workflow automation that improve the reliability of enterprise data platforms.",
        highlights: [
          "Engineered the rule-configuration layer and validation engine of a metadata-driven Data Quality & Governance framework (Python, PySpark, AWS S3/EMR) governing 60 GB of enterprise data daily across 12 production pipelines.",
          "Automated schema, completeness, and business-rule checks with consuming teams so reporting runs on trusted, SLA-compliant data — eliminating 95% of manual verification (20 hrs/week to under 1 hr/week).",
          "Optimized PySpark ETL pipelines across 5 source systems into Amazon Redshift using partition pruning, broadcast joins, and skew mitigation, shrinking runtime from 3 hours to 45 minutes.",
          "Lowered billed EMR compute hours by 75% at unchanged cluster configuration, enabling same-day reporting for 3 downstream analytics teams.",
          "Integrated Airflow with ServiceNow ITSM to auto-raise incident tickets on pipeline failure, and designed a centralized alerting module reused across 20+ production DAGs within a 4-person platform team.",
          "Reduced Mean-Time-To-Detection (MTTD) from 2 hours to 15 minutes (87%) and extended data-freshness and SLA tracking pipelines using Argo Workflows, Kedro, and Jenkins.",
        ],
      },
      {
        role: "Trainee",
        type: "Traineeship",
        timePeriod: "Jan 2025 — Sep 2025",
        description:
          "Hands-on training in Python development and DevOps practices, focused on cloud infrastructure, containerization, and automation.",
        highlights: [
          "Built a production-ready Kubernetes cluster on AWS using Kops and Terraform, automating infrastructure provisioning for a 1 master + 1 worker node setup.",
          "Developed “JustEat”, a full-stack food delivery web application in Flask with role-based authentication for customers and restaurant owners.",
          "Tech stack: Python, Flask, Docker, Kubernetes, Terraform, AWS, Linux.",
        ],
      },
    ],
  },
  {
    img: "/Experience/giichi1.png",
    companyName: "Giichi IT Solutions",
    role: "Software Engineering Intern (Blockchain)",
    location: "Remote",
    timePeriod: "May 2024 — Nov 2024",
    description:
      "Built backend data structures and application logic for 3 core dApps, wiring services together with Apache Kafka producers and consumers for real-time data exchange, and streamlining execution logic to cut deployment time by 50%.",
    stack: ["Apache Kafka", "Node.js", "TypeScript", "Solidity", "Next.js"],
    highlights: [
      "Developed backend data structures and application logic for 3 core dApps.",
      "Connected services through Apache Kafka event producers and consumers for real-time data exchange.",
      "Streamlined execution logic to cut deployment time by 50%.",
    ],
  },
  {
    img: "/Experience/gdsc.png",
    companyName: "Google Developer Student Clubs, USICT",
    role: "Web3 Lead",
    location: "Delhi, India",
    timePeriod: "Aug 2022 — Aug 2024",
    description:
      "Led Web3 initiatives at GDSC USICT — mentoring students through decentralized application development and shipping NFT-based systems for the chapter.",
    stack: ["Solidity", "Ethers.js", "Hardhat", "React"],
    positions: [
      {
        role: "Web3 Lead",
        type: "Leadership",
        timePeriod: "Jan 2024 — Aug 2024",
        description:
          "Guided students through the complexities of Web3 technologies — mentoring ongoing projects, unblocking technical challenges, and helping fellows ship their Web3 builds end to end.",
      },
      {
        role: "Web3 Developer",
        type: "Core Team",
        timePeriod: "Aug 2022 — Jan 2024",
        description:
          "Built an NFT-based ID system for the GDSC USICT team that improved record accessibility, and an NFT certificate system for Google Developer events that delivered tamper-proof certificates directly to the wallets of 100+ participants.",
      },
    ],
  },
  {
    img: "/Experience/SDC.jpeg",
    companyName: "Software Development Cell, GGSIPU",
    role: "Developer Relations Lead",
    location: "New Delhi, India",
    timePeriod: "Mar 2023 — Jul 2024",
    description:
      "Mentored 100+ students and ran 10+ technical workshops on backend engineering, data structures, and data pipeline fundamentals, while driving campus outreach that reached a student body of 5,000+.",
    stack: ["Mentoring", "Workshops", "Community"],
    highlights: [
      "Led instructional sessions for a cohort of 50+ students as part of the SDC Fellowship.",
      "Ran 10+ technical workshops on backend engineering, data structures, and data pipeline fundamentals.",
      "Executed campus promotional campaigns reaching 5,000+ students, driving participation in SDC programs.",
    ],
  },
  {
    img: "/Experience/admybrand.png",
    companyName: "ADmyBRAND",
    role: "Blockchain Developer Intern",
    location: "Bengaluru, India",
    timePeriod: "Jun 2023 — Sep 2023",
    description:
      "Helped build an NFT-based advertising platform on Polygon where ad spaces are bought and sold as NFTs, adding blockchain-driven analytics for real-time campaign performance and on-chain data integrity guarantees.",
    stack: ["Polygon", "Solidity", "Ethers.js", "React"],
  },
  {
    img: "/Experience/InfoXpression.jpeg",
    companyName: "InfoXpression, USICT",
    role: "Web Developer",
    location: "Delhi, India",
    timePeriod: "Sep 2022 — Nov 2022",
    description:
      "Built scalable, reusable React components and integrated backend functionality for the official website of USICT's annual technical fest.",
    stack: ["React", "JavaScript", "CSS"],
  },
];

export default expData;
