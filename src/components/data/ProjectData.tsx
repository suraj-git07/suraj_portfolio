export interface Project {
  heading: string;
  summary: string;
  code: string;
  link: string;
  img: string;
  tags: string[];
  domain: "Data Engineering" | "Cloud & DevOps" | "AI" | "Web3" | "Web";
  featured?: boolean;
}

const projects: Project[] = [
  {
    heading: "Fault-Tolerant Kafka Streaming ETL",
    summary:
      "Streaming pipeline from partitioned Kafka topics into Delta Lake with checkpointed offsets and idempotent MERGE writes for exactly-once delivery under restart. Failure handling is hardened with a dead-letter topic for malformed events, schema-contract validation on ingest, and consumer-lag monitoring that alerts on partition skew.",
    code: "",
    link: "",
    img: "",
    tags: ["Kafka", "PySpark Structured Streaming", "Delta Lake", "Exactly-once"],
    domain: "Data Engineering",
    featured: true,
  },
  {
    heading: "Real-Time Lakehouse Pipeline on Azure",
    summary:
      "End-to-end Medallion architecture (Bronze → Silver → Gold) processing 10M+ row datasets. Integrates Azure Event Hubs, ADLS Gen2, and Databricks to handle ride event streams alongside historical batch data, producing analytics-ready fact and dimension tables with SCD Type 1 and Type 2 handling.",
    code: "https://github.com/suraj-git07/azure-streaming-batch-de-pipeline_project",
    link: "",
    img: "",
    tags: ["Azure Event Hubs", "Databricks", "ADLS Gen2", "SCD Type 1/2", "Medallion"],
    domain: "Data Engineering",
    featured: true,
  },
  {
    heading: "Snowflake & dbt ELT Platform",
    summary:
      "Production-grade transformation pipeline over Airbnb marketplace data. Bronze-to-Gold ELT layers modelled as modular, version-controlled dbt models with automated tests via dbt-expectations, Jinja templating for dynamic SQL generation, and a benchmark of Star Schema vs One Big Table across 20+ models.",
    code: "https://github.com/suraj-git07/snowflake_dbt_project",
    link: "",
    img: "",
    tags: ["Snowflake", "dbt", "Jinja", "Star Schema", "OBT"],
    domain: "Data Engineering",
    featured: true,
  },
  {
    heading: "PySpark + dbt Lakehouse Pipeline",
    summary:
      "Databricks pipeline combining PySpark for dynamic processing with dbt for transformation and modelling. Implements Bronze-Silver-Gold with Structured Streaming, Delta Lake ACID transactions, dbt incremental models, and SCD Type 2 snapshots — plus custom utility classes for deduplication, CDC-based merge logic, and Unity Catalog integration.",
    code: "https://github.com/suraj-git07/pyspark_dbt_proj",
    link: "",
    img: "",
    tags: ["Databricks", "PySpark", "dbt", "Delta Lake", "Unity Catalog"],
    domain: "Data Engineering",
    featured: true,
  },
  {
    heading: "dbt Retail Analytics Pipeline",
    summary:
      "Retail analytics pipeline with Bronze-Silver-Gold medallion architecture on dbt Core and Databricks. Processes 6 dimension/fact tables with SCD Type 2 snapshots for historical tracking, generic and custom data quality tests, and reusable macros with Jinja templating for advanced SQL generation.",
    code: "https://github.com/suraj-git07/dbt_project",
    link: "",
    img: "",
    tags: ["dbt Core", "Databricks", "SCD Type 2", "Macros"],
    domain: "Data Engineering",
  },
  {
    heading: "Snowflake Excel Auto-Updater",
    summary:
      "Automation that refreshes Excel reports straight from Snowflake. Performs in-place file updates with automatic timestamped backups, validates data before writing, logs every run for monitoring, and takes environment-based configuration — removing manual Excel refreshes from the reporting loop.",
    code: "https://github.com/suraj-git07/snowflake_excel_Autoupdator",
    link: "",
    img: "",
    tags: ["Snowflake", "Python", "Automation", "Reporting"],
    domain: "Data Engineering",
  },
  {
    heading: "Kubernetes on AWS with Kops & Terraform",
    summary:
      "Production-ready Kubernetes cluster on AWS provisioned with Kops and Terraform. Automated infrastructure for a 1 master + 1 worker configuration, Docker image security scanning with Trivy, Helm-based deployment with namespace isolation, and a monitoring stack on Prometheus + Grafana with custom ServiceMonitor configs.",
    code: "https://github.com/suraj-git07/kubernetes_kopsTerraform_project",
    link: "",
    img: "",
    tags: ["Kubernetes", "Terraform", "Kops", "Prometheus", "Grafana"],
    domain: "Cloud & DevOps",
  },
  {
    heading: "AI Job Search Framework",
    summary:
      "A job search that runs entirely on your own machine — an AI job application framework built on Claude Code that automates sourcing, matching, and tailoring applications without shipping your data to a third-party service.",
    code: "https://github.com/suraj-git07/ai-job-search",
    link: "",
    img: "",
    tags: ["Claude Code", "Agents", "Python", "Automation"],
    domain: "AI",
  },
  {
    heading: "LangGraph Agent Workflows",
    summary:
      "Hands-on repository of Jupyter notebooks exploring agent workflow patterns, state graphs, conditional routing, and LLM integrations with LangGraph — building up from single-node chains to multi-agent orchestration.",
    code: "https://github.com/suraj-git07/langgraph_concepts",
    link: "",
    img: "",
    tags: ["LangGraph", "LLM", "Python", "Agents"],
    domain: "AI",
  },
  {
    heading: "JustEat — Food Ordering Platform",
    summary:
      "Full-stack Flask application connecting customers with restaurants. Secure authentication with bcrypt, restaurant filtering by cuisine/location/rating, smart recommendations with auto-favourite detection, order tracking and history search, a rating & review system, and an owner dashboard for menu and order management.",
    code: "https://github.com/suraj-git07/PythonTraining/tree/main/Major_Project",
    link: "",
    img: "",
    tags: ["Flask", "Python", "PostgreSQL", "Full-stack"],
    domain: "Web",
  },
  {
    heading: "Crypto ETF Dashboard",
    summary:
      "A dApp for investing in cryptocurrency portfolios through smart contracts. Built with Next.js, React, and Tailwind, featuring real-time portfolio tracking with Chart.js, multi-token support (USDT, WBTC, PEPE), MetaMask integration, a share-based dynamic allocation system, and complete transaction history on Ethereum Sepolia.",
    code: "https://github.com/suraj-git07/CryptoETFDemo",
    link: "",
    img: "",
    tags: ["Next.js", "Solidity", "Ethers.js", "Chart.js"],
    domain: "Web3",
  },
  {
    heading: "Multi-Chain Pre-Sale Platform",
    summary:
      "Multi-chain dApp in Next.js and TypeScript supporting ETH, BSC, XDC, and WAN. Optimised smart contracts to cut gas fees by 15%, integrated six cryptocurrencies for cross-network transactions, and managed the high-volume pre-sale of 400 million ZonTokens at a 99% transaction success rate.",
    code: "",
    link: "",
    img: "zon.png",
    tags: ["Next.js", "TypeScript", "Multi-chain", "Smart Contracts"],
    domain: "Web3",
  },
  {
    heading: "BHOOMI — Decentralising Real Estate",
    summary:
      "A platform that decentralises real estate by providing verifiable proof of ownership on-chain. Deployed as a demo across 20+ buildings, it layers decentralised verification over traditional government processes to improve transparency and security in property transactions.",
    code: "https://github.com/ThirdEye-Org/Bhoomi-1.0",
    link: "https://devfolio.co/projects/bhoomi-c783",
    img: "bhoomi.png",
    tags: ["Solidity", "React", "IPFS", "Hackathon"],
    domain: "Web3",
  },
  {
    heading: "The Code Story — Learning through NFTs",
    summary:
      "An interactive game that turns learning into progression. Players navigate a dynamic map, meeting NPCs across levels who each pose a question. Answering all 10 questions in a level mints an NFT as “Proof of Learning”, a verifiable record of what the player has mastered.",
    code: "https://github.com/The-Code-Story/The-Code-Story",
    link: "",
    img: "codestory.jpeg",
    tags: ["NFT", "Game", "Solidity", "React"],
    domain: "Web3",
  },
  {
    heading: "Shodh 1.0",
    summary:
      "A DeSci DAO giving researchers a transparent, decentralised platform to publish their work. Open access by design — anyone can read the papers without restriction, carry the research forward, and have every state change maintained securely on-chain.",
    code: "https://github.com/ThirdEye-Org/Shodh1.0",
    link: "",
    img: "shoodh.png",
    tags: ["DeSci", "DAO", "Solidity", "Hackathon"],
    domain: "Web3",
  },
  {
    heading: "Kort",
    summary:
      "A decentralised dispute resolution platform combining crowdsourcing, blockchain, and game theory to build a justice system that reaches sound decisions securely and inexpensively.",
    code: "https://github.com/AniketSindhu/Kort-contracts",
    link: "",
    img: "kort.webp",
    tags: ["Game Theory", "Solidity", "Arbitration"],
    domain: "Web3",
  },
  {
    heading: "This Portfolio",
    summary:
      "A 3D scroll-driven portfolio built with Next.js, React Three Fiber, and Tailwind. Features a WebGL pipeline scene that responds to scroll, depth-based section reveals, and a performance budget that degrades gracefully on mobile and for reduced-motion users.",
    code: "https://github.com/suraj-git07/suraj_portfolio",
    link: "https://suraj-portfolio-c0mpmpfy8-surajgit07s-projects.vercel.app/",
    img: "portfolio.png",
    tags: ["Next.js", "React Three Fiber", "WebGL", "Tailwind"],
    domain: "Web",
  },
];

export default projects;
