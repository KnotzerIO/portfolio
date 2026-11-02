import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Hero() {
    return (
        <header className="relative min-h-svh w-full overflow-hidden text-white">
            <div aria-hidden="true">
                {/* Background decorative elements */}
                <div className="absolute top-[12.5%] left-1/4 h-40 w-40 rounded-full border border-white/10 backdrop-blur-sm" />
                <div className="absolute bottom-1/4 right-1/3 h-24 w-24 rounded-full border border-white/10 backdrop-blur-sm" />
                <div className="absolute right-[30%] bottom-1/3 h-96 w-96 rounded-full bg-purple-600/20 blur-[100px] opacity-70" />
                <div className="absolute left-[30%] bottom-[30%] h-96 w-96 rounded-full bg-pink-600/20 blur-[100px] opacity-70" />
                <div className="absolute right-[40%] top-1/3 h-96 w-96 rounded-full bg-cyan-600/20 blur-[100px] opacity-70" />
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                <h1 className="mb-3 text-5xl font-extrabold tracking-tight text-balance text-center sm:text-6xl md:text-7xl lg:text-8xl">
                    Mark{" "}
                    <span className="bg-gradient-to-r from-violet-500 via-fuchsia-400 to-blue-500 bg-clip-text text-transparent">
                        Knotzer
                    </span>
                </h1>
                <p className="mb-4 text-center text-xl font-light tracking-tight text-white/75 sm:text-2xl md:text-3xl">
                    Software Engineer in Austria
                </p>

                <p className="mb-10 max-w-md text-center text-base text-white/60 text-pretty md:text-lg">
                    Full-stack web development, AI integration and cloud
                    infrastructure. Building elegant solutions through clean,
                    efficient code.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                        href="#projects"
                        className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition-colors hover:bg-white/85"
                    >
                        View projects
                        <ArrowDown className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <a
                        href="https://github.com/KnotzerIO"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub profile"
                        className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 backdrop-blur-md transition-colors hover:bg-white/15 hover:text-white"
                    >
                        <GithubIcon className="h-5 w-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/knotzer"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn profile"
                        className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 backdrop-blur-md transition-colors hover:bg-white/15 hover:text-white"
                    >
                        <LinkedinIcon className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </header>
    );
}
