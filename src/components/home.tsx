"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import About from "./about";
import { TypeAnimation } from "react-type-animation";
import Modal from "./UI Componemts/Modal";
import { Button } from "./ui/button";
import {
  ArrowUpRightFromSquare,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  NotebookTextIcon,
  TwitterIcon,
} from "lucide-react";
import { Badge } from "./ui/badge";
import Card from "./UI Componemts/ProjectCard";
import expData from "./data/ExpData";
import Project from "./data/ProjectData";
import Skills from "./data/SkillsData";
import ExpCard from "./UI Componemts/ExperienceCard";
import { useTheme } from "next-themes";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [Start, setStart] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen2, setModalOpen2] = useState(false);
  const openModal = () => setModalOpen(true);
  const openModal2 = () => setModalOpen2(true);
  const closeModal = () => setModalOpen(false);
  const closeModal2 = () => setModalOpen2(false);
  const { theme } = useTheme();

  useEffect(() => {}, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStart(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);

  useEffect(() => {
    if (isModalOpen || isModalOpen2) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isModalOpen, isModalOpen2]);

  return (
    <div className="px-8 overflow-hidden lg:w-[750px] lg:m-auto z-[-1]">
      {!Start ? (
        ""
      ) : (
        <>
          {/* ============================== Introduction ============================ */}
          <div id="home" className="flex flex-col pt-[120px]">
            <Image
              data-aos="fade-down"
              // src={`/photo-${theme === "light" ? "light" : "dark"}.jpg`}
              src={`/suraj.jpeg`}
              height={10000}
              width={10000}
              alt={"Profile Photo"}
              className="border rounded-full w-[90px] mb-8 border-[#333] dark:border-white"
            ></Image>
            <div data-aos="fade-right" className="">
              <h1 className="text-3xl font-[700] ">Suraj Mishra</h1>
              <p className="mt-1">
                <TypeAnimation
                  sequence={[
                    "Software engineering student",
                    2000,
                    "Blockchain developer",
                    2000,
                    "MERN Stack developer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={65}
                  deletionSpeed={85}
                  repeat={Infinity}
                />
              </p>
            </div>
            <h1
              data-aos="fade-left"
              className=" pt-6 text-sm text-[#333] dark:text-[#d8d8d8] leading-[21px] "
            >
              Full-Stack Blockchain Developer | Specializing in Optimized Smart Contracts and End-to-End Decentralized Solutions
            </h1>
            <div
              data-aos="fade-up"
              className="flex mt-3 justify-center flex-wrap"
            >
              <Link href={"https://github.com/suraj-git07"} target="_blank">
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="dark:bg-[#333] py-4 mx-2 my-1"
                >
                  <GithubIcon className="w-6 px-1" />
                  <p className="font-[500] text-sm tracking-wide">
                    @surajMishra
                  </p>
                  <p className=" text-[11px] px-2 text-gray-500 flex pt-1">
                    Github
                  </p>
                  <ArrowUpRightFromSquare className="h-3 w-3 text-gray-500" />
                </Button>
              </Link>
              <Link
                href={"https://www.linkedin.com/in/suraj-mishra07/"}
                target="_blank"
              >
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="dark:bg-[#333] py-4 mx-2 my-1"
                >
                  <LinkedinIcon className="w-6 px-1" />
                  <p className="font-[500] text-sm tracking-wide">
                    @surajMishra
                  </p>
                  <p className=" text-[11px] px-2 text-gray-500 flex pt-1">
                    Linkedin
                  </p>
                  <ArrowUpRightFromSquare className="h-3 w-3 text-gray-500" />
                </Button>
              </Link>
              <Link
                href={
                  "https://drive.google.com/file/d/136RRasW6gZtbhY2kQpIindM1SoEZxtDy/view?usp=drive_link"
                }
                target="_blank"
              >
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="dark:bg-[#333] py-4 mx-2 my-1"
                >
                  <NotebookTextIcon className="w-6 px-1" />
                  <p className="font-[500] text-sm tracking-wide">
                    Suraj Mishra
                  </p>
                  <p className=" text-[11px] px-2 text-gray-500 flex pt-1">
                    Resume
                  </p>
                  <ArrowUpRightFromSquare className="h-3 w-3 text-gray-500" />
                </Button>
              </Link>
            </div>
          </div>

          {/* ============================== About me ============================ */}

          <div id="about" className=" flex flex-col pt-[10vh]">
            <h1
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-anchor-placement="top-bottom"
              className="text-2xl underline decoration-sky-500 dark:decoration-sky-500/80 underline-offset-[5px] decoration-4 tracking-wide antialiased "
            >
              About Me
            </h1>
            <p
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-anchor-placement="top-bottom"
              className="line-clamp- my-3 tracking-[0.3px] "
            >
              
              Hello! I&apos;m Suraj Mishra, a Full-Stack Blockchain Developer and Computer Science Engineering student at GGSIP University, Dwarka. 
              With over 3 years of experience, I specialize in building decentralized applications (DApps) from scratch. 
              Proficient in Solidity & C/C++, I excel in problem-solving and thrive in challenging environments.
              I&apos;ve showcased my skills at major events like ETHIndia and various hackathons, and I&apos;m passionate about mentoring fellow developers about Web3.
              As an active member of the Google Developer Student Club and Developer Relations in my college&apos;s Software Development Cell, I&apos;m dedicated to driving innovation and fostering a collaborative tech community.
            </p>
            <div
              data-aos="fade-left"
              data-aos-anchor-placement="top-bottom"
              className="flex antialiased justify-end text-sky-600 dark:text-sky-500 relative font-bold"
            >
              <Button
                onClick={openModal}
                variant={"outline"}
                className="text-sky-600 dark:text-sky-500 font-bold w-fit"
              >
                {" "}
                Read More <ArrowUpRightFromSquare className="mx-2 h-4 w-4" />
              </Button>
            </div>

            {isModalOpen && (
              <Modal Heading="About Me" onClose={closeModal}>
                <About />
              </Modal>
            )}
          </div>

          {/* ============================== Skills ============================ */}

          <div id="skills" className="flex flex-col pt-[14vh]">
            <h1
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              className="text-2xl underline decoration-sky-500 dark:decoration-sky-500/80 underline-offset-[5px] decoration-4 tracking-wide antialiased "
            >
              Skills
            </h1>
            <div className="my-4">
              {Skills.map((skill, index) => (
                <Badge
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  variant="outline"
                  key={index}
                  className="my-1 mx-1 text-[14px]"
                >
                  <Image
                    src={`/Skills/${skill}.png`}
                    alt={`${skill}`}
                    height={18}
                    width={18}
                    className="mr-2"
                  />
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* ============================== Projects ============================ */}

          <div id="projects" className="flex flex-col pt-[14vh]">
            <h1
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              className="text-2xl underline decoration-sky-500 dark:decoration-sky-500/80 underline-offset-[5px] decoration-4 tracking-wide antialiased "
            >
              Projects
            </h1>
            <div
              // data-aos="fade-up"
              // data-aos-anchor-placement="top-bottom"
              className="my-2 rounded-xl bg"
            >
              {!Start ? (
                "loading"
              ) : (
                <div className="flex justify-around flex-wrap">
                  {Project.slice(0, 3).map((project: any, index: any) => (
                    <div
                      className="flex"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      key={index}
                    >
                      <Card
                        Title={project.heading}
                        Description={project.summary}
                        link={project.link}
                        code={project.code}
                        Img={project.img}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div
              data-aos="fade-left"
              data-aos-anchor-placement="top-bottom"
              className="flex justify-end"
            >
              <Button
                onClick={openModal2}
                variant={"outline"}
                className="text-sky-600 dark:text-sky-500 font-bold w-fit"
              >
                {" "}
                View All Projects{" "}
                <ArrowUpRightFromSquare className="mx-2 h-4 w-4" />
              </Button>
            </div>

            {isModalOpen2 && (
              <Modal Heading="Projects" onClose={closeModal2}>
                <div className="flex flex-wrap">
                  {Project.map((project: any, index: any) => (
                    <Card
                      Title={project.heading}
                      Description={project.summary}
                      link={project.link}
                      code={project.code}
                      Img={project.img}
                      key={index}
                    />
                  ))}
                </div>
              </Modal>
            )}
          </div>

          {/* ============================== Experience ============================ */}

          <div id="experience" className="flex flex-col pt-[14vh]">
            <h1
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              className="text-2xl underline decoration-sky-500 dark:decoration-sky-500/80 underline-offset-[5px] decoration-4 tracking-wide antialiased "
            >
              Experience
            </h1>
            <div className="my-2 rounded-xl bg">
              <div className="border-l-8 ">
                {!Start
                  ? "loading ! "
                  : expData.map((exp, index) => (
                      <div key={index}>
                        <ExpCard
                          img={`/Experience${exp.img}`}
                          companyName={exp.companyName}
                          role={exp.role}
                          description={exp.description}
                          timePeriod={exp.timePeriod}
                        ></ExpCard>
                      </div>
                    ))}
              </div>
            </div>
          </div>

          {/* ============================== Contact me ============================ */}

          <div id="connect" className="flex flex-col mt-8">
            <h1
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              className="text-2xl underline decoration-sky-500 dark:decoration-sky-500/80 underline-offset-[5px] decoration-4 tracking-wide antialiased "
            >
              Get in Touch
            </h1>
            <div className="flex flex-col my-2 rounded-xl items-center">
              <h1
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="m-auto my-4 text-center"
              >
                Feel free to connect
              </h1>
              <div className="flex">
                <Link href={"https://instagram.com/_samrat_mishra"}>
                  <Button
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay="50"
                    size={"icon"}
                    className="mx-1"
                  >
                    <InstagramIcon />
                  </Button>
                </Link>
                <Link href={"https://x.com/Suraj_Mishra7/"}>
                  <Button
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay="100"
                    size={"icon"}
                    className="mx-1"
                  >
                    {" "}
                    <TwitterIcon />{" "}
                  </Button>
                </Link>
                <Link
                  href={
                    "mailto:suraj844722@gmail.com?subject=Hello%20there&body=How%20are%20you%3F"
                  }
                >
                  <Button
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay="150"
                    size={"icon"}
                    className="mx-1"
                  >
                    {" "}
                    <MailIcon />{" "}
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* ============================== Footer ============================ */}

          <div className="text-sm border-t-2 pt-4 mt-8 text-center dark:text-[#efefef] text-[#333]">
            <h1 className="text-left sm:text-center ">
              Powered by{" "}
              <Link href={"https://nextjs.org"}>
                <span className="text-sky-600 dark:text-sky-500">Next.js</span>
              </Link>{" "}
              and{" "}
              <Link href={"https://tailwindcss.com"}>
                <span className="text-sky-600 dark:text-sky-500">
                  TailwindCSS
                </span>
              </Link>
              . Hosted on{" "}
              <Link href={"https://vercel.com"}>
                <span className="text-sky-600 dark:text-sky-500">Vercel</span>
              </Link>
              .
            </h1>
            <h1 className="mb-6 py-1">
              © 2024 <b className="font-[700] tracking-[1px]">Suraj Mishra</b>
              . All rights reserved.
            </h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
