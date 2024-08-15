import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col relative mx-auto py-4 px-2 text-justify indent-0.5 text-sm">
      <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100" className="my-1 px-2 mb-3">
              Hello! I&apos;m Suraj Mishra, a Full-Stack Blockchain Developer and Computer Science Engineering student at GGSIP University, Dwarka. 
              With a strong passion for Blockchain, Web3.0, and tech innovation, I bring over 3 years of experience in building decentralized applications (DApps) from the ground up. 
              I&apos;m proficient in programming languages like C and C++, and excel in problem-solving, thriving in challenging environments where I can create innovative solutions.

              
      </h1>
      <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="250" className="my-1 px-2 mb-3">
            I&apos;ve had the opportunity to showcase my skills at major events like ETHIndia and various hackathons. 
            I also take pride in mentoring and inspiring students at the Web3 Bootcamp, 'SAY THE SKILL' .
            As an active member of the Google Developer Student Club and the Developer Relations team in my college&apos;s Software Development Cell, I&apos;m deeply committed to driving technological progress and fostering a collaborative community. make it a little bit concise , considering only the points that will highlight the recruters
      </h1>
      <h1 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="350" className="my-1 px-2 mb-3">
      In addition to my tech pursuits, I&apos;m an active member of my college&apos;s dramatics society. I&apos;ve acted in three plays, directed one, and performed at the prestigious Stein Auditorium at the India Habitat Centre. I&apos;ve also consecutively won the dramatics event at AIIMS cultural fest.
      </h1>
      <h1 className="text-2xl mt-8 underline underline-offset-4 decoration-sky-500 dark:decoration-sky-500/80 ">
        Links
      </h1>
      <ul className="list-disc pl-5 mt-3">
        <li className="mt-1">
          GitHub:{" "}
          <Link target="_blank" href={"https://github.com/suraj-git07"}>
            {" "}
            <span className="underline underline-offset-2 text-sky-600 dark:text-sky-500 font-[500]">
              @suraj-git07
            </span>
          </Link>
        </li>
        <li className="mt-1">
          LinkedIn:{" "}
          <Link target="_blank" href={"https://www.linkedin.com/in/suraj-mishra07/"}>
            {" "}
            <span className="underline underline-offset-2 text-sky-600 dark:text-sky-500 font-[500]">
              @Suraj-Mishra07
            </span>
          </Link>
        </li>
        <li className="mt-1">
          Twitter:{" "}
          <Link target="_blank" href={"https://x.com/Suraj_Mishra7/"}>
            {" "}
            <span className="underline underline-offset-2 text-sky-600 dark:text-sky-500 font-[500]">
              @Suraj_Mishra7
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
          className="rounded-full w-20 h-20 my-2  border border-gray-600 p-1"
        ></Image>

        <p>
          University school of information communication and technology, GGSIPU
        </p>
        <p className="flex relative justify-end italic text-xs my-2">
          overall CGPA: 8.7
        </p>
      </div>
      <div className="flex flex-col text-left">
        <Image
          src={"/ssltgujrat.jpg"}
          width={100}
          height={100}
          alt="gg"
          className="rounded-full w-20 h-20 my-2 border border-gray-600 p-1"
        ></Image>

        <p>SSLT Gujarati Senior Secondary School</p>
        <p className="flex relative justify-end italic text-xs mt-2">
          12th standard: 95.2%
        </p>
      </div>
    </div>
  );
};

export default About;
