const projects = [
    {
        heading:"PySpark + DBT Data Pipeline",
        summary:"Modern data pipeline built on Databricks combining PySpark for dynamic data processing and dbt for transformation and modeling. Implements Bronze-Silver-Gold architecture with PySpark Structured Streaming, Delta Lake ACID transactions, dbt incremental models, and SCD Type 2 snapshots. Features custom utility classes for deduplication, CDC-based merge logic, and Unity Catalog integration.",
        code:"https://github.com/suraj-git07/pyspark_dbt_proj",
        link:"",
        img:"",
    },
    {
        heading:"Snowflake DBT Project - Airbnb Analytics",
        summary:"Production-grade data transformation pipeline using dbt and Snowflake for processing Airbnb marketplace data. Implements Medallion Architecture (Bronze-Silver-Gold) with metadata-driven transformations, Jinja templating for dynamic SQL generation, both Star Schema and One Big Table patterns, automated data quality tests, and incremental processing for optimized performance.",
        code:"https://github.com/suraj-git07/snowflake_dbt_project",
        link:"",
        img:"",
    },
    {
        heading:"Kubernetes Deployment on AWS with Kops & Terraform",
        summary:"Production-ready Kubernetes cluster deployment on AWS using Kops and Terraform. Features automated infrastructure provisioning with 1 master + 1 worker configuration, Docker image security scanning with Trivy, Helm-based application deployment with namespace isolation, and comprehensive monitoring stack using Prometheus and Grafana with custom ServiceMonitor configurations.",
        code:"https://github.com/suraj-git07/kubernetes_kopsTerraform_project",
        link:"",
        img:"",
    },
    {
        heading:"DBT Retail Analytics Pipeline",
        summary:"Complete retail analytics data pipeline with Bronze-Silver-Gold medallion architecture using DBT Core and Databricks. Processes 6 dimension/fact tables with SCD Type 2 snapshots for historical tracking, comprehensive data quality testing (generic + custom), reusable macros and Jinja templating for advanced SQL generation. Built for scalable retail data transformation.",
        code:"https://github.com/suraj-git07/dbt_project",
        link:"",
        img:"",
    },
    {
        heading:"Snowflake Excel Auto-Updater",
        summary:"Automated solution for updating Excel files with latest data from Snowflake. Features in-place file updates, automatic timestamped backups, data validation before writing, comprehensive logging for monitoring, and environment-based configuration. Streamlines data reporting workflows by eliminating manual Excel updates.",
        code:"https://github.com/suraj-git07/snowflake_excel_Autoupdator",
        link:"",
        img:"",
    },
    {
        heading:"Crypto ETF Dashboard",
        summary:"Decentralized application (dApp) for investing in cryptocurrency portfolios through smart contracts. Built with Next.js, React, and Tailwind CSS, featuring real-time portfolio tracking with Chart.js, multi-token support (USDT, WBTC, PEPE), MetaMask wallet integration, dynamic allocation with share-based system, and complete transaction history on Ethereum Sepolia testnet.",
        code:"https://github.com/suraj-git07/CryptoETFDemo",
        link:"",
        img:"",
    },
    {
        heading:"Food Ordering App",
        summary:"Full-stack Flask web application connecting customers with restaurants for seamless food ordering. Features secure authentication with bcrypt, advanced restaurant filtering by cuisine/location/rating, smart recommendations with auto-favorite detection, comprehensive order tracking and history search, rating & review system for restaurants and dishes, and restaurant owner dashboard for menu and order management.",
        code:"https://github.com/suraj-git07/PythonTraining/tree/main/Major_Project",
        link:"",
        img:"",
    },
    
    {
        heading:"Multi-Chain Pre-Sale Platform",
        summary:"Multi-Chain DApp using Next.js and TypeScript, supporting four major blockchain networks: ETH, BSC, XDC, WAN. I optimized smart contracts, reducing gas fees by 15% and enhancing contract efficiency. The DApp integrated six different cryptocurrencies, enabling seamless transactions across various networks. Successfully managed the high-volume pre-sale of 400 million ZonTokens, achieving a transaction success rate of 99%.",
        code:"",
        link:"",
        img:"zon.png",
    },
    {
        heading:"BHOOMI: Decentralizing Real Estate",
        summary:"A pioneering platform that decentralizes real estate by providing verifiable proof of ownership through blockchain technology. Deployed as a demo for over 20 buildings, the platform integrates a decentralized layer to enhance transparency and security in property ownership. By addressing legal corruption and adding a secure decentralized layer over traditional government processes, BHOOMI aims to redefine property transactions.",
        code:"https://github.com/ThirdEye-Org/Bhoomi-1.0",
        link:"https://devfolio.co/projects/bhoomi-c783",
        img:"bhoomi.png",
    },
    {
        heading:"The Code Story: Gamifying Learning through NFTs",
        summary:"The Code Story addresses the challenge of engaging and effective learning by integrating NFTs into an interactive game environment. Players navigate a dynamic map, discovering various NPCs spread across different levels. Each battleground presents a question that must be answered correctly to advance. Successfully answering all 10 questions per level allows players to claim an NFT as a \"Proof of Learning,\" which symbolizes their progress and knowledge acquisition.",
        code:"https://github.com/The-Code-Story/The-Code-Story",
        link:"",
        img:"codestory.jpeg",
    },
    {
        heading:"Shodh 1.0",
        summary:"Shodh 1.0 promotes the concept of DeSci, it is a DAO that can provide a transparent and decentralized platform for researchers to share their work.The decentralized nature of the platform allows anyone to access the research papers without restrictions, ensuring open access to knowledge. Anyone can carry forward their research and every state will be maintained securely onchain",
        code:"https://github.com/ThirdEye-Org/Shodh1.0",
        link:"",
        img:"shoodh.png",
    },
    {
        heading:"Kort",
        summary:"Kort is a decentralized dispute resolution platform that uses crowdsourcing, blockchain and game theory to develop a justice system that produces true decisions in a secure and inexpensive way.",
        code:"https://github.com/AniketSindhu/Kort-contracts",
        link:"",
        img:"kort.webp",
    },
    
    {
        heading:"Portfolio website",
        summary:"A responsive portfolio website designed to showcase my work professionally. It offers an elegant, user-friendly interface , with sections for introduction, skills, about me, projects, experience and contact information.",
        code:"https://github.com/suraj-git07/suraj_portfolio",
        link:"https://suraj-portfolio-c0mpmpfy8-surajgit07s-projects.vercel.app/",
        img:"portfolio.png",
    },
    
    
]

export default projects;