import React from "react";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";

const projectData = [
  {
    image: "/1.png",
    title: "My Portfolio",
    category: "Personal Portfolio",
    description:
      "A modern and responsive developer portfolio built to showcase my skills, experience, projects, and services with smooth animations and a clean user experience.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Harunmansuri/Portfolio",
    live: "https://harunmansuri.vercel.app/",
  },

  {
    image: "/3.png",
    title: "TaskZen",
    category: "Task Management",
    description:
      "A full-stack task management application that allows users to create, organize, prioritize, and track tasks with authentication and deadline management.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    github: "https://github.com/Harunmansuri/TaskZen",
    live: "https://task-zen-frontend-git-master-harunmansuris-projects.vercel.app/register",
  },

  {
    image: "/7.png",
    title: "CashMate",
    category: "Expense Management",
    description:
      "A modern expense management application designed to help users manage and track their financial activities through a simple and responsive interface.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    github: null,
    live: "https://cashmate-ecru.vercel.app/login",
  },

  {
    image: "/6.png",
    title: "Gup-Chup Chat App",
    category: "Real-Time Chat",
    description:
      "A real-time chat application that enables users to communicate instantly through a responsive interface with real-time messaging functionality.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
    ],
    github: null,
    live: "https://gup-chup-chat-app.vercel.app/",
  },

  {
    image: "/2.png",
    title: "PrepCs Chat Bot",
    category: "AI / Chatbot",
    description:
      "A Computer Science learning chatbot that provides short and concise answers to core CS concepts using a modern React frontend and scalable backend architecture.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    github: "https://github.com/Harunmansuri/PrepCs-Chat-Bot",
    live: "https://prep-cs-frontend.vercel.app/",
  },

  {
    image: "/4.png",
    title: "Gemini Clone",
    category: "Generative AI",
    description:
      "A Gemini-inspired AI chatbot interface integrated with the Gemini API to provide real-time AI-powered responses through a clean and responsive UI.",
    technologies: ["React", "Gemini API"],
    github: "https://github.com/Harunmansuri/Gemini-clone",
    live: null,
  },

  {
    image: "/5.png",
    title: "Netflix UI Clone",
    category: "Frontend",
    description:
      "A responsive Netflix-inspired streaming interface featuring a modern layout and dynamically loaded movie and TV show content.",
    technologies: ["React", "API"],
    github: "https://github.com/Harunmansuri/Netflix-Clone",
    live: null,
  },
];

const ScrollReveal = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm"
    >
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-900">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />

        {/* Category */}
        <span className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-xs text-gray-300 backdrop-blur-md">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col p-6">
        <h2 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-purple-400">
          {project.title}
        </h2>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex min-h-[58px] flex-wrap content-start gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-gray-300 transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white"
            >
              <BsGithub className="text-lg" />
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <FaExternalLinkAlt className="text-xs" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Project = () => {
  return (
    <section
      id="project"
      className="w-full px-5 py-20 text-white md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <ScrollReveal>
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-indigo-400">
              My Work
            </p>

            <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-4xl font-semibold text-transparent md:text-6xl">
              Featured Projects
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
              A selection of projects I've built using modern technologies,
              full-stack development practices, and AI-powered solutions.
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projectData.map((project, index) => (
            <ScrollReveal
              key={project.title}
              delay={index % 2 === 0 ? 0 : 0.1}
            >
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;