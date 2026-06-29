import React, { useState } from "react";
import { VscPlay, VscTerminal } from "react-icons/vsc";

function SelfCode() {
    const [activeTab, setActiveTab] = useState("coder.js");
    const [showConsole, setShowConsole] = useState(false);
    const [consoleOutput, setConsoleOutput] = useState("");
    const [runCommand, setRunCommand] = useState("");

    const handleRunCode = () => {
        setShowConsole(true);
        if (activeTab === "coder.js") {
            setRunCommand("node coder.js");
            setConsoleOutput("Evaluating coder.hireable()...\nResult: true (Apurva is ready to build awesome things!)");
        } else if (activeTab === "skills.json") {
            setRunCommand("cat skills.json");
            setConsoleOutput("Loading skills profile...\nStack parsed successfully: 7+ core technologies loaded.");
        } else if (activeTab === "hobbies.py") {
            setRunCommand("python hobbies.py");
            setConsoleOutput("Running get_passions()...\nOutput: ['building web apps', 'ui/ux engineering', 'open source']");
        }
    };

    return (
        <div className="order-1 lg:order-2 from-[var(--md-sys-color-surface-container-high)] border-[var(--md-sys-color-outline-variant)] relative rounded-lg border bg-gradient-to-r to-[var(--md-sys-color-surface-container-highest)] overflow-hidden flex flex-col justify-between">
            {/* Gradient lines */}
            <div className="flex flex-row">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--md-sys-color-primary)] to-[var(--md-sys-color-tertiary)]"></div>
                <div className="h-[1px] w-full bg-gradient-to-r from-[var(--md-sys-color-tertiary)] to-transparent"></div>
            </div>

            {/* Window control dots + Tabs + Run Button */}
            <div className="px-4 lg:px-6 py-4 flex items-center justify-between bg-[var(--md-sys-color-surface-container-low)]/50 border-b border-[var(--md-sys-color-outline-variant)]">
                {/* Dots */}
                <div className="flex flex-row space-x-2 mr-4">
                    <div className="h-3 w-3 rounded-full bg-[var(--md-sys-color-error)]"></div>
                    <div className="h-3 w-3 rounded-full bg-[var(--md-sys-color-tertiary)]"></div>
                    <div className="h-3 w-3 rounded-full bg-[var(--md-sys-color-primary)]"></div>
                </div>

                {/* Tabs */}
                <div className="flex flex-row items-center space-x-2 font-mono text-xs text-[var(--md-sys-color-on-surface-variant)] overflow-x-auto flex-1 select-none">
                    {["coder.js", "skills.json", "hobbies.py"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => {
                                setActiveTab(tab);
                                setShowConsole(false);
                            }}
                            className={`px-3 py-1.5 rounded-md cursor-pointer transition-colors duration-250 border-none outline-none ${
                                activeTab === tab
                                    ? "bg-[var(--md-sys-color-surface-container)] text-[var(--md-sys-color-primary)] font-semibold border border-[var(--md-sys-color-outline-variant)]"
                                    : "bg-transparent hover:bg-[var(--md-sys-color-surface-container-low)]"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Play Button */}
                <button
                    onClick={handleRunCode}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] hover:opacity-90 font-mono text-xs font-semibold cursor-pointer border-none outline-none transition-all ml-4"
                    title="Run Code"
                >
                    <VscPlay size={14} />
                    <span>Run</span>
                </button>
            </div>

            {/* Content section */}
            <div className="overflow-auto px-4 lg:px-8 py-5 min-h-[220px]">
                <code className="font-mono text-xs md:text-sm lg:text-base">
                    {activeTab === "coder.js" && (
                        <>
                            <div className="blink">
                                <span className="mr-2 text-primary">const</span>
                                <span className="mr-2 text-on-bg">coder</span>
                                <span className="mr-2 text-primary">=</span>
                                <span className="text-on-surface-variant">{"{"}</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-on-bg">
                                    name:
                                </span>
                                <span className="text-on-surface-variant">{`'`}</span>
                                <span className="text-secondary">Apurva Kumar</span>
                                <span className="text-on-surface-variant">{`',`}</span>
                            </div>
                            <div className="ml-4 lg:ml-8 mr-2">
                                <span className="text-on-bg">skills:</span>
                                <span className="text-on-surface-variant">{`['`}</span>
                                <span className="text-secondary">React</span>
                                <span className="text-on-surface-variant">
                                    {"', '"}
                                </span>
                                <span className="text-secondary">JavaScript</span>
                                <span className="text-on-surface-variant">
                                    {"', '"}
                                </span>
                                <span className="text-secondary">Python</span>
                                <span className="text-on-surface-variant">
                                    {"', '"}
                                </span>
                                <span className="text-secondary">C</span>
                                <span className="text-on-surface-variant">
                                    {"', '"}
                                </span>
                                <span className="text-secondary">Java</span>
                                <span className="text-on-surface-variant">
                                    {"', '"}
                                </span>
                                <span className="text-secondary">MySql</span>
                                <span className="text-on-surface-variant">
                                    {"', '"}
                                </span>
                                <span className="text-secondary">Illustrator</span>
                                <span className="text-on-surface-variant">
                                    {"', '"}
                                </span>
                                <span className="text-secondary">Photoshop</span>
                                <span className="text-on-surface-variant">{"'],"}</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-on-bg">
                                    hardWorker:
                                </span>
                                <span className="text-tertiary">true</span>
                                <span className="text-on-surface-variant">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-on-bg">
                                    quickLearner:
                                </span>
                                <span className="text-tertiary">true</span>
                                <span className="text-on-surface-variant">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-on-bg">
                                    problemSolver:
                                </span>
                                <span className="text-tertiary">true</span>
                                <span className="text-on-surface-variant">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-inverse-primary">
                                    hireable:
                                </span>
                                <span className="text-tertiary">function</span>
                                <span className="text-on-surface-variant">
                                    {"() {"}
                                </span>
                            </div>
                            <div>
                                <span className="ml-8 lg:ml-16 mr-2 text-tertiary">
                                    return
                                </span>
                                <span className="text-on-surface-variant">{`(`}</span>
                            </div>
                            <div>
                                <span className="ml-12 lg:ml-24 text-outline">
                                    this.
                                </span>
                                <span className="mr-2 text-on-bg">hardWorker</span>
                                <span className="text-secondary">&amp;&amp;</span>
                            </div>
                            <div>
                                <span className="ml-12 lg:ml-24 text-outline">
                                    this.
                                </span>
                                <span className="mr-2 text-on-bg">problemSolver</span>
                                <span className="text-secondary">&amp;&amp;</span>
                            </div>
                            <div>
                                <span className="ml-12 lg:ml-24 text-outline">
                                    this.
                                </span>
                                <span className="mr-2 text-on-bg">skills.length</span>
                                <span className="mr-2 text-secondary">&gt;=</span>
                                <span className="text-tertiary">5</span>
                            </div>
                            <div>
                                <span className="ml-8 lg:ml-16 mr-2 text-on-surface-variant">{`);`}</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 text-on-surface-variant">{`};`}</span>
                            </div>
                            <div>
                                <span className="text-on-surface-variant">{`};`}</span>
                            </div>
                        </>
                    )}

                    {activeTab === "skills.json" && (
                        <>
                            <div>
                                <span className="text-on-surface-variant">{"{"}</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-primary">"frontend":</span>
                                <span className="text-on-surface-variant">{"["}</span>
                                <span className="text-secondary">"React"</span>
                                <span className="text-on-surface-variant">, </span>
                                <span className="text-secondary">"JavaScript"</span>
                                <span className="text-on-surface-variant">{"],"}</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-primary">"backend":</span>
                                <span className="text-on-surface-variant">{"["}</span>
                                <span className="text-secondary">"Python"</span>
                                <span className="text-on-surface-variant">, </span>
                                <span className="text-secondary">"Java"</span>
                                <span className="text-on-surface-variant">, </span>
                                <span className="text-secondary">"C"</span>
                                <span className="text-on-surface-variant">, </span>
                                <span className="text-secondary">"MySQL"</span>
                                <span className="text-on-surface-variant">{"],"}</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-primary">"design":</span>
                                <span className="text-on-surface-variant">{"["}</span>
                                <span className="text-secondary">"Illustrator"</span>
                                <span className="text-on-surface-variant">, </span>
                                <span className="text-secondary">"Photoshop"</span>
                                <span className="text-on-surface-variant">{"]"}</span>
                            </div>
                            <div>
                                <span className="text-on-surface-variant">{"}"}</span>
                            </div>
                        </>
                    )}

                    {activeTab === "hobbies.py" && (
                        <>
                            <div>
                                <span className="text-primary">def</span>
                                <span className="ml-2 text-on-bg">get_passions</span>
                                <span className="text-on-surface-variant">():</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 text-primary">return</span>
                                <span className="ml-2 text-on-surface-variant">{"["}</span>
                            </div>
                            <div>
                                <span className="ml-8 lg:ml-16 text-secondary">"building web apps"</span>
                                <span className="text-on-surface-variant">,</span>
                            </div>
                            <div>
                                <span className="ml-8 lg:ml-16 text-secondary">"ui/ux engineering"</span>
                                <span className="text-on-surface-variant">,</span>
                            </div>
                            <div>
                                <span className="ml-8 lg:ml-16 text-secondary">"open source contributions"</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 text-on-surface-variant">{"]"}</span>
                            </div>
                        </>
                    )}
                </code>
            </div>

            {/* Terminal output console */}
            {showConsole && (
                <div className="border-t border-[var(--md-sys-color-outline-variant)] bg-[var(--md-sys-color-surface-container-lowest)] p-4 font-mono text-xs text-[var(--md-sys-color-on-surface)] transition-all">
                    <div className="flex justify-between items-center mb-2 select-none">
                        <span className="text-[var(--md-sys-color-secondary)] font-semibold flex items-center gap-1.5">
                            <VscTerminal size={14} />
                            <span>Terminal Output</span>
                        </span>
                        <button
                            onClick={() => setShowConsole(false)}
                            className="text-xs text-[var(--md-sys-color-outline)] hover:text-[var(--md-sys-color-on-background)] cursor-pointer border-none bg-transparent outline-none"
                        >
                            Clear
                        </button>
                    </div>
                    <div className="text-[var(--md-sys-color-outline)] select-none">$ {runCommand}</div>
                    <pre className="text-[var(--md-sys-color-primary)] mt-1 whitespace-pre-wrap leading-relaxed font-sans">{consoleOutput}</pre>
                </div>
            )}
        </div>
    );
}

export default SelfCode;
