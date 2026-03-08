const skillsCategories = [
  {
    category: "Data Engineering & Analytics",
    skills: [
      { name: "Snowflake", badge: "https://img.shields.io/badge/Snowflake-29B5E8?style=for-the-badge&logo=snowflake&logoColor=white" },
      { name: "Apache Airflow", badge: "https://img.shields.io/badge/Airflow-017CEE?style=for-the-badge&logo=apache-airflow&logoColor=white" },
      { name: "dbt", badge: "https://img.shields.io/badge/dbt-FF694B?style=for-the-badge&logo=dbt&logoColor=white" },
      { name: "Databricks", badge: "https://img.shields.io/badge/Databricks-E62B1E?style=for-the-badge&logo=databricks&logoColor=white" },
      { name: "Apache Spark", badge: "https://img.shields.io/badge/Spark-E25A1C?style=for-the-badge&logo=apache-spark&logoColor=white" },
      { name: "PySpark", badge: "https://img.shields.io/badge/PySpark-E25A1C?style=for-the-badge&logo=apache-spark&logoColor=white" },
      { name: "AWS Glue", badge: "https://img.shields.io/badge/AWS_Glue-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" },
      { name: "LangGraph", badge: "https://img.shields.io/badge/LangGraph-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white" },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", badge: "https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white" },
      { name: "Azure", badge: "https://img.shields.io/badge/Azure-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white" },
      { name: "Terraform", badge: "https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white" },
      { name: "Ansible", badge: "https://img.shields.io/badge/Ansible-EE0000?style=for-the-badge&logo=ansible&logoColor=white" },
      { name: "Kubernetes", badge: "https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" },
      { name: "Docker", badge: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" },
      { name: "Linux", badge: "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" },
      { name: "Git", badge: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", badge: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" },
      { name: "SQL", badge: "https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white" },
      { name: "JavaScript", badge: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" },
      { name: "TypeScript", badge: "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" },
      { name: "C", badge: "https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=c&logoColor=white" },
      { name: "C++", badge: "https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white" },
      { name: "Solidity", badge: "https://img.shields.io/badge/Solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Node.js", badge: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" },
      { name: "Express.js", badge: "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" },
      { name: "Flask", badge: "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" },
      { name: "REST API", badge: "https://img.shields.io/badge/REST_API-009688?style=for-the-badge&logo=fastapi&logoColor=white" },
      { name: "Postman", badge: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", badge: "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" },
      { name: "Next.js", badge: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" },
      { name: "Tailwind CSS", badge: "https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" },
      { name: "Shadcn/UI", badge: "https://img.shields.io/badge/Shadcn/UI-000000?style=for-the-badge&logo=shadcnui&logoColor=white" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", badge: "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" },
      { name: "PostgreSQL", badge: "https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" },
      { name: "MongoDB", badge: "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" },
      { name: "Firebase", badge: "https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" },
    ],
  },
  {
    category: "Web3 & Blockchain",
    skills: [
      { name: "Ethers.js", badge: "https://img.shields.io/badge/Ethers.js-2535A0?style=for-the-badge&logo=ethereum&logoColor=white" },
      { name: "Hardhat", badge: "https://img.shields.io/badge/Hardhat-FFF100?style=for-the-badge&logo=hardhat&logoColor=black" },
      { name: "Remix", badge: "https://img.shields.io/badge/Remix-000000?style=for-the-badge&logo=remix&logoColor=white" },
      { name: "MetaMask", badge: "https://img.shields.io/badge/MetaMask-F6851B?style=for-the-badge&logo=metamask&logoColor=white" },
    ],
  },
];

export default skillsCategories;