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
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const openModal = () => setModalOpen(true);
  const openModal2 = () => setModalOpen2(true);
  const closeModal = () => setModalOpen(false);
  const closeModal2 = () => setModalOpen2(false);
  const { theme } = useTheme();

  useEffect(() => { }, [theme]);

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
            {/* Banner Background */}
            <div 
              data-aos="fade-down" 
              className="hidden sm:block relative w-full h-[200px] rounded-sm overflow-hidden mb-[-85px]"
            >
              <Image
                src="/banner.jpg"
                alt="Banner"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Profile Section - Image and Name */}
            <div className="flex items-start gap-4 sm:flex-col sm:items-start">
              {/* Profile Picture */}
              <Image
                data-aos="fade-down"
                data-aos-delay="100"
                src={`/suraj.png`}
                height={10000}
                width={10000}
                alt={"Profile Photo"}
                className="border-4 rounded-full w-[90px] h-[90px] sm:w-[150px] sm:h-[150px] sm:mb-8 border-white dark:border-[#1a1a1a] bg-white dark:bg-[#1a1a1a] relative z-5 sm:ml-6 flex-shrink-0"
              ></Image>
              
              {/* Name and Title */}
              <div data-aos="fade-right" className="flex-1 sm:w-full mt-4 sm:mt-0">
                <h1 className="text-3xl font-[700]">Suraj Mishra</h1>
                <p className="mt-1">
                  <TypeAnimation
                  sequence={[
                    "Full-Stack Engineer",
                    2000,
                    "Data Engineering",
                    2000,
                    "DevOps & Cloud",
                    2000,
                    "Blockchain & Web3 Development",
                    2000,
                  ]}
                    wrapper="span"
                    speed={65}
                    deletionSpeed={85}
                    repeat={Infinity}
                  />
                </p>
              </div>
            </div>
            
            <h1
              data-aos="fade-left"
              className=" pt-6 text-sm text-[#333] dark:text-[#d8d8d8] leading-[21px] "
            >
              Full-Stack Engineer | Data & Cloud Systems | Former Web3 Builder | B.Tech CSE ’25
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
                  "https://drive.google.com/file/d/1TEo6taSN3sW57IJOSxBwqvBwnDNQZ_g2/view?usp=sharing"
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

            Hello! I&apos;m Suraj Mishra, an Associate Engineer focused on Software Development, DevOps, and Data Engineering. 
I specialize in building scalable backend systems, data pipelines, and cloud-native applications using modern technologies across the stack. 
I also bring over 4 years of hands-on experience in Blockchain and Web3, where I strengthened my problem-solving and system design skills. 
I enjoy tackling complex challenges and delivering reliable, production-ready solutions.

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
            
            <div className="my-8 space-y-5">
              {Skills.map((category, catIndex) => (
                <div
                  key={catIndex}
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay={catIndex * 80}
                  className="bg-gradient-to-br from-white to-gray-50 dark:from-[#1a1a1b] dark:to-[#1e1e1f] rounded-2xl p-5 lg:p-7 shadow-sm hover:shadow-xl dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:border-sky-400 dark:hover:border-sky-600"
                >
                  {/* Category Header with decorative line */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-1 w-1 rounded-full bg-sky-500"></div>
                    <h2 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                      {category.category}
                    </h2>
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-700 dark:to-transparent"></div>
                    
                  </div>
                  
                  {/* Skills Badges Grid */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        data-aos="zoom-in"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-delay={catIndex * 80 + skillIndex * 30}
                        className="transform transition-all duration-300 hover:scale-110 hover:rotate-1"
                      >
                        <Image
                          src={skill.badge}
                          alt={skill.name}
                          width={112}
                          height={28}
                          className="h-[26px] lg:h-[28px] w-auto rounded shadow-sm hover:shadow-md transition-shadow duration-200"
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>
                </div>
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                  {Project.slice(0, 4).map((project: any, index: any) => (
                    <div
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      key={index}
                      className="flex"
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
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
                  : (showAllExperiences ? expData : expData.slice(0, 4)).map((exp, index) => (
                    <div key={index}>
                      <ExpCard
                        img={`/Experience${exp.img}`}
                        companyName={exp.companyName}
                        role={exp.role}
                        description={exp.description}
                        timePeriod={exp.timePeriod}
                        positions={exp.positions}
                      ></ExpCard>
                    </div>
                  ))}
              </div>
              {expData.length > 4 && (
                <div className="flex justify-center mt-4">
                  <Button
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    onClick={() => setShowAllExperiences(!showAllExperiences)}
                    variant="outline"
                    className="px-6 py-2"
                  >
                    {showAllExperiences ? "Show Less" : "Read More"}
                  </Button>
                </div>
              )}
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
                <Link href={"https://www.linkedin.com/in/suraj-mishra07/"}>
                  <Button
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay="50"
                    size={"icon"}
                    className="mx-1"
                  >
                    <LinkedinIcon />
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
            
            <h1 className="mb-6 py-1">
              © 2026 <b className="font-[700] tracking-[1px]">Suraj Mishra</b>
              . All rights reserved.
            </h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
