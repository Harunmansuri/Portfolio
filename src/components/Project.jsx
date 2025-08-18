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
    description: "A modern and responsive portfolio website built with React and Framer Motion, featuring smooth animations, interactive UI, and a clean design to showcase my skills and projects.",
    technologies: ["React","Tailwind CSS","Framer Motion"],
    href: "https://github.com/Harunmansuri/Portfolio",
  },
  {
    image: image2,
    title: "Youtube UI Clone",
    description: "A YouTube UI clone built with React, featuring a clean and responsive design. Integrated with YouTube API to fetch real-time videos, search results, and channel data.",
    technologies: ["React"],
    href: "https://github.com/Harunmansuri/Youtube-Clone",
  },
  {
    image: image3,
    title: "Todo App",
    description: "A simple and interactive Todo application built with HTML, CSS, and JavaScript. Allows users to add, manage, and delete tasks with a clean and responsive interface.",
    technologies: ["HTML", "CSS", "Javascript"],
    href: "https://github.com/Harunmansuri/To-do-list",
  },
  {
    image: image4,
    title: "Gemini Clone",
    description: "A Gemini AI clone built with React, integrated using the Gemini API. Users can chat and get real-time AI-powered responses in a clean UI",
    technologies: ["React"],
    href: "https://github.com/Harunmansuri/Gemini-clone",
  },
  {
    image: image5,
    title: "Netflix UI Clone",
    description: "A Netflix UI clone built with React, featuring a sleek design and smooth navigation. Integrated with API to display movies and TV shows dynamically.",
    technologies: ["React"],
    href: "https://github.com/Harunmansuri/Netflix-Clone",
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
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px] "
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
            {/* GitHub Icon */}
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110"
            >
              <BsGithub className="text-2xl sm:text-3xl cursor-pointer text-white hover:text-purple-500" />
            </a>

            {/* Eye Icon */}
            <a
              href="#"
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
