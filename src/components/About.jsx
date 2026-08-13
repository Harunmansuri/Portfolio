import React from "react";
import { motion } from "framer-motion";
import {
    FaDownload,
    FaCode,
    FaDatabase,
    FaServer,
    FaNetworkWired,
} from "react-icons/fa";
import { BsCpu } from "react-icons/bs";

const About = () => {
    return (
        <section
            id="about"
            className="w-full px-6 py-20 text-white md:px-16 lg:px-24"
        >
            <div className="mx-auto max-w-6xl">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 text-center"
                >
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-indigo-400">
                        Get To Know Me
                    </p>

                    <h2 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-4xl font-semibold text-transparent md:text-6xl">
                        About Me
                    </h2>
                </motion.div>

                {/* Main Content */}
                <div className="grid gap-12 md:grid-cols-2 md:items-center">
                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-3xl font-semibold md:text-4xl">
                            Building{" "}
                            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                                Digital Experiences
                            </span>{" "}
                            That Matter.
                        </h3>

                        <p className="mt-6 leading-8 text-gray-400">
                            I'm a MERN Stack Developer focused on building modern,
                            responsive and scalable web applications. I enjoy transforming
                            ideas into real-world products with clean code and intuitive
                            user experiences.
                        </p>

                        <p className="mt-4 leading-8 text-gray-400">
                            Along with full-stack development, I'm exploring Generative AI
                            and AI-powered applications. I also have a strong foundation in
                            Data Structures & Algorithms, OOP, DBMS, Operating Systems and
                            Computer Networks.
                        </p>

                        <p className="mt-4 leading-8 text-gray-400">
                            I'm open to freelance projects, internships and opportunities
                            where I can contribute, learn and build impactful software.
                        </p>

                        {/* Resume */}
                        <a
                            href="/resume.pdf"
                            download
                            className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-3.5 font-medium text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-purple-500/40"
                        >
                            <FaDownload />
                            Download Resume
                        </a>
                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {/* DSA */}
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40">
                            <FaCode className="text-2xl text-purple-400" />

                            <h4 className="mt-4 text-xl font-semibold">DSA</h4>

                            <p className="mt-2 text-sm text-gray-500">
                                Problem Solving
                            </p>
                        </div>

                        {/* OOP */}
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/40">
                            <BsCpu className="text-2xl text-pink-400" />

                            <h4 className="mt-4 text-xl font-semibold">OOP</h4>

                            <p className="mt-2 text-sm text-gray-500">
                                Object Oriented Programming
                            </p>
                        </div>

                        {/* DBMS */}
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500/40">
                            <FaDatabase className="text-2xl text-green-400" />

                            <h4 className="mt-4 text-xl font-semibold">DBMS</h4>

                            <p className="mt-2 text-sm text-gray-500">
                                Database Management
                            </p>
                        </div>

                        {/* OS */}
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40">
                            <FaServer className="text-2xl text-cyan-400" />

                            <h4 className="mt-4 text-xl font-semibold">OS</h4>

                            <p className="mt-2 text-sm text-gray-500">
                                Operating Systems
                            </p>
                        </div>

                        {/* CN */}
                        <div className="col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40">
                            <FaNetworkWired className="text-2xl text-orange-400" />

                            <h4 className="mt-4 text-xl font-semibold">
                                Computer Networks
                            </h4>

                            <p className="mt-2 text-sm text-gray-500">
                                Networking fundamentals and communication protocols
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;