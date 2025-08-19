import { motion, useAnimation, useInView } from "framer-motion";
import { Github, Globe, Navigation, Users } from "lucide-react";
import { useEffect, useRef } from "react";
export default function Projects() {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
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
      title: "Indoor",
      description:
        "Advanced indoor navigation and positioning system for complex building environments with real-time wayfinding capabilities.",
      liveUrl: "https://indoor.knotzer.io",
      githubUrl: "https://https://github.com/KnotzerIO/indoor-wayfinder",
      icon: Navigation,
      color: "indigo",
      techStack: ["React", "TypeScript"],
      image: indoorWayfinderImg,
    },
    {
      title: "OpenIndoorMaps",
      description:
        "Open-source platform for creating and sharing indoor maps, enabling collaborative mapping of interior spaces.",
      liveUrl: "https://openindoormaps.knotzer.io",
      githubUrl: "https://https://github.com/openindoormaps/openindoormaps",
      icon: Globe,
      color: "green",
      techStack: ["Remix", "MaplibreGL"],
      image: "/api/placeholder/400/250",
    },
    {
      title: "Find the Impostor",
      description:
        "Interactive social deduction game with real-time multiplayer capabilities and engaging gameplay mechanics.",
      liveUrl: "https://impostor.knotzer.io",
      githubUrl: "https://github.com/KnotzerIO/find-the-impostor",
      icon: Users,
      color: "pink",
      techStack: ["Next.js", "PWA"],
      image: "/api/placeholder/400/250",
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
          className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                className="group perspective-1000 h-80"
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
                  <div className="absolute inset-0 h-full w-full backface-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md overflow-hidden">
                    {/* Project Image/Hero Section */}
                    <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br from-${project.color}-600/30 to-${project.color}-800/30`}
                      />

                      {/* Project Image Preview */}
                      {typeof project.image === "string" ? (
                        <img
                          src={project.image}
                          alt={`${project.title} preview`}
                          className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center z-5">
                          <Icon
                            className={`h-24 w-24 text-${project.color}-400/40`}
                          />
                        </div>
                      )}

                      {/* Project info overlay */}
                      <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                        <div className="mb-3">
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {project.title}
                          </h3>

                          {/* Tech stack preview */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.techStack.slice(0, 2).map((tech) => (
                              <span
                                key={tech}
                                className={`inline-flex items-center rounded-full border border-${project.color}-400/40 bg-${project.color}-600/20 px-2.5 py-1 text-xs font-medium text-${project.color}-300 backdrop-blur-sm`}
                              >
                                {tech}
                              </span>
                            ))}
                            {project.techStack.length > 2 && (
                              <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-2.5 py-1 text-xs font-medium text-white/70 backdrop-blur-sm">
                                +{project.techStack.length - 2} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Hover indicator */}
                        <div className="flex items-center space-x-2 text-white/60">
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
                  <div className="absolute inset-0 h-full w-full backface-hidden rotate-y-180 rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl p-6">
                    {/* Solid background overlay to prevent text bleeding */}
                    <div className="absolute inset-0 rounded-2xl bg-gray-900/90 backdrop-blur-xl"></div>

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
                        <h3 className="text-lg font-bold text-white">
                          {project.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <div className="mb-6 flex-1">
                        <h4 className="text-xs font-medium uppercase tracking-widest text-white/50 mb-2">
                          About This Project
                        </h4>
                        <p className="text-sm text-white/80 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Action buttons */}
                      <div className="flex space-x-3">
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
                            className="flex items-center justify-center rounded-lg bg-white/20 border border-white/30 px-3 py-3 text-white/80 hover:bg-white/30 hover:text-white transition-all duration-200"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Github className="h-4 w-4" />
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
