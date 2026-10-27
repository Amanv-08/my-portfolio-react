import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiGithub } from "react-icons/si";
import { ArrowDown } from "lucide-react";

const skills = [
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
    { name: "Express.js", icon: SiExpress, color: "#E5E7EB" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
];

const About = () => {
    return (
        <section id="about" className="relative scroll-mt-20 px-5 py-10 sm:px-8 md:px-12 md:py-12">
            <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">

                {/* About Content */}
                <motion.div
                    className="flex h-full flex-col"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="mb-4 text-xl font-medium text-green-400 ">
                        Get To Know Me
                    </p>

                    <h2 className="text-3xl font-bold leading-tight sm:text-4xl xl:text-5xl">
                        Building My Skills & Turning Ideas into
                        <span className="block text-green-400">
                            Real Projects.
                        </span>
                    </h2>

                    <p className="mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                        I'm a web developer focused on building responsive
                        and user-friendly web applications using React,
                        JavaScript, and Tailwind CSS.
                    </p>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                        I enjoy learning by building projects, which helps
                        me understand how different parts of a web
                        application work together. I'm currently expanding
                        my knowledge of backend development and learning
                        how APIs and databases support web applications.
                    </p>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                        My goal is to improve my problem-solving skills,
                        write clean and maintainable code, and build
                        practical projects that demonstrate my
                        understanding of web development.
                    </p>
                </motion.div>

                {/* Skills */}
                <motion.div
                    className="flex h-full flex-col"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                >
                    <p className="mb-4 text-xl font-medium text-green-400">
                        My Tech Stack
                    </p>

                    <h2 className="mb-6 text-4xl font-bold sm:text-3xl">
                        Technologies I Work With
                    </h2>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {skills.map((skill, index) => {
                            const Icon = skill.icon;

                            return (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.4, delay: index * .06 }}
                                    whileHover={{ y: -6, scale: 1.03 }}
                                    className="group flex min-w-0 flex-col items-center gap-3 rounded-xl border border-white/10 bg-[#181c1c] p-4 transition-colors duration-300 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-400/5 sm:p-5"
                                >
                                    <Icon
                                        size={38}
                                        style={{ color: skill.color }}
                                        className="transition-transform duration-300 group-hover:scale-110"
                                        aria-hidden="true"
                                    />

                                    <span className="text-center text-xs font-medium text-gray-300 sm:text-sm">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

            </div>
            {/* Scroll Indicator */}
            <a
                href="#projects"
                aria-label="Scroll to Projects section"
                className="absolute bottom-2 left-1/2 hidden -translate-x-1/2 animate-bounce text-gray-500 transition hover:text-green-400 md:block"
            >
                <ArrowDown size={22} />
            </a>
        </section>
    );
};

export default About;