import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { motion } from "framer-motion";


const Home = () => {
    return (
        <section id="home" className="relative flex min-h-screen items-center px-5 pt-24 pb-10 sm:px-8 md:px-12">
            <div className="mx-auto grid w-full max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-16">

                {/* Left Side */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="mb-4 text-sm font-medium text-green-400 sm:text-base">
                        👋 Hello, Welcome to my portfolio
                    </p>

                    <h1 className="text-4xl font-bold leading-tight sm:text-5xl xl:text-6xl">
                        Hi, I'm Aman
                        <span className="mt-2 block text-green-400">
                            Full Stack Developer
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                        I build modern, responsive, and user-friendly web applications using React, Node.js, Express, and MongoDB. I enjoy turning ideas into real-world digital experiences.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/10 px-4 py-3 text-sm font-semibold transition hover:border-green-400 hover:text-green-400 active:scale-95 sm:px-5 sm:text-base"
                        >
                            My Resume
                            <Download size={18} />
                        </a>

                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/10 px-4 py-3 text-sm font-semibold transition hover:border-green-400 hover:text-green-400 active:scale-95 sm:px-5 sm:text-base"
                        >
                            View Projects
                            <ArrowRight size={18} />
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="mt-8 flex items-center gap-5">
                        <a
                            href="https://www.linkedin.com/in/amanv08/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="text-gray-400 transition hover:text-green-400"
                        >
                            <CiLinkedin size={35} />
                        </a>
                        <a
                            href="https://github.com/Amanv-08"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="text-gray-400 transition hover:text-green-400"
                        >
                            <FaGithub size={32} />
                        </a>

                    </div>
                </motion.div>

                {/* Right Side - Developer Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="flex min-w-0 justify-center"
                >
                    <div className="w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#181c1c] p-4 shadow-2xl shadow-green-400/5 sm:p-6">

                        {/* Card Header */}
                        <div className="mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
                            <span className="h-3 w-3 rounded-full bg-red-400" />
                            <span className="h-3 w-3 rounded-full bg-yellow-400" />
                            <span className="h-3 w-3 rounded-full bg-green-400" />

                            <span className="ml-auto text-xs text-gray-400 sm:text-sm">
                                developer.jsx
                            </span>
                        </div>

                        {/* Code Content */}
                        <div className="space-y-4 wrap-break font-mono text-xs sm:text-sm md:text-base">

                            <p className="text-purple-400">
                                const developer = {"{"}
                            </p>

                            <p className="pl-3 text-gray-300 sm:pl-5">
                                name: <span className="text-yellow-300">"Aman Verma"</span>,
                            </p>

                            <p className="pl-3 text-gray-300 sm:pl-5">
                                role: <span className="text-green-400">"Full Stack Developer"</span>,
                            </p>

                            <div className="pl-3 text-gray-300 sm:pl-5">
                                <p>frontend: [</p>
                                <p className="pl-3 text-yellow-300 sm:pl-5">
                                    "React", "JavaScript",
                                </p>
                                <p className="pl-3 text-yellow-300 sm:pl-5">
                                    "Tailwind CSS"
                                </p>
                                <p>],</p>
                            </div>

                            <div className="pl-3 text-gray-300 sm:pl-5">
                                <p>backend: [</p>
                                <p className="pl-3 text-yellow-300 sm:pl-5">
                                    "Node.js", "Express.js"
                                </p>
                                <p>],</p>
                            </div>

                            <p className="pl-3 text-gray-300 sm:pl-5">
                                database: <span className="text-yellow-300">"MongoDB"</span>,
                            </p>

                            <p className="pl-3 text-gray-300 sm:pl-5">
                                passion: <span className="text-green-400">"Building for the web"</span>
                            </p>

                            <p className="text-purple-400">{"};"}</p>

                            <p className="border-t border-white/10 pt-4 text-xs text-gray-500 sm:text-sm">
                                // Turning ideas into reality ✨</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <a
                href="#about"
                aria-label="Scroll to About section"
                className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-gray-500 transition hover:text-green-400 md:block"
            >
                <ArrowDown size={22} />
            </a>
        </section>
    );
};

export default Home;