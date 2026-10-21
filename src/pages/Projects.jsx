import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
    {
        title: "Todo App",
        description: "A task management app to add, edit, delete, and filter tasks.",
        image: "/images/todo.png",
        tech: ["React", "JavaScript", "Tailwind CSS"],
        status: "Completed",
        github: "https://github.com/Amanv-08/todo-react",
        live: "#",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen bg-[#111313] px-5 py-24 text-white sm:px-8 md:px-12">
            <div className="mx-auto max-w-6xl">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <p className="mb-3 text-lg font-semibold tracking-[0.25em] text-green-400">
                        My Work
                    </p>

                    <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                        Featured <span className="text-green-400">Projects</span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
                        Here are some projects I am building to practice my skills
                        and solve real-world problems.
                    </p>
                </motion.div>

                {/* Project Cards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ y: -6 }}
                            className="flex flex-col rounded-2xl border border-white/10 bg-[#181c1c] p-5 transition-colors duration-300 hover:border-green-400/40 sm:p-6">

                            {/* Project Image */}
                            <div className="mb-5 h-48 overflow-hidden rounded-xl border border-white/10">
                                <img
                                    src={project.image}
                                    alt={`${project.title} project preview`}
                                    className="h-full w-full object-fit transition-transform duration-500 hover:scale-102"
                                />
                            </div>

                            {/* Card Header */}
                            <div className="mb-5 flex items-center justify-between gap-3">
                                <span className="rounded-xl border border-green-400/20 bg-green-400/10 px-3 py-2 text-sm font-bold text-green-400">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <span
                                    className={`rounded-full px-3 py-1 text-xs ${project.status === "Completed" ? "border border-green-400/20 bg-green-400/10 text-green-300" : "border border-amber-400/20 bg-amber-400/10 text-amber-300"
                                        }`}
                                >
                                    {project.status}
                                </span>
                            </div>

                            {/* Project Details */}
                            <h3 className="text-xl font-bold text-white">
                                {project.title}
                            </h3>

                            <p className="mt-3 flex-1 text-sm leading-7 text-gray-400">
                                {project.description}
                            </p>

                            {/* Technology Tags */}
                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Project Links */}
                            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                                <a
                                    href={project.github}
                                    aria-label={`GitHub repository for ${project.title}`}
                                    className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-green-400">
                                    <FaGithub size={18} />
                                    GitHub
                                </a>

                                <a
                                    href={project.live}
                                    aria-label={`Live demo of ${project.title}`}
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-green-400 transition hover:gap-3 hover:text-green-300">
                                    Live Demo
                                    <ArrowUpRight size={18} />
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;