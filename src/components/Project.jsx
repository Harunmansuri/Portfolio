import React from "react";
import image1 from "/public/1.png";
import image2 from "/public/2.png";
import image3 from "/public/3.png";
import image4 from "/public/4.png";
import image5 from "/public/5.png";
import { motion } from "framer-motion";

const projectData = [
  {
    image: image1,
    title: "Habit Tracker",
    description: "lorem",
    technologies: ["html", "css", "javascript"],
  },
  {
    image: image2,
    title: "Todo App",
    description: "lorem",
    technologies: ["html", "css", "javascript"],
  },
  {
    image: image3,
    title: "Social media app",
    description: "lorem",
    technologies: ["html", "css", "javascript"],
  },
  {
    image: image4,
    title: "Restaurant website",
    description: "lorem",
    technologies: ["html", "css", "javascript"],
  },
  {
    image: image5,
    title: "Admin dashboard",
    description: "lorem",
    technologies: ["html", "css", "javascript"],
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8}}
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
        {
          project.technologies.map((tech, index) => (
            <span key={index} className="rounded-lg bg-black p-3">
              {tech}
            </span>
          ))
        }
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
        {
         projectData.map((project, index) => (
           <ProjectCard key={index} project={project} />
         ))
        }
      </div>
      
    </div>
  );
};

export default Project;
