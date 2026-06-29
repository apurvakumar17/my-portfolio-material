import React, { useState, useEffect } from "react";
import "@material/web/tabs/secondary-tab.js";
import "@material/web/tabs/tabs.js";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";

function Navbar() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "dark";
    });
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "dark" ? "light" : "dark"));
    };

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <nav className="nav">
            <div className="navbarHeader">
                <span className="navbarLogo">apurvakumar17</span>
                <div className="flex items-center gap-2">
                    <md-tabs className="navbarTabs block">
                        <a href="/#about"><md-secondary-tab>About</md-secondary-tab></a>
                        <a href="/#experience"><md-secondary-tab>Experience</md-secondary-tab></a>
                        <a href="/#skills"><md-secondary-tab>Skills</md-secondary-tab></a>
                        <a href="/#projects"><md-secondary-tab>Projects</md-secondary-tab></a>
                        <a href="/#contact"><md-secondary-tab>Contact Me</md-secondary-tab></a>
                    </md-tabs>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-background)] transition-all duration-300 cursor-pointer flex items-center justify-center border-0 bg-transparent outline-none"
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? <IoMdSunny size={22} /> : <IoMdMoon size={22} />}
                    </button>
                    <button
                        onClick={toggleMenu}
                        className="p-2 mr-4 rounded-full hover:bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-background)] transition-all duration-300 cursor-pointer flex items-center justify-center border-0 bg-transparent outline-none md:hidden"
                        aria-label="Toggle navigation menu"
                    >
                        {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden flex flex-col bg-[var(--md-sys-color-surface-container)] border-b border-[var(--md-sys-color-outline-variant)] py-4 px-6 gap-4 font-medium">
                    {[
                        { label: "About", href: "/#about" },
                        { label: "Experience", href: "/#experience" },
                        { label: "Skills", href: "/#skills" },
                        { label: "Projects", href: "/#projects" },
                        { label: "Contact Me", href: "/#contact" }
                    ].map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-[var(--md-sys-color-on-surface)] hover:text-[var(--md-sys-color-primary)] transition-colors duration-200 py-1"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
            <hr></hr>
        </nav>
    );
}

export default Navbar;