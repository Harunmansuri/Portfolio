import React from "react";
import { motion } from "framer-motion";
import {
  BsEnvelope,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex min-h-[80vh] w-full items-center justify-center px-5 py-24 md:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-14 text-center backdrop-blur-xl md:px-16 md:py-20"
      >
        {/* Background Glow */}
        <div className="absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />

        {/* Availability */}
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          Available for Freelance Projects
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-semibold text-white md:text-6xl">
          Let's Build Something{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Great
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 md:text-lg">
          Have a project idea, startup concept, or website in mind? I'm
          available for freelance work and would love to help turn your idea
          into a modern, scalable, and user-friendly web application.
        </p>

        {/* Email */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
            Get in touch
          </p>

          <a
            href="mailto:mrharun961766@gmail.com"
            className="text-base font-medium text-gray-200 transition-colors duration-300 hover:text-indigo-400 md:text-lg"
          >
            mrharun961766@gmail.com
          </a>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:mrharun961766@gmail.com"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/30"
          >
            <BsEnvelope className="text-lg" />
            Start a Conversation
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-10 flex items-center justify-center gap-5">
          <a
            href="https://github.com/harunmansuri"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/[0.04] p-3 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:text-white"
          >
            <BsGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/harun-mansuri"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/[0.04] p-3 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:text-blue-400"
          >
            <BsLinkedin />
          </a>

          <a
            href="https://x.com/Harunmansuri961"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/[0.04] p-3 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/30 hover:text-sky-400"
          >
            <BsTwitter />
          </a>
        </div>

        {/* Bottom Text */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs text-gray-600">
            MERN Stack Developer · GenAI Developer · Freelancer
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;