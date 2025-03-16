import type React from "react";
import { useEffect, useRef, useState, type JSX } from "react";

type CommandType = {
  name: string;
  description: string;
  execute: (args: string[]) => string | JSX.Element;
};

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [output, setOutput] = useState<
    Array<{ type: "input" | "output"; content: string | JSX.Element }>
  >([
    {
      type: "output",
      content: "Type 'help' to see available commands.",
    },
  ]);
  const [suggestion, setSuggestion] = useState("");
  const [autocompleteOptions, setAutocompleteOptions] = useState<string[]>([]);
  const [selectedAutocompleteIndex, setSelectedAutocompleteIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const [blinkCursor, setBlinkCursor] = useState(true);
  const [inputActive, setInputActive] = useState(false);

  const commands: CommandType[] = [
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
            <p>I'm a passionate developer with expertise in:</p>
            <ul className="list-disc pl-5">
              <li>Frontend Development (React, Next.js, Angular)</li>
              <li>Backend Development (Express, Flask, Spring)</li>
              <li>DevOps & Cloud Infrastructure</li>
            </ul>
            <p>Type 'skills' to see my work or 'contact' for my details.</p>
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
                  <li>Database Design</li>
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
                  <li>Git & GitHub</li>
                  <li>Agile Methodologies</li>
                  <li>Performance Optimization</li>
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
  ];

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlinkCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

      setSelectedAutocompleteIndex(0);
    } else {
      setSuggestion("");
      setAutocompleteOptions([]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (autocompleteOptions.length > 0) {
        setSelectedAutocompleteIndex((prev) => {
          const newIndex = prev > 0 ? prev - 1 : autocompleteOptions.length - 1;
          setSuggestion(autocompleteOptions[newIndex]);
          return newIndex;
        });
      } else if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
        setSuggestion("");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (autocompleteOptions.length > 0) {
        setSelectedAutocompleteIndex((prev) => {
          const newIndex = prev < autocompleteOptions.length - 1 ? prev + 1 : 0;
          setSuggestion(autocompleteOptions[newIndex]);
          return newIndex;
        });
      } else if (historyIndex > 0) {
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

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    const args = trimmedCmd.split(" ");
    const commandName = args[0].toLowerCase();
    const command = commands.find((c) => c.name === commandName);

    setOutput((prev) => [
      ...prev,
      {
        type: "input",
        content: `visitor@portfolio ~ % ${trimmedCmd}`,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
    setAutocompleteOptions([]);
    setHistoryIndex(-1);
  };

  const textMeasureRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (textMeasureRef.current && cursorRef.current) {
      cursorRef.current.style.left = `${textMeasureRef.current.offsetWidth}px`;
    }
  }, [input]);

  const cursorRef = useRef<HTMLSpanElement>(null);

  return (
    <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden  shadow-lg bg-black text-gray-200 font-mono">
      <div
        ref={outputRef}
        className="p-4 h-50 overflow-y-auto"
        onClick={handleTerminalClick}
      >
        {output.map((item, index) => (
          <div
            key={index}
            className={`mb-2 ${item.type === "input" ? "text-green-400" : ""}`}
          >
            {item.content}
          </div>
        ))}
        <form onSubmit={handleSubmit} className="flex items-center group">
          <span className="text-green-400 mr-2">visitor@portfolio ~ %</span>
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
                className={`absolute h-[1.2em] w-[0.6em] bg-white/70 ${
                  blinkCursor && inputActive ? "opacity-100" : "opacity-0"
                } transition-opacity duration-100`}
              ></span>
            </div>

            <input
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
            />
          </div>
        </form>
      </div>
    </div>
  );
}
