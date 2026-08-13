import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BsLinkedin,
  BsGithub,
  BsTwitter,
  BsBriefcase,
} from "react-icons/bs";
import { BiX, BiMenu } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Tech", href: "#tech" },
    { name: "Projects", href: "#project" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: SiLeetcode,
      href: "https://leetcode.com/harunmansuri1",
      hover: "hover:text-yellow-400",
    },
    {
      icon: BsLinkedin,
      href: "https://www.linkedin.com/in/harun-mansuri",
      hover: "hover:text-blue-500",
    },
    {
      icon: BsGithub,
      href: "https://github.com/harunmansuri",
      hover: "hover:text-white",
    },
    {
      icon: BsTwitter,
      href: "https://x.com/Harunmansuri961",
      hover: "hover:text-sky-400",
    },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-12">
        {/* Logo */}
        <a
          href="#hero"
          onClick={closeMenu}
          className="text-2xl font-bold tracking-tight transition-all duration-300 hover:scale-105"
        >
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Harun
          </span>
          <span className="text-white">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-sm font-medium text-gray-400 transition-all duration-300 hover:text-white"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Desktop Right Section */}
        <div className="hidden items-center gap-5 md:flex">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;

              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-lg text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:scale-110 ${social.hover}`}
                >
                  <Icon />
                </a>
              );
            })}
          </div>

          {/* Hire Me */}
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-sm font-medium shadow-lg shadow-purple-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-purple-500/40"
          >
            <BsBriefcase />
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-white/10 bg-white/5 p-2 text-3xl text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <BiX /> : <BiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col px-6 py-8">
              {/* Mobile Links */}
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="text-lg font-medium text-gray-300 transition-all duration-300 hover:translate-x-2 hover:text-white"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-white/10"></div>

              {/* Social + Hire */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-xl text-gray-400 transition-all duration-300 hover:-translate-y-1 ${social.hover}`}
                      >
                        <Icon />
                      </a>
                    );
                  })}
                </div>

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-sm font-medium"
                >
                  <BsBriefcase />
                  Hire Me
                </a>
              </div>

              {/* Mobile Developer Text */}
              <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm text-gray-500">Available for</p>

                <p className="mt-1 text-sm font-medium text-gray-200">
                  MERN Stack Development & Freelance Projects
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;