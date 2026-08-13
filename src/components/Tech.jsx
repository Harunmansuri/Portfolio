import React from "react";

import {
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoGithub,
} from "react-icons/bi";

import {
  SiExpress,
  SiMysql,
  SiCplusplus,
  SiTailwindcss,
  SiPython,
  SiTypescript,
  SiGit,
  SiPostman,
} from "react-icons/si";

import { motion } from "framer-motion";

const Tech = () => {
  const variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },

    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const technologies = [
    {
      name: "C++",
      icon: SiCplusplus,
      color: "#00599C",
    },
    {
      name: "Python",
      icon: SiPython,
      color: "#3776AB",
    },
    {
      name: "HTML",
      icon: BiLogoHtml5,
      color: "#E34F26",
    },
    {
      name: "CSS",
      icon: BiLogoCss3,
      color: "#1572B6",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#06B6D4",
    },
    {
      name: "JavaScript",
      icon: BiLogoJavascript,
      color: "#F7DF1E",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3178C6",
    },
    {
      name: "React",
      icon: BiLogoReact,
      color: "#61DAFB",
    },
    {
      name: "Node.js",
      icon: BiLogoNodejs,
      color: "#339933",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "#EEEEEE",
    },
    {
      name: "MongoDB",
      icon: BiLogoMongodb,
      color: "#47A248",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "#4479A1",
    },
    {
      name: "Git",
      icon: SiGit,
      color: "#F05032",
    },
    {
      name: "GitHub",
      icon: BiLogoGithub,
      color: "#FFFFFF",
    },
    {
      name: "Postman",
      icon: SiPostman,
      color: "#FF6C37",
    },
  ];

  return (
    <section
      id="tech"
      className="w-full px-5 py-20 md:px-10 md:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        {/* Heading */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-indigo-400">
            My Stack
          </p>

          <h2 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-4xl font-semibold text-transparent md:text-5xl">
            Technologies & Tools
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500 md:text-base">
            Technologies and tools I use to build modern, scalable and
            production-ready applications.
          </p>
        </motion.div>

        {/* Technologies */}
        <div className="flex max-w-5xl flex-wrap items-center justify-center gap-x-7 gap-y-8 md:gap-x-10 md:gap-y-10">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.name}
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.03,
                }}
                className="group flex w-[90px] flex-col items-center gap-2"
              >
                <Icon
                  style={{ color: tech.color }}
                  className="cursor-pointer text-[55px] transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-110 md:text-[65px]"
                />

                <span className="text-center text-xs text-gray-500 transition-all duration-300 group-hover:text-white md:text-sm">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tech;