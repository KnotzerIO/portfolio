"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { Github, Globe, HeartHandshake, Navigation, Users } from "lucide-react";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Projects() {
    const controls = useAnimation();
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, {
        once: false,
        amount: 0.2,
        initial: false,
    });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const projects = [
        {
            title: "Pathpal Indoor Wayfinder",
            description:
                "Pathpal is a prototypical web-based indoor navigation system developed as my first React project for a school assignment. It features interactive SVG maps, Dijkstra's pathfinding algorithm, pinch-to-zoom functionality, and a user-friendly responsive design. (2023-2024)",
            liveUrl: "https://indoor.knotzer.io",
            githubUrl: "https://github.com/KnotzerIO/indoor-wayfinder",
            icon: Navigation,
            color: "indigo",
            techStack: ["React", "TypeScript"],
            image: "/images/indoor-wayfinder.png",
        },
        {
            title: "Sign Language Recognition",
            description: "During an internship, I developed a prototype for an interactive learning platform for sign language. While the code is not publicly available, a demonstration of the model, which recognizes the finger alphabet, is accessible online. (2024)",
            liveUrl: "https://www.youtube.com/watch?v=ZxW2Kk1bYI8",
            githubUrl: null,
            icon: HeartHandshake,
            color: "fuchsia",
            techStack: ["Next.js", "TensorFlow.js", "Mediapipe"],
            image: "/images/fingerspelling.png",
        },
        {
            title: "OpenIndoorMaps",
            description:
                "OpenIndoorMaps is a self-hostable, open-source indoor mapping platform built on OpenStreetMap. Designed for shopping malls, airports, and hospitals, it offers minimalist navigation with multi-floor support and a customizable admin panel. Although no longer maintained, it remains an early-stage, community-driven alternative to proprietary systems. (2024-2025)",
            liveUrl: "https://openindoormaps.knotzer.io",
            githubUrl: "https://github.com/openindoormaps/openindoormaps",
            icon: Globe,
            color: "green",
            techStack: ["Remix", "MaplibreGL", "OSM"],
            image: "/images/openindoormaps.png",
        },
        {
            title: "Find the Impostor",
            description:
                "Find the Impostor is a local-first Progressive Web App party game inspired by a TikTok trend. Players guess secret words while impostors try to blend in. The game features AI-powered gameplay, multi-language support (EN/DE), flexible configurations for 3-10 players, and a hint system. (2025)",
            liveUrl: "https://impostor.knotzer.io",
            githubUrl: "https://github.com/KnotzerIO/find-the-impostor",
            icon: Users,
            color: "pink",
            techStack: ["Next.js 15", "PWA", "TypeScript", "Zustand"],
            image: "/images/find-the-impostor.png",
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
                            My Work
                        </span>
                        <div className="h-px w-8 bg-white/20"></div>
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                        Featured Projects
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-white/70">
                        A collection of projects showcasing my expertise in web development,
                        indoor navigation, and interactive applications.
                    </p>
                </motion.div>

                <div
                    ref={containerRef}
                    className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-2"
                >
                    {projects.map((project, index) => {
                        const Icon = project.icon;
                        return (
                            <motion.div
                                key={project.title}
                                className="group perspective-1000 h-[420px] sm:h-[450px]"
                                initial="hidden"
                                animate={controls}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { duration: 0.6, delay: index * 0.1 },
                                    },
                                }}
                            >
                                <div className="relative h-full w-full transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                                    {/* Front of card */}
                                    <div className="absolute inset-0 h-full w-full backface-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md overflow-hidden">
                                        <div className="relative h-full flex flex-col p-4 sm:p-6">
                                            {/* Project Image Container */}
                                            <div className="relative w-full aspect-video mb-4 rounded-2xl overflow-hidden border border-white/20 bg-gradient-to-br from-gray-800 to-gray-900">
                                                {project.image ? (
                                                    <>
                                                        <Image
                                                            src={project.image}
                                                            alt={project.title}
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        />
                                                        {/* Subtle overlay for better contrast */}
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                                    </>
                                                ) : (
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <Icon className={`h-16 w-16 text-${project.color}-400/40`} />
                                                    </div>
                                                )}
                                            </div>

                                            {/* Project Info */}
                                            <div className="flex-1 flex flex-col">
                                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                                    {project.title}
                                                </h3>

                                                {/* Tech stack preview */}
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {project.techStack.slice(0, 3).map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className={`inline-flex items-center rounded-full border border-${project.color}-400/40 bg-${project.color}-600/20 px-2.5 py-1 text-xs font-medium text-${project.color}-300 backdrop-blur-sm`}
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                    {project.techStack.length > 3 && (
                                                        <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-2.5 py-1 text-xs font-medium text-white/70 backdrop-blur-sm">
                                                            +{project.techStack.length - 3}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Hover indicator */}
                                                <div className="mt-auto flex items-center space-x-2 text-white/60">
                                                    <div className="h-1 w-8 bg-white/30 rounded-full"></div>
                                                    <span className="text-xs font-medium uppercase tracking-wider">
                                                        Hover to explore
                                                    </span>
                                                    <div className="h-1 w-8 bg-white/30 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Back of card */}
                                    <div className="absolute inset-0 h-full w-full backface-hidden rotate-y-180 rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl p-4 sm:p-6">
                                        {/* Solid background overlay to prevent text bleeding */}
                                        <div className="absolute inset-0 rounded-3xl bg-gray-900/90 backdrop-blur-xl"></div>

                                        <div className="relative z-10 flex h-full flex-col">
                                            {/* Header */}
                                            <div className="flex items-center space-x-3 mb-4">
                                                <div
                                                    className={`flex h-10 w-10 items-center justify-center rounded-xl bg-${project.color}-600/30 border border-${project.color}-400/30`}
                                                >
                                                    <Icon
                                                        className={`h-5 w-5 text-${project.color}-400`}
                                                    />
                                                </div>
                                                <h3 className="text-base sm:text-lg font-bold text-white">
                                                    {project.title}
                                                </h3>
                                            </div>

                                            {/* Description */}
                                            <div className="mb-4 flex-1">
                                                <h4 className="text-xs font-medium uppercase tracking-widest text-white/50 mb-2">
                                                    About This Project
                                                </h4>
                                                <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-3">
                                                    {project.description}
                                                </p>


                                            </div>

                                            {/* Action buttons */}
                                            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                                                <motion.a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`flex-1 flex items-center justify-center space-x-2 rounded-lg bg-${project.color}-600/30 border border-${project.color}-400/40 px-4 py-3 text-sm font-medium text-${project.color}-300 hover:bg-${project.color}-600/40 hover:text-${project.color}-200 transition-all duration-200`}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    <Globe className="h-4 w-4" />
                                                    <span>Live Demo</span>
                                                </motion.a>
                                                {project.githubUrl && (
                                                    <motion.a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center justify-center rounded-lg bg-white/20 border border-white/30 px-4 sm:px-3 py-3 text-white/80 hover:bg-white/30 hover:text-white transition-all duration-200"
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                    >
                                                        <Github className="h-4 w-4" />
                                                        <span className="ml-2 sm:hidden">GitHub</span>
                                                    </motion.a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
