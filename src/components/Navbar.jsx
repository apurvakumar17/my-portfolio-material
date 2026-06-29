import React, { useState, useEffect } from "react";
import "@material/web/tabs/secondary-tab.js";
import "@material/web/tabs/tabs.js";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

function Navbar() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "dark";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <nav className="nav">
            <div className="navbarHeader">
                <span className="navbarLogo">apurvakumar17</span>
                <div className="flex items-center gap-4">
                    <md-tabs className="navbarTabs block">
                        <a href="/#about"><md-secondary-tab>About</md-secondary-tab></a>
                        <a href="/#experience"><md-secondary-tab>Experience</md-secondary-tab></a>
                        <a href="/#skills"><md-secondary-tab>Skills</md-secondary-tab></a>
                        <a href="/#projects"><md-secondary-tab>Projects</md-secondary-tab></a>
                        <a href="/#contact"><md-secondary-tab>Contact Me</md-secondary-tab></a>
                    </md-tabs>
                    <button
                        onClick={toggleTheme}
                        className="p-2 mr-4 md:mr-8 rounded-full hover:bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-background)] transition-all duration-300 cursor-pointer flex items-center justify-center border-0 bg-transparent outline-none"
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? <IoMdSunny size={22} /> : <IoMdMoon size={22} />}
                    </button>
                </div>
            </div>
            <hr></hr>
        </nav>
    );
}

export default Navbar;