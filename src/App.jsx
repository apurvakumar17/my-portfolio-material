import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Experience from "./components/Experience";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App ">
            <Navbar />
            <div
                className="mainpage min-h-screen relative mx-auto px-6 sm:px-12 lg:px-0 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[85rem]"
            >
                <Hero />
                <AboutSection />
                <Experience />
            </div>
            
        </div>
    );
}

export default App;
