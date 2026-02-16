import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col relative mx-auto py-4 px-2 text-justify indent-0.5 text-sm">
      <h1
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="100"
        className="my-1 px-2 mb-3"
      >
        Hello! I&apos;m Suraj Mishra, an Associate Engineer and Computer Science graduate
        with a strong focus on Data Engineering, Cloud, and DevOps. I specialize in
        designing and building scalable data pipelines and analytics platforms using
        technologies such as Snowflake, Apache Airflow, dbt, Spark/PySpark, Python,
        and AWS. I enjoy solving complex data problems and delivering reliable,
        production-grade systems.
      </h1>

      <h1
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="250"
        className="my-1 px-2 mb-3"
      >
      My experience spans full-stack development, backend engineering, and scalable data-driven systems, along with over 4 years of hands-on experience in Blockchain and Web3 development. I have participated in national-level hackathons and actively contributed to developer communities, mentoring students and collaborating on real-world technical challenges.

      </h1>

      <h1
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-delay="350"
        className="my-1 px-2 mb-3"
      >
        Beyond technology, I have been deeply involved in theatre and stage
        performances, which has strengthened my communication, creativity, and
        leadership skills, qualities I bring into my professional work and team
        collaborations.
      </h1>

      <h1 className="text-2xl mt-8 underline underline-offset-4 decoration-sky-500 dark:decoration-sky-500/80 ">
        Links
      </h1>
      <ul className="list-disc pl-5 mt-3">
        <li className="mt-1">
          GitHub:{" "}
          <Link target="_blank" href={"https://github.com/suraj-git07"}>
            <span className="underline underline-offset-2 text-sky-600 dark:text-sky-500 font-[500]">
              @suraj-git07
            </span>
          </Link>
        </li>
        <li className="mt-1">
          LinkedIn:{" "}
          <Link target="_blank" href={"https://www.linkedin.com/in/suraj-mishra07/"}>
            <span className="underline underline-offset-2 text-sky-600 dark:text-sky-500 font-[500]">
              @Suraj-Mishra07
            </span>
          </Link>
        </li>
      </ul>

      <h1 className="text-2xl mt-8 underline underline-offset-4 decoration-sky-500 dark:decoration-sky-500/80 ">
        Education
      </h1>

      <div className="flex flex-col text-left">
        <Image
          src={"/ipulogo.webp"}
          width={100}
          height={100}
          alt="gg"
          className="rounded-full w-20 h-20 my-2 border border-gray-600 p-1"
        />
        <p>University School of Information, Communication & Technology, GGSIPU</p>
        <p className="flex relative justify-end italic text-xs my-2">
          9.0 CGPA
        </p>
      </div>

      <div className="flex flex-col text-left">
        <Image
          src={"/ssltgujrat.jpg"}
          width={100}
          height={100}
          alt="gg"
          className="rounded-full w-20 h-20 my-2 border border-gray-600 p-1"
        />
        <p>SSLT Gujarati Senior Secondary School</p>
        <p className="flex relative justify-end italic text-xs mt-2">
          95.2% in 12th Standard
        </p>
      </div>
    </div>
  );
};

export default About;
