import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Experience from "./components/Experience";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App ">
            <Navbar />
            <div
                className="mainpage min-h-screen relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[85rem]"
            >
                <Hero />
                <AboutSection />
                <Experience />
                <SkillsSection />
                <ProjectsSection />
            </div>
            
        </div>
    );
}

export default App;
