import { Code2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');
    const closeMenu = () => setIsMenuOpen(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "projects", "contact"];

            for (const id of sections.toReversed()) {
                const section = document.getElementById(id);

                if (section && section.getBoundingClientRect().top <= 150) {
                    setActiveLink(`#${id}`);
                    break;
                };
            };
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = (href) => {
        setActiveLink(href);
        closeMenu();
    };

    const getLinkClass = (href) =>
        `transition-colors duration-200 ${activeLink === href ? "text-green-400" : "text-gray-300hover:text-green-400"}`;

    return (
        <nav className="fixed top-0 left-0 z-50 w-full flex items-center justify-between border-b border-white/10 bg-[#111313]/95 px-6 py-5 backdrop-blur-lg">

            {/* Logo */}
            <a
                href="#home"
                onClick={() => handleLinkClick("#home")}
                className="flex items-center gap-2"
            >
                <Code2 className="text-green-400" size={28} />
                <span>My</span>
                <span className="text-green-400">Portfolio</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-7 md:flex">
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={() => handleLinkClick(link.href)}
                        className={getLinkClass(link.href)}
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            {/* Let's Talk Button */}
            <a
                href="#contact"
                onClick={() => handleLinkClick("#contact")}
                className="hidden md:block bg-green-400 px-4 py-2 rounded font-semibold text-black transition hover:bg-green-300"
            >
                Let's Talk
            </a>

            <button
                className="md:hidden text-green-400"
                type="button"
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="absolute left-0 top-full z-50 flex w-full flex-col items-center gap-5 border-b border-white/10 bg-[#111313] p-6 md:hidden">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => handleLinkClick(link.href)}
                            className={getLinkClass(link.href)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar