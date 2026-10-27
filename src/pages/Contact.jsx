import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    const sendEmail = async (evt) => {
        evt.preventDefault();

        if (!name.trim() || !email.trim() || !message.trim()) {
            setError(true);
            setSuccess(false);
            return;
        }

        setError(false);
        setSuccess(false);
        setLoading(true);

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: name.trim(),
                    reply_to: email.trim(),
                    message: message.trim(),
                },
                {
                    PUBLIC_KEY
                }
            );

            /* alert("Message sent successfully! 🎉"); */
            setSuccess(true);

            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            console.error("Email sending failed:", error);

            /* alert("Message could not be sent. Please try again."); */
            setError(true);
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="relative scroll-mt-15 px-5 py-10 sm:px-8 md:px-12 md:py-12">
            <div className="mx-auto grid w-full max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-16">

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
                            💌 Have a project in mind? Let’s connect!
                        </p>
                        <p className="mt-4 max-w-lg text-sm text-gray-400 sm:text-base">
                            🚀 Open to new projects, creative ideas, and exciting opportunities.
                        </p>
                        <p className="mt-4 max-w-lg text-sm text-gray-400 sm:text-base">
                            🤝 Let’s create something amazing together!
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-3 gap-3">
                        {[
                            { icon: "⌘", title: "Responsive", subtitle: "Every screen" },
                            { icon: "↯", title: "Interactive", subtitle: "Smooth UI" },
                            { icon: "◇", title: "Modern UI", subtitle: "Clean design" },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: index * 0.12, duration: 0.4 }}
                                whileHover={{ y: -5 }}
                                className="rounded-xl border border-white/10 bg-white/2 p-3 transition-colors duration-300 hover:border-green-400/40 hover:bg-green-400/4 sm:p-4"
                            >
                                <span className="text-2xl text-green-400">
                                    {item.icon}
                                </span>

                                <h3 className="mt-3 text-xs font-semibold text-gray-200 sm:text-sm">
                                    {item.title}
                                </h3>

                                <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
                                    {item.subtitle}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="border-l-2 border-green-400/50 pl-4">
                        <p className="text-sm leading-6 text-gray-400">
                            Have an idea? I'm always happy to connect, learn, and
                            explore new opportunities.
                        </p>
                    </div>
                    {/* Social Links */}
                    <div className="mt-2 flex items-center gap-5">
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
                            Send a <span className="text-green-400">Message</span>
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-400">
                            Fill in the details below to get in touch.
                        </p>
                    </div>

                    <form
                        onSubmit={sendEmail}
                        className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name"
                                className="text-sm font-medium text-gray-300">
                                Your Name
                            </label>

                            <input
                                value={name}
                                onChange={(evt) => {
                                    setName(evt.target.value);
                                }}
                                id="name"
                                name="name"
                                type="text"
                                disabled={loading}
                                required
                                placeholder="Enter your name"
                                className="w-full rounded-xl border border-white/10 bg-[#111313] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-400/60 focus:ring-2 focus:ring-green-400/10 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email"
                                className="text-sm font-medium text-gray-300"
                            >
                                Your Email
                            </label>

                            <input
                                value={email}
                                onChange={(evt) => {
                                    setEmail(evt.target.value);
                                }}
                                id="email"
                                name="email"
                                type="email"
                                disabled={loading}
                                required
                                placeholder="Enter your email"
                                className="w-full rounded-xl border border-white/10 bg-[#111313] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-400/60 focus:ring-2 focus:ring-green-400/10 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message"
                                className="text-sm font-medium text-gray-300"
                            >
                                Your Message
                            </label>

                            <textarea
                                value={message}
                                onChange={(evt) =>
                                    setMessage(evt.target.value)
                                }
                                id="message"
                                name="message"
                                disabled={loading}
                                required
                                rows={5}
                                placeholder="Tell me about your project..."
                                className="w-full resize-y rounded-xl border border-white/10 bg-[#111313] px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-gray-600 focus:border-green-400/60 focus:ring-2 focus:ring-green-400/10 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>

                        {!success && (
                            <button
                                type="submit"
                                disabled={loading}
                                className="group mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-400 px-5 py-3.5 font-semibold text-[#111313] transition duration-300 hover:bg-green-300 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {loading ? ('Sending message...') : (
                                    <> Send Message <Send size={17} className="transition-transform group-hover:translate-x-1" /> </>)}
                            </button>
                        )}
                        {success && (
                            <p className="mt-4 text-center text-green-400" role="status">
                                Message sent successfully! 🎉
                            </p>
                        )}
                        {error && (
                            <p className="text-center text-sm text-red-400" role="alert">
                                Failed to send message. Please try again! ❌
                            </p>
                        )}
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