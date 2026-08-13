import React from "react";
import image from "/image.jpeg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex min-h-screen w-full items-center justify-center px-6 py-24 md:px-16 lg:px-24"
    >
      <div className="flex w-full max-w-6xl flex-col items-center justify-between gap-12 md:flex-row md:gap-16">

        {/* LEFT - PROFILE IMAGE */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex w-full justify-center md:w-1/2"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 -z-10 rounded-full bg-indigo-600/30 blur-3xl"></div>

            <img
              src={image}
              alt="Harun Mansuri"
              className="w-[250px] cursor-pointer rounded-full border-2 border-indigo-500/30 shadow-2xl shadow-indigo-900/50 transition-all duration-500 hover:scale-105 hover:border-indigo-500 md:w-[320px] lg:w-[350px]"
            />
          </div>
        </motion.div>

        {/* RIGHT - CONTENT */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left"
        >
          {/* Freelancer Badge */}
          <div className="mb-5 flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
            Available for Freelance Work
          </div>

          {/* Name */}
          <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-5xl font-semibold text-transparent md:text-6xl lg:text-7xl">
            Harun Mansuri
          </h1>

          {/* Role */}
          <h2 className="mt-4 text-2xl font-medium text-white md:text-3xl lg:text-4xl">
            MERN Stack &{" "}
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              GenAI Developer
            </span>
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 md:text-base">
            I build modern, scalable and AI-powered web applications using
            MongoDB, Express.js, React, Node.js and Generative AI. I help
            businesses and startups turn their ideas into fast, responsive and
            user-friendly digital products.
          </p>

          {/* Skills */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
            <span className="rounded-full border border-gray-700 bg-gray-900/50 px-4 py-2 text-xs text-gray-300">
              MERN Stack
            </span>

            <span className="rounded-full border border-gray-700 bg-gray-900/50 px-4 py-2 text-xs text-gray-300">
              GenAI
            </span>

            <span className="rounded-full border border-gray-700 bg-gray-900/50 px-4 py-2 text-xs text-gray-300">
              REST APIs
            </span>

            <span className="rounded-full border border-gray-700 bg-gray-900/50 px-4 py-2 text-xs text-gray-300">
              JavaScript
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            {/* Primary Button */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-3.5 font-medium text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30"
            >
              Let's Work Together
            </a>

            {/* Secondary Button */}
            <a
              href="#project"
              className="inline-flex items-center justify-center rounded-full border border-gray-600 bg-white/5 px-7 py-3.5 font-medium text-gray-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 hover:bg-purple-500/10 hover:text-white"
            >
              View My Work
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;