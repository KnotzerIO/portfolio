"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin, Shield, Users, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

export default function WorkExperience() {
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

  const experiences = [
    {
      title: "Software Engineer",
      company: "durchblicker.at",
      period: "11/2025 – Present",
      type: "Full-time",
      description:
        "Full-stack developer at Austria's largest comparison platform for insurance, energy and finance. Working on high-traffic web applications with a focus on performance and user experience.",
      icon: Shield,
      color: "orange",
      status: "current",
    },
    {
      title: "Software Engineer",
      company: "TIMETOACT GROUP Österreich",
      period: "02/2025 – 10/2025",
      type: "Full-time",
      description:
        "Managed cloud infrastructure and developed AI-integrated solutions for enterprise clients. Designed and implemented scalable cloud architectures on Azure, automated deployment pipelines, and integrated AI capabilities into business applications.",
      icon: Briefcase,
      status: "completed",
    },
    {
      title: "Software Engineer Intern",
      company: "Kontron AG",
      period: "07/2024",
      type: "Internship",
      description:
        "Developed mapping & navigation applications with focus on containerization and deployment optimization.",
      icon: MapPin,
      status: "completed",
    },
    {
      title: "Software Engineer Intern",
      company: "For Sports GmbH",
      period: "06/2024",
      type: "Internship",
      description:
        "Built AI-based learning platform for sign language using computer vision and machine learning technologies.",
      icon: Users,
      status: "completed",
    },
    {
      title: "Software Engineer Intern",
      company: "TIMETOACT GROUP Österreich",
      period: "07/2023",
      type: "Internship",
      description:
        "Developed React + Azure Functions web application with focus on cloud integration.",
      icon: Zap,
      status: "completed",
    },
  ];

  return (
    <div className="relative w-full py-8 md:py-12 text-white">
      <div className="container relative z-10 mx-auto px-4 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mb-3 flex items-center justify-center space-x-2">
            <div className="h-px w-8 bg-white/20"></div>
            <span className="text-xs font-medium uppercase tracking-widest text-white/50">
              Career Journey
            </span>
            <div className="h-px w-8 bg-white/20"></div>
          </div>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Work Experience
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/70">
            My professional journey through diverse roles in software
            engineering, from internships to full-time positions across various
            industries.
          </p>
        </motion.div>

        <div ref={containerRef} className="mx-auto max-w-4xl">
          <div className="relative">
            {/* Enhanced timeline line with gradient - hidden on mobile */}
            <div className="hidden md:block absolute left-4 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/30 via-white/20 to-white/10 shadow-lg"></div>

            {/* Timeline glow effect - hidden on mobile */}
            <div className="hidden md:block absolute left-4 md:left-1/2 md:-translate-x-1 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-600/20 via-purple-600/10 to-transparent blur-sm"></div>

            <div className="space-y-6 md:space-y-12">
              {experiences.map((experience, index) => {
                const Icon = experience.icon;
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={`${experience.company}-${experience.period}`}
                    className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                      } flex-col md:flex-row`}
                    initial="hidden"
                    animate={controls}
                    variants={{
                      hidden: { opacity: 0, x: 0, y: 30 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        transition: {
                          duration: 0.8,
                          delay: index * 0.15,
                          type: "spring",
                          stiffness: 100,
                        },
                      },
                    }}
                  >
                    {/* Enhanced timeline dot with pulse animation - hidden on mobile */}
                    <div className="hidden md:block absolute left-4 md:left-1/2 md:-translate-x-1/2 z-20">
                      <div
                        className={`relative flex h-10 w-10 items-center justify-center rounded-full border-2 shadow-lg ${experience.status === "current"
                          ? "border-blue-400 bg-blue-600/30 shadow-blue-400/50"
                          : "border-white/40 bg-white/10 shadow-white/20"
                          } backdrop-blur-md transition-all duration-300 hover:scale-110`}
                      >
                        <Icon
                          className={`h-5 w-5 ${experience.status === "current"
                            ? "text-blue-400"
                            : "text-white/80"
                            }`}
                        />

                        {/* Pulse effect for current position */}
                        {experience.status === "current" && (
                          <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-75"></div>
                        )}
                      </div>
                    </div>

                    {/* Enhanced content card */}
                    <div
                      className={`w-full md:w-5/12 ${isLeft
                        ? "md:mr-auto md:pr-8 md:ml-0"
                        : "md:ml-auto md:pl-8"
                        }`}
                    >
                      <motion.div
                        className={`relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-white/20 hover:from-white/15 hover:to-white/10`}

                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {/* Current position indicator with enhanced styling */}
                        {experience.status === "current" && (
                          <div className="absolute -top-3 -right-3">
                            <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-blue-700/20 border border-blue-400/40 backdrop-blur-md rounded-full px-3 py-1.5 shadow-lg">
                              <div className="h-2.5 w-2.5 rounded-full bg-blue-400 animate-pulse shadow-blue-400/50 shadow-sm"></div>
                              <span className="text-xs font-medium text-blue-400">
                                Current
                              </span>
                            </div>
                          </div>
                        )}

                        <div className="mb-4">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-white/90 transition-colors">
                              {experience.title}
                            </h3>
                            <span
                              className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${experience.status === "current"
                                ? "bg-blue-600/20 text-blue-400 border border-blue-400/30"
                                : "bg-white/10 text-white/70 border border-white/20"
                                }`}
                            >
                              {experience.type}
                            </span>
                          </div>
                          <h4 className="text-base sm:text-lg font-semibold text-white/90 mb-3">
                            {experience.company}
                          </h4>
                          <div className="flex items-center space-x-2 text-sm text-white/60">
                            <Calendar className="h-4 w-4 text-white/50" />
                            <span className="font-medium">
                              {experience.period}
                            </span>
                          </div>
                        </div>

                        <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                          {experience.description}
                        </p>

                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
