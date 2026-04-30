"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { Globe, HeartHandshake, Navigation, Users } from "lucide-react";

const GithubIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    className={className}
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
    />
    <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0" />
  </svg>
);
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
          className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 md:gap-8 md:px-2 md:grid-cols-1 lg:grid-cols-2"
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
                onClick={() => handleCardClick(index)}
              >
                <div
                  className={`relative h-full w-full transform-style-preserve-3d transition-transform duration-700 ${flippedCards[index] ? "rotate-y-180" : ""} md:group-hover:rotate-y-180`}
                >
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
                            <Icon
                              className={`h-16 w-16 text-${project.color}-400/40`}
                            />
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
                            <span className="md:hidden">Tap to explore</span>
                            <span className="hidden md:inline">
                              Hover to explore
                            </span>
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
                          className={`flex-1 flex items-center justify-center space-x-2 rounded-lg bg-${project.color}-600/30 border border-${project.color}-400/40 px-4 py-3 text-sm font-medium text-${project.color}-300 hover:bg-${project.color}-600/40 hover:text-${project.color}-200 transition-all duration-200 h-11`}
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
                            className="flex items-center justify-center rounded-lg bg-white/20 border border-white/30 size-11 text-white/80 hover:bg-white/30 hover:text-white transition-all duration-200"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <GithubIcon className="h-4 w-4" />
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
    </section>
  );
}
