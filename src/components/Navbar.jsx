import { Code2, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="relative flex items-center justify-between border-b border-white/10 px-6 py-5">
            <a href="#home" className="flex items-center gap-2">
                <Code2 className="text-green-400" size={28} />
                <span>My</span><span className="text-green-400">Portfolio</span>
            </a>
            <div className="hidden items-center gap-7 md:flex">
                <a href="#home" className="text-green-400">Home</a>
                <a href="#about" className="text-gray-300 hover:text-green-400">About</a>
                <a href="#projects" className="text-gray-300 hover:text-green-400">Projects</a>
                <a href="#contact" className="text-gray-300 hover:text-green-400">Contact</a>
            </div>
            <a href="#contact" className="hidden md:block bg-green-400 px-4 py-2 rounded font-semibold text-black transition hover:bg-green-300">Let's Talk</a>

            <button className="md:hidden text-green-400"
                type="button"
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                onClick={() => { setIsMenuOpen(!isMenuOpen) }}>
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            {isMenuOpen && (
                <div className="absolute md:hidden left-0 items-center top-full z-50 flex w-full flex-col gap-5 border-b border-white/10 bg-[#111313] p-6">
                    <a href="#home" onClick={closeMenu} className="hover:text-green-400">Home</a>
                    <a href="#about" onClick={closeMenu} className="hover:text-green-400">About</a>
                    <a href="#projects" onClick={closeMenu} className="hover:text-green-400">Projects</a>
                    <a href="#contact" onClick={closeMenu} className="hover:text-green-400">Contact</a>
                </div>
            )}
        </nav>
    )
}

export default Navbar