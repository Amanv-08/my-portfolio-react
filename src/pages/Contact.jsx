import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Mail, ArrowUpRight, Send } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="relative flex min-h-screen items-center overflow-x-hidden bg-[#111313] px-5 py-24 text-white sm:px-8 md:px-12">
            <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">

                {/* Left Column */}
                <motion.div
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col gap-8"
                >
                    <div>
                        <p className="mb-4 flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-green-400">
                            <span className="h-px w-8 bg-green-400" />
                            Get in Touch
                        </p>

                        <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                            Let's Work{" "}
                            <span className="text-green-400">Together.</span>
                        </h2>

                        <p className="mt-4 max-w-lg text-sm text-gray-400 sm:text-base">
                            💌 Have a project in mind? Let’s connect! 👋
                        </p>
                        <p className="mt-4 max-w-lg text-sm text-gray-400 sm:text-base">
                            🚀 Open to new projects, creative ideas, and exciting opportunities. ✨
                        </p>
                        <p className="mt-4 max-w-lg text-sm text-gray-400 sm:text-base">
                            🤝 Let’s create something amazing together! 🤝
                        </p>
                    </div>

                    {/* Email Card */}
                    <a
                        href="mailto:its_me_01@gmail.com"
                        className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#181c1c] p-5 transition duration-300 hover:border-green-400/40 hover:bg-[#1b211e]"
                    >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-green-400/20 bg-green-400/10 text-green-400 transition group-hover:bg-green-400 group-hover:text-[#111313]">
                            <Mail size={22} />
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="text-sm text-gray-400">Email Me</p>
                            <p className="mt-1 break-all font-medium text-white">
                                its_me_01@gmail.com
                            </p>
                        </div>

                        <ArrowUpRight
                            size={20}
                            className="shrink-0 text-gray-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-green-400"
                        />
                    </a>

                    {/* GitHub Card */}
                    <a
                        href="https://github.com/Amanv_08"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#181c1c] p-5 transition duration-300 hover:border-green-400/40 hover:bg-[#1b211e]"
                    >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-green-400/20 bg-green-400/10 text-green-400 transition group-hover:bg-green-400 group-hover:text-[#111313]">
                            <FaGithub size={22} />
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="text-sm text-gray-400">GitHub</p>
                            <p className="mt-1 font-medium text-white">
                                Explore My Projects
                            </p>
                        </div>

                        <ArrowUpRight
                            size={20}
                            className="shrink-0 text-gray-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-green-400"
                        />
                    </a>

                    <div className="border-l-2 border-green-400/50 pl-4">
                        <p className="text-sm leading-6 text-gray-400">
                            Have an idea? I'm always happy to connect, learn, and
                            explore new opportunities.
                        </p>
                    </div>
                </motion.div>

                {/* Right Column — Contact Form UI */}
                <motion.div
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                    className="w-full rounded-2xl border border-white/10 bg-[#181c1c] p-5 shadow-2xl shadow-green-400/3 sm:p-8"
                >
                    <div className="mb-7">
                        <h3 className="text-xl font-semibold sm:text-2xl">
                            Send a Message
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-400">
                            Fill in the details below to get in touch.
                        </p>
                    </div>

                    <form className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name"
                                className="text-sm font-medium text-gray-300">
                                Your Name
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                className="w-full rounded-xl border border-white/10 bg-[#111313] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-400/60 focus:ring-2 focus:ring-green-400/10"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email"
                                className="text-sm font-medium text-gray-300"
                            >
                                Your Email
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-xl border border-white/10 bg-[#111313] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-400/60 focus:ring-2 focus:ring-green-400/10"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message"
                                className="text-sm font-medium text-gray-300"
                            >
                                Your Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Tell me about your project..."
                                className="w-full resize-y rounded-xl border border-white/10 bg-[#111313] px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-gray-600 focus:border-green-400/60 focus:ring-2 focus:ring-green-400/10"
                            />
                        </div>

                        <button type="button"
                            className="group mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-400 px-5 py-3.5 font-semibold text-[#111313] transition duration-300 hover:bg-green-300 active:scale-[0.98]"
                        >
                            Send Message
                            <Send size={17} className="transition-transform group-hover:translate-x-1" />
                        </button>
                    </form>

                    <p className="mt-5 text-center text-xs leading-5 text-gray-500">
                        Looking forward to hearing from you!
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;