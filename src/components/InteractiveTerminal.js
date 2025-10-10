
import { useEffect, useRef, useState, } from "react";
import { Maximize2, Minimize2 } from "lucide-react";

export default function Terminal() {
    const user = "visitor@portfolio";
    const [input, setInput] = useState("");
    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [output, setOutput] = useState([
        {
            type: "output",
            content: "Type 'help' to see available commands.",
        },
    ]);
    const [suggestion, setSuggestion] = useState("");
    const [autocompleteOptions, setAutocompleteOptions] = useState([]);
    const inputRef = useRef(null);
    const outputRef = useRef(null);
    const [inputActive, setInputActive] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const mountTime = useRef(new Date());

    const commands = [
        {
            name: "help",
            description: "Show available commands",
            execute: () => {
                return (
                    <div className="grid gap-1">
                        <p>Available commands:</p>
                        {commands.map((cmd) => (
                            <div key={cmd.name} className="grid grid-cols-[100px_1fr] gap-2">
                                <span className="font-bold text-green-400">{cmd.name}</span>
                                <span>{cmd.description}</span>
                            </div>
                        ))}
                    </div>
                );
            },
        },
        {
            name: "about",
            description: "Display information about me",
            execute: () => {
                return (
                    <div className="grid gap-2">
                        <p className="text-yellow-300 font-bold text-lg">About Me</p>
                        <p>I&#39;m a passionate developer with expertise in:</p>
                        <ul className="list-disc pl-5">
                            <li>Frontend Development (React, Next.js, Angular)</li>
                            <li>Backend Development (Express, Flask, Spring)</li>
                            <li>DevOps & Cloud Infrastructure</li>
                        </ul>
                        <p>Type &#39;skills&#39; to see my work or &#39;contact&#39; for my details.</p>
                    </div>
                );
            },
        },
        {
            name: "skills",
            description: "List my technical skills",
            execute: () => {
                return (
                    <div className="grid gap-2">
                        <p className="text-yellow-300 font-bold text-lg">
                            Technical Skills
                        </p>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                            <div>
                                <p className="text-blue-400 font-bold">Frontend</p>
                                <ul className="list-disc pl-5">
                                    <li>React & Next.js</li>
                                    <li>Angular</li>
                                    <li>TypeScript</li>
                                    <li>Tailwind CSS</li>
                                    <li>Responsive Design</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-blue-400 font-bold">Backend</p>
                                <ul className="list-disc pl-5">
                                    <li>Node.js & Express</li>
                                    <li>Python & Django</li>
                                    <li>Java & Spring Boot</li>
                                    <li>GraphQL</li>
                                    <li>Microservices</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-blue-400 font-bold">DevOps</p>
                                <ul className="list-disc pl-5">
                                    <li>Docker</li>
                                    <li>CI/CD Pipelines</li>
                                    <li>Microsoft Azure</li>
                                    <li>Linux Administration</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-blue-400 font-bold">Other</p>
                                <ul className="list-disc pl-5">
                                    <li>Agile Methodologies</li>
                                    <li>Performance Optimization</li>
                                    <li>Observability tools</li>
                                    <li>GIS software</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            },
        },
        {
            name: "contact",
            description: "Display my contact information",
            execute: () => {
                return (
                    <div className="grid gap-2">
                        <p className="text-yellow-300 font-bold text-lg">
                            Contact Information
                        </p>
                        <div className="grid gap-1">
                            <p>
                                <span className="text-blue-400 font-bold">Email:</span>{" "}
                                <a href="mailto:mark@knotzer.io"> mark@knotzer.io</a>
                            </p>
                            <p>
                                <span className="text-blue-400 font-bold">LinkedIn:</span>{" "}
                                <a
                                    href="https://www.linkedin.com/in/knotzer"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.linkedin.com/in/knotzer
                                </a>
                            </p>
                            <p>
                                <span className="text-blue-400 font-bold">GitHub:</span>{" "}
                                <a
                                    href="https://www.github.com/KnotzerIO"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.github.com/KnotzerIO
                                </a>
                            </p>
                            <p>
                                <span className="text-blue-400 font-bold">Website:</span>{" "}
                                <a
                                    href="https://www.knotzer.io"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.knotzer.io
                                </a>
                            </p>
                        </div>
                        <p className="mt-2">
                            Feel free to reach out for collaboration or opportunities!
                        </p>
                    </div>
                );
            },
        },
        {
            name: "clear",
            description: "Clear the terminal",
            execute: () => {
                setTimeout(() => {
                    setOutput([]);
                }, 100);
                return "Clearing terminal...";
            },
        },
        {
            name: "date",
            description: "Display the current date and time",
            execute: () => {
                return `Current date and time: ${new Date().toLocaleString()}`;
            },
        },
        {
            name: "echo",
            description: "Echo a message",
            execute: (args) => {
                return args.join(" ");
            },
        },
        {
            name: "whoami",
            description: "Display user information",
            execute: () => {
                return "visitor";
            },
        },
        {
            name: "neofetch",
            description: "Display system information",
            execute: () => {
                const now = new Date();
                const uptimeMs = now.getTime() - mountTime.current.getTime();
                const uptime = {
                    seconds: Math.floor((uptimeMs / 1000) % 60),
                    minutes: Math.floor((uptimeMs / (1000 * 60)) % 60),
                    hours: Math.floor((uptimeMs / (1000 * 60 * 60)) % 24),
                };

                const uptimeStr = `${uptime.hours
                    .toString()
                    .padStart(2, "0")}:${uptime.minutes
                        .toString()
                        .padStart(2, "0")}:${uptime.seconds.toString().padStart(2, "0")}`;

                return (
                    <div className="flex flex-wrap gap-4">
                        <pre className="text-blue-400 text-xs sm:text-sm">
                            {`
  ██████╗ ███████╗██╗   ██╗ ██████╗ ███████╗
  ██╔══██╗██╔════╝██║   ██║██╔═══██╗██╔════╝
  ██║  ██║█████╗  ██║   ██║██║   ██║███████╗
  ██║  ██║██╔══╝  ╚██╗ ██╔╝██║   ██║╚════██║
  ██████╔╝███████╗ ╚████╔╝ ╚██████╔╝███████║
  ╚═════╝ ╚══════╝  ╚═══╝   ╚═════╝ ╚══════╝
    `}
                        </pre>
                        <div className="text-white flex flex-col">
                            <div className="flex flex-col">
                                <span className="text-blue-400 font-bold mr-2">{user}</span>
                                <span>-----------------</span>
                            </div>
                            <div className="flex">
                                <span className="text-blue-400 font-bold mr-2">OS:</span>
                                <span>DevOs 6.9</span>
                            </div>
                            <div className="flex">
                                <span className="text-blue-400 font-bold mr-2">Kernel:</span>
                                <span>React 19</span>
                            </div>
                            <div className="flex">
                                <span className="text-blue-400 font-bold mr-2">Uptime:</span>
                                <span>{uptimeStr}</span>
                            </div>
                            <div className="flex">
                                <span className="text-blue-400 font-bold mr-2">Shell:</span>
                                <span>Portfolio Bash 3.0</span>
                            </div>
                            <div className="mt-2 flex">
                                <span className="block mr-1 w-4 h-4 bg-blue-500"></span>
                                <span className="block mr-1 w-4 h-4 bg-green-500"></span>
                                <span className="block mr-1 w-4 h-4 bg-yellow-500"></span>
                                <span className="block mr-1 w-4 h-4 bg-red-500"></span>
                                <span className="block mr-1 w-4 h-4 bg-purple-500"></span>
                                <span className="block mr-1 w-4 h-4 bg-indigo-500"></span>
                                <span className="block mr-1 w-4 h-4 bg-pink-500"></span>
                                <span className="block mr-1 w-4 h-4 bg-gray-500"></span>
                            </div>
                        </div>
                    </div>
                );
            },
        },
    ];

    useEffect(() => {
        if (outputRef.current) {
            outputRef.current.scrollTop = outputRef.current.scrollHeight;
        }
    }, [output]);

    const handleTerminalClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInput(value);

        if (value.trim() !== "") {
            const currentWord = value.trim();
            const matchingCommands = commands
                .filter(
                    (cmd) => cmd.name.startsWith(currentWord) && cmd.name !== currentWord
                )
                .map((cmd) => cmd.name);

            setAutocompleteOptions(matchingCommands);

            if (matchingCommands.length > 0) {
                setSuggestion(matchingCommands[0]);
            } else {
                setSuggestion("");
            }
        } else {
            setSuggestion("");
            setAutocompleteOptions([]);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (historyIndex < history.length - 1) {
                const newIndex = historyIndex + 1;
                setHistoryIndex(newIndex);
                setInput(history[history.length - 1 - newIndex]);
                setSuggestion("");
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setInput(history[history.length - 1 - newIndex]);
                setSuggestion("");
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setInput("");
                setSuggestion("");
            }
        } else if (e.key === "Tab") {
            e.preventDefault();
            if (suggestion) {
                setInput(suggestion);
                setSuggestion("");
            }
        } else if (e.key === "Escape") {
            setSuggestion("");
        }
    };

    const executeCommand = (cmd) => {
        const trimmedCmd = cmd.trim();
        const args = trimmedCmd.split(" ");
        const commandName = args[0].toLowerCase();
        const command = commands.find((c) => c.name === commandName);

        setOutput((prev) => [
            ...prev,
            {
                type: "input",
                content: `${user} ~ % ${trimmedCmd}`,
            },
        ]);

        if (trimmedCmd) {
            setHistory((prev) => [...prev, trimmedCmd]);
            setHistoryIndex(-1);
        }

        if (command) {
            const result = command.execute(args.slice(1));
            setOutput((prev) => [...prev, { type: "output", content: result }]);
        } else if (trimmedCmd) {
            setOutput((prev) => [
                ...prev,
                {
                    type: "output",
                    content: `Command not found: ${commandName}. Type 'help' to see available commands.`,
                },
            ]);
        }

        // Clear input
        setInput("");
        setSuggestion("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        executeCommand(input);
        setAutocompleteOptions([]);
        setHistoryIndex(-1);
    };

    const textMeasureRef = useRef(null);

    useEffect(() => {
        if (textMeasureRef.current && cursorRef.current) {
            cursorRef.current.style.left = `${textMeasureRef.current.offsetWidth}px`;
        }
    }, [input]);

    const cursorRef = useRef(null);

    return (
        <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg bg-black text-gray-200 font-mono border border-white/10">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-white/10">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 text-sm text-gray-400">Terminal</span>
                </div>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="p-1 rounded hover:bg-gray-700 transition-colors text-gray-400 hover:text-white"
                    aria-label={isExpanded ? "Minimize terminal" : "Expand terminal"}
                    title={isExpanded ? "Minimize terminal" : "Expand terminal"}
                >
                    {isExpanded ? (
                        <Minimize2 className="w-4 h-4" aria-hidden="true" />
                    ) : (
                        <Maximize2 className="w-4 h-4" aria-hidden="true" />
                    )}
                </button>
            </div>

            <div
                ref={outputRef}
                className={`p-4 overflow-y-auto transition-all duration-300 ${isExpanded ? "h-96" : "h-50"
                    }`}
                onClick={handleTerminalClick}
            >
                {output.map((item, index) => {
                    return (
                        <div key={index} className="mb-2">
                            {typeof item.content === "string" && item.type === "input" ? (
                                <>
                                    <span className="text-green-400">{user} ~ %</span>
                                    <span className="text-white">
                                        {item.content.replace(`${user} ~ %`, "")}
                                    </span>
                                </>
                            ) : (
                                <span className="text-white">{item.content}</span>
                            )}
                        </div>
                    );
                })}
                <form onSubmit={handleSubmit} className="flex items-center group">
                    <label htmlFor="terminal-input" className="text-green-400 mr-2">
                        {user} ~ %
                    </label>
                    <div className="relative flex-1">
                        <div className="flex items-center">
                            <span ref={textMeasureRef} className="text-white whitespace-pre">
                                {input}
                            </span>
                            {suggestion && (
                                <span className="text-gray-500">
                                    {suggestion.slice(input.length)}
                                </span>
                            )}
                            <span
                                ref={cursorRef}
                                className={`absolute h-[1.2em] w-[0.6em] bg-white/70 
    ${inputActive ? "terminal-cursor-blink" : "opacity-0"}
    transition-opacity duration-100`}
                            ></span>
                        </div>

                        <input
                            id="terminal-input"
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            onFocus={() => setInputActive(true)}
                            onBlur={() => setInputActive(false)}
                            className="absolute inset-0 w-full h-full bg-transparent outline-none text-transparent caret-transparent"
                            spellCheck="false"
                            autoComplete="off"
                            aria-label="Terminal command input"
                            aria-describedby="terminal-help"
                        />
                        <span id="terminal-help" className="sr-only">
                            Type terminal commands here. Press Tab for autocomplete, arrow keys for history, or type help for available commands.
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}
