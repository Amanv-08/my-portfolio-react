import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp } from "lucide-react";

const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

const fadeUp = {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.5, ease: "easeOut" },
};

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="relative overflow-hidden px-5 pt-12 sm:px-8 sm:pt-10 lg:px-12 lg:pt-14"
        >
            <div className="mx-auto max-w-7xl">

                {/* Main Footer: Mobile and Small Screens */}
                <div
                    className="grid border-t pt-12 border-white/10 grid-cols-1 justify-items-center gap-10 pb-10 text-center sm:grid-cols-2 sm:gap-12 sm:pb-12 md:hidden"
                >
                    {/* Quick Links */}
                    <motion.div
                        {...fadeUp}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex w-full min-w-0 flex-col items-center sm:col-span-2"
                    >
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                            Quick Links
                        </h3>

                        <nav aria-label="Footer navigation" className="mt-5 w-full">
                            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.name} className="shrink-0">
                                        <a
                                            href={link.href}
                                            className="group inline-flex items-center gap-2 whitespace-nowrap text-sm text-gray-400 transition-colors duration-300 hover:text-green-400 focus-visible:outline-none focus-visible:text-green-400"
                                        >
                                            <span
                                                aria-hidden="true"
                                                className="h-1 w-1 shrink-0 rounded-full bg-green-400/50 transition-colors group-hover:bg-green-400"
                                            />
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </motion.div>

                    {/* Contact CTA */}
                    <motion.div
                        {...fadeUp}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex w-full min-w-0 flex-col items-center sm:col-span-2"
                    >
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                            Let's Connect
                        </h3>

                        <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-gray-400">
                            Have a project in mind or want to collaborate?
                        </p>
                        <p className="mx-auto mt-2 max-w-sm text-sm leading-7 text-gray-400">
                            I'd love to hear from you.
                        </p>

                        <a
                            href="#contact"
                            className="group mt-5 inline-flex max-w-full items-center justify-center gap-2 rounded-lg border border-green-400/30 bg-green-400/10 px-4 py-3 text-sm font-medium text-green-400 transition-all duration-300 hover:border-green-400 hover:bg-green-400 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
                        >
                            Get In Touch
                            <ArrowUpRight
                                size={17}
                                aria-hidden="true"
                                className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </a>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div
                    className="grid grid-cols-1 justify-items-center pb-6 gap-4 text-center sm:gap-5 md:border-t border-white/10 md:py-6 md:grid-cols-1 lg:grid-cols-3 lg:items-center lg:gap-4 lg:text-left"
                >
                    {/* Copyright */}
                    <p
                        className="text-xs leading-6 text-gray-500 sm:text-sm lg:justify-self-start"
                    >
                        © {currentYear}{" "}
                        All rights reserved.
                    </p>
                    {/* React and Love Credits */}
                    <p className="flex flex-wrap items-center justify-center gap-1.5 text-center text-xs text-gray-500 sm:text-sm">
                        Crafted with 💚 by{" "}
                        <span className="font-medium text-gray-300">Aman</span>
                        <span>✨</span>
                    </p>

                    {/* Back to Top */}
                    <a
                        href="#home"
                        aria-label="Back to top"
                        className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition-all duration-300 hover:border-green-400 hover:bg-green-400/10 hover:text-green-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 lg:justify-self-end"
                    >
                        <ArrowUp
                            size={17}
                            aria-hidden="true"
                            className="transition-transform duration-300 group-hover:-translate-y-0.5"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default memo(Footer);