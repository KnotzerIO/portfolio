"use client";
import {
    AnimatePresence,
    motion,
    useAnimation,
    useInView,
} from "framer-motion";
import {
    Cloud,
    Code,
    Navigation,
    Quote,
    Sparkles,
    Terminal,
    UsersRound,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Globe from "./Globe";
import InteractiveTerminal from "./InteractiveTerminal";
import Card from "./Card";

export default function AboutMe() {
    const controls = useAnimation();
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, {
        once: false,
        amount: 0.2,
        initial: false,
    });
    const [activeQuote, setActiveQuote] = useState(0);

    const quotes = [
        {
            text: "In the midst of chaos, there is also opportunity.",
            author: "Sun Tsu",
        },
        {
            text: "Any fool can make something complicated. It takes a genius to make it simple",
            author: "Woody Guthrie",
        },
        {
            text: "You don't have to be great to start, but you do have to start to be great.",
            author: "Zig Ziglar",
        },
    ];

    useEffect(() => {
        if (isInView) {
            const interval = setInterval(() => {
                setActiveQuote((prev) => (prev + 1) % quotes.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isInView, quotes.length]);

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const tags = [
        {
            name: "Cloud Computing",
            icon: Cloud,
            bgColor: "bg-blue-500/10",
            textColor: "text-blue-400",
        },
        {
            name: "Artificial Intelligence",
            icon: Sparkles,
            bgColor: "bg-fuchsia-500/10",
            textColor: "text-fuchsia-400",
        },
        {
            name: "Automation",
            icon: Code,
            bgColor: "bg-green-500/10",
            textColor: "text-green-400",
        },
    ];

    return (
        <div className="relative w-full py-12 text-white">
            <div className="container relative z-10 mx-auto px-2">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <div className="mb-3 flex items-center justify-center space-x-2">
                        <div className="h-px w-8 bg-white/20"></div>
                        <span className="text-xs font-medium uppercase tracking-widest text-white/50">
                            Get to know me
                        </span>
                        <div className="h-px w-8 bg-white/20"></div>
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                        About Me
                    </h2>
                </motion.div>

                <div
                    ref={containerRef}
                    className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4"
                >
                    <Card colSpan={2} glowColor="indigo" delay={0.1} controls={controls}>
                        <h3 className="mb-4 text-xl font-bold ">Currently Interested In</h3>

                        <div className="flex flex-wrap gap-3">
                            {tags.map((tag, index) => {
                                const Icon = tag.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group flex items-center rounded-full border border-white/10 bg-gradient-to-r from-white/10 to-white/5 px-2 py-1.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-md transition-all duration-200 hover:border-white/20 hover:from-white/15 hover:to-white/10 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_2px_4px_rgba(0,0,0,0.1)]"
                                    >
                                        <div
                                            className={`mr-2 flex h-5 w-5 items-center justify-center rounded-full ${tag.bgColor}`}
                                        >
                                            <Icon className={`h-3.5 w-3.5 ${tag.textColor}`} />
                                        </div>
                                        <span className="text-sm font-medium text-white/90">
                                            {tag.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-6 h-px w-full bg-white/10" />
                        <div className="mt-4 flex items-start">
                            <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full border-white/10 bg-gradient-to-r from-white/10 to-white/5 px-2 py-1.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-md transition-all duration-200 hover:border-white/20 hover:from-white/15 hover:to-white/10 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_2px_4px_rgba(0,0,0,0.1)]">
                                <UsersRound className="h-5 w-5 text-indigo-400" />
                            </div>
                            <div>
                                <h4 className="font-medium">Always open for new projects</h4>
                                <p className="mt-1 text-sm text-white/70">
                                    Let&apos;s collaborate on something amazing
                                </p>
                            </div>
                        </div>
                    </Card>
                    <Card rowSpan={1} glowColor="purple" delay={0.2} controls={controls}>
                        <div className="flex items-center space-x-2">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 backdrop-blur-md">
                                <Navigation className="h-6 w-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold">Special Field</h3>
                        </div>
                        <h4 className="mt-4 text-lg font-medium">Indoor Navigation</h4>
                        <p className="mt-2 text-sm text-white/70">
                            Experienced in developing indoor navigation, mapping, and
                            positioning solutions for complex environments
                        </p>
                    </Card>
                    <Card
                        colSpan={1}
                        rowSpan={1}
                        glowColor="pink"
                        delay={0.3}
                        controls={controls}
                    >
                        <div className="flex items-center space-x-2">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 backdrop-blur-md">
                                <Quote className="h-6 w-6 text-pink-400" />
                            </div>
                            <h3 className="text-xl font-bold">Favorite Quotes</h3>
                        </div>

                        <div className="relative mt-4 min-h-[100px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeQuote}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0"
                                >
                                    <p className="text-sm italic text-white/80">
                                        &quot;{quotes[activeQuote].text}&quot;
                                    </p>
                                    <p className="mt-2 text-xs font-medium text-white/50">
                                        — {quotes[activeQuote].author}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="mt-4 flex justify-center space-x-1">
                            {quotes.map((_, index) => (
                                <button
                                    key={index}
                                    className={`h-1.5 w-8 rounded-full transition-all ${index === activeQuote ? "bg-pink-400" : "bg-white/20"
                                        }`}
                                    onClick={() => setActiveQuote(index)}
                                />
                            ))}
                        </div>
                    </Card>
                    <Card colSpan={2} glowColor="green" delay={0.4} controls={controls}>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 backdrop-blur-md">
                                <Terminal className="h-6 w-6 text-green-400" />
                            </div>
                            <h3 className="text-xl font-bold">Skills Explorer</h3>
                        </div>
                        <InteractiveTerminal />
                    </Card>
                    <Card
                        colSpan={2}
                        glowColor="blue"
                        delay={0.5}
                        className="pb-0 hidden lg:block overflow-hidden"
                        controls={controls}
                    >
                        <h3 className="mb-2 text-xl font-bold">Global Collaborations</h3>
                        <p className="text-sm text-white/70">
                            I&apos;ve collaborated with talented people around the world
                        </p>

                        <div className="relative w-full h-[250px] overflow-visible">
                            <div className="absolute -bottom-[180px] left-1/2 -translate-x-1/2">
                                <div className="size-[420px]">
                                    <Globe size={420} />
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
