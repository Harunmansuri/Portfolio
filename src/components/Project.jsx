import React from "react";
import image1 from "/public/1.png";
import image2 from "/public/2.png";
import image3 from "/public/3.png";
import image4 from "/public/4.png";
import image5 from "/public/5.png";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { FaEye } from "react-icons/fa";

const projectData = [
  {
    image: image1,
    title: "My Portfolio",
    description:
      "A modern and responsive portfolio website built with React and Framer Motion, featuring smooth animations, interactive UI, and a clean design to showcase my skills and projects.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    href: "https://github.com/Harunmansuri/Portfolio",
    live: "https://harunmansuri.vercel.app",
  },
  {
    image: image2,
    title: "PrepCs Chat Bot",
    description:
      "PrepCs Chat Bot – A MERN Stack chatbot that provides short and crisp answers for core Computer Science topics. Built using React.js, Tailwind CSS, Node.js, Express.js, and MongoDB, with a focus on clean UI, efficient APIs, and scalable backend. Currently running on limited data and continuously improving.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    href: "https://github.com/Harunmansuri/PrepCs-Chat-Bot",
    live: "https://prep-cs-frontend.vercel.app/",
  },
  {
    image: image3,
    title: "TaskZEN App",
    description:
      "TaskZen is a MERN stack-based task management web application that allows users to create, manage, and track tasks with authentication, priority settings, and deadline management. It features a responsive UI and secure backend integration to enhance productivity and workflow management.",
    technologies: ["react", "tailwind css", "express js", "mongodb"],
    href: "https://github.com/Harunmansuri/TaskZen",
    live: "https://task-zen-frontend-git-master-harunmansuris-projects.vercel.app/register",
  },
  {
    image: image4,
    title: "Gemini Clone",
    description:
      "A Gemini AI clone built with React, integrated using the Gemini API. Users can chat and get real-time AI-powered responses in a clean UI",
    technologies: ["React"],
    href: "https://github.com/Harunmansuri/Gemini-clone",
    live: "#",
  },
  {
    image: image5,
    title: "Netflix UI Clone",
    description:
      "A Netflix UI clone built with React, featuring a sleek design and smooth navigation. Integrated with API to display movies and TV shows dynamically.",
    technologies: ["React"],
    href: "https://github.com/Harunmansuri/Netflix-Clone",
    live: "#",
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          alt=""
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-sm text-gray-400">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-row items-center gap-6">
            {/* GitHub */}
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110"
            >
              <BsGithub className="text-2xl sm:text-3xl cursor-pointer text-white hover:text-purple-500" />
            </a>

            {/* Live Demo */}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110"
            >
              <FaEye className="text-2xl sm:text-3xl cursor-pointer text-white hover:text-purple-500" />
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Project = () => {
  return (
    <div
      id="project"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
