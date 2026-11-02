"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { Globe, HeartHandshake, Navigation, RotateCcw, Users } from "lucide-react";


import { useEffect, useRef, useState } from "react";
import { GithubIcon } from "./icons";
import Image from "next/image";

// Full class strings so Tailwind can find them at build time.
const colorStyles = {
  indigo: {
    pill: "border-indigo-400/40 bg-indigo-600/20 text-indigo-300",
    iconBox: "bg-indigo-600/30 border-indigo-400/30",
    icon: "text-indigo-400",
    button:
      "bg-indigo-600/30 border-indigo-400/40 text-indigo-200 hover:bg-indigo-600/45 hover:text-white",
  },
  fuchsia: {
    pill: "border-fuchsia-400/40 bg-fuchsia-600/20 text-fuchsia-300",
    iconBox: "bg-fuchsia-600/30 border-fuchsia-400/30",
    icon: "text-fuchsia-400",
    button:
      "bg-fuchsia-600/30 border-fuchsia-400/40 text-fuchsia-200 hover:bg-fuchsia-600/45 hover:text-white",
  },
  green: {
    pill: "border-green-400/40 bg-green-600/20 text-green-300",
    iconBox: "bg-green-600/30 border-green-400/30",
    icon: "text-green-400",
    button:
      "bg-green-600/30 border-green-400/40 text-green-200 hover:bg-green-600/45 hover:text-white",
  },
  pink: {
    pill: "border-pink-400/40 bg-pink-600/20 text-pink-300",
    iconBox: "bg-pink-600/30 border-pink-400/30",
    icon: "text-pink-400",
    button:
      "bg-pink-600/30 border-pink-400/40 text-pink-200 hover:bg-pink-600/45 hover:text-white",
  },
};

export default function Projects() {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: false,
    amount: 0.2,
    initial: false,
  });
  const [flippedCards, setFlippedCards] = useState({});

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const handleCardClick = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

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
      description:
        "During an internship, I developed a prototype for an interactive learning platform for sign language. While the code is not publicly available, a demonstration of the model, which recognizes the finger alphabet, is accessible online. (2024)",
      liveUrl: "https://fingeralphabet.vercel.app",
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
    <section
      id="projects"
      aria-label="Featured Projects"
      className="relative w-full py-12 text-white"
    >
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
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
          className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 md:gap-8 md:px-2 md:grid-cols-1 lg:grid-cols-2"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            const colors = colorStyles[project.color];
            const isFlipped = !!flippedCards[index];
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
                onClick={() => handleCardClick(index)}
              >
                <div
                  className={`relative h-full w-full transform-style-preserve-3d transition-transform duration-700 ${isFlipped ? "rotate-y-180" : ""} md:group-hover:rotate-y-180 md:group-focus-within:rotate-y-180`}
                >
                  {/* Front of card */}
                  <div
                    className={`absolute inset-0 h-full w-full backface-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md overflow-hidden ${isFlipped ? "pointer-events-none" : ""} md:group-hover:pointer-events-none`}
                  >
                    <div className="relative h-full flex flex-col p-4 sm:p-6">
                      {/* Project Image Container */}
                      <div className="relative w-full aspect-video mb-4 rounded-2xl overflow-hidden border border-white/20 bg-gradient-to-br from-gray-800 to-gray-900">
                        {project.image ? (
                          <>
                            <Image
                              src={project.image}
                              alt={`Screenshot of ${project.title}`}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-700"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            {/* Subtle overlay for better contrast */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                          </>
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Icon className={`h-16 w-16 opacity-40 ${colors.icon}`} />
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
                              className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium backdrop-blur-sm ${colors.pill}`}
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
                        <div className="mt-auto flex items-center gap-2 text-sm text-white/60">
                          <RotateCcw className="h-4 w-4" aria-hidden="true" />
                          <span>
                            <span className="md:hidden">Tap for details & links</span>
                            <span className="hidden md:inline">
                              Hover for details & links
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div
                    className={`absolute inset-0 h-full w-full backface-hidden rotate-y-180 rounded-3xl border border-white/10 bg-gray-900 p-4 sm:p-6 ${isFlipped ? "" : "pointer-events-none"} md:group-hover:pointer-events-auto md:group-focus-within:pointer-events-auto`}
                  >

                    <div className="relative z-10 flex h-full flex-col">
                      {/* Header */}
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${colors.iconBox}`}
                        >
                          <Icon className={`h-5 w-5 ${colors.icon}`} />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-white">
                          {project.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <div className="mb-4 flex-1">
                        <p className="text-sm text-white/80 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-3">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className={`flex h-11 flex-1 items-center justify-center gap-2 rounded-lg border px-4 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${colors.button}`}
                        >
                          <Globe className="h-4 w-4" aria-hidden="true" />
                          <span>Live Demo</span>
                        </a>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-4 text-sm font-medium text-white/90 transition-colors duration-200 hover:bg-white/20 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                          >
                            <GithubIcon className="h-4 w-4 shrink-0" />
                            <span>Code</span>
                          </a>
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
    </section>
  );
}
