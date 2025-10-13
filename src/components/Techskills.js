"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import {
    Award,
    Cloud,
    Layers,
    Server,
    Monitor,
    CheckCircle,
    Clock,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function TechSkills() {
    const controls = useAnimation();
    const containerRef = useRef(null);
    const [activeTab, setActiveTab] = useState("frontend");
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

    const skillCategories = {
        frontend: {
            title: "Frontend",
            icon: Monitor,
            color: "blue",
            skills: [
                { name: "HTML", level: 95, icon: "🌐" },
                { name: "CSS", level: 90, icon: "🎨" },
                { name: "JavaScript", level: 90, icon: "⚡" },
                { name: "TypeScript", level: 85, icon: "🔷" },
                { name: "React", level: 90, icon: "⚛️" },
                { name: "Next.js", level: 80, icon: "▲" },
                { name: "Selenium", level: 75, icon: "🔧" },
                { name: "Playwright", level: 70, icon: "🎭" },
            ],
        },
        backend: {
            title: "Backend",
            icon: Server,
            color: "green",
            skills: [
                { name: "Node.js", level: 85, icon: "🟢" },
                { name: "Express", level: 80, icon: "🚂" },
                { name: "Python", level: 85, icon: "🐍" },
                { name: "Flask", level: 75, icon: "🌶️" },
                { name: "FastAPI", level: 80, icon: "⚡" },
                { name: "Java", level: 70, icon: "☕" },
                { name: "Spring Boot", level: 70, icon: "🍃" },
                { name: "C#", level: 65, icon: "🔷" },
            ],
        },
        devops: {
            title: "DevOps / Cloud",
            icon: Cloud,
            color: "purple",
            skills: [
                { name: "Azure", level: 85, icon: "☁️" },
                { name: "Docker", level: 80, icon: "🐳" },
                { name: "CI/CD Pipelines", level: 75, icon: "🔄" },
                { name: "Azure Functions", level: 80, icon: "⚡" },
                { name: "Infrastructure as Code", level: 70, iconc: "🏗️" },
                { name: "Container Orchestration", level: 70, icon: "🎛️" },
                { name: "Kubernetes", level: 65, icon: "🛠️" },
                { name: "Kong API Management", level: 60, icon: "🗺️" },
            ],
        },
    };

    const certifications = [
        {
            name: "Azure Fundamentals",
            code: "AZ-900",
            status: "completed",
            icon: Award,
            color: "blue",
            date: "Completed",
        },
        {
            name: "Azure AI Engineer Associate",
            code: "AI-102",
            status: "in-progress",
            icon: Award,
            color: "purple",
            date: "In Progress",
        },
    ];

    const tabs = [
        { id: "frontend", label: "Frontend", icon: Monitor, color: "blue" },
        { id: "backend", label: "Backend", icon: Server, color: "green" },
        { id: "devops", label: "DevOps/Cloud", icon: Cloud, color: "purple" },
    ];

    return (
        <div className="relative w-full py-8 md:py-12 text-white">
            <div className="container relative z-10 mx-auto px-4 md:px-2">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <div className="mb-3 flex items-center justify-center space-x-2">
                        <div className="h-px w-8 bg-white/20"></div>
                        <span className="text-xs font-medium uppercase tracking-widest text-white/50">
                            Technical Expertise
                        </span>
                        <div className="h-px w-8 bg-white/20"></div>
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                        Tech Skills
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-white/70">
                        A comprehensive overview of my technical skills, certifications, and
                        specialized expertise across various technologies and platforms.
                    </p>
                </motion.div>

                <div ref={containerRef} className="mx-auto max-w-6xl">
                    {/* Tab Navigation */}
                    <div
                        className="flex justify-center mb-8 md:mb-12 px-2"

                    >
                        <div className="flex flex-col sm:flex-row gap-2 sm:space-x-2 sm:gap-0 p-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md w-full sm:w-auto">
                            {tabs.map((tab) => {
                                const Icon = tab.icon;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`relative flex items-center justify-center sm:justify-start space-x-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-sm sm:text-base ${activeTab === tab.id
                                            ? `bg-${tab.color}-600/20 text-${tab.color}-400 border border-${tab.color}-400/30`
                                            : "text-white/70 hover:text-white/90 hover:bg-white/10"
                                            }`}
                                    >
                                        <Icon className="h-4 w-4" />
                                        <span className="hidden sm:inline">{tab.label}</span>
                                        <span className="sm:hidden">{tab.label.split('/')[0]}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Skills Content */}
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="mb-12"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {skillCategories[
                                activeTab
                            ].skills.map((skill, index) => (
                                <div
                                    key={skill.name}
                                    className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-6 hover:border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-300"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="text-2xl">{skill.icon}</div>
                                            <div>
                                                <h3 className="font-semibold text-white">
                                                    {skill.name}
                                                </h3>
                                                <p className="text-xs text-white/60">Proficiency</p>
                                            </div>
                                        </div>
                                        <div
                                            className={`text-sm font-bold text-${skillCategories[
                                                activeTab
                                            ].color
                                                }-400`}
                                        >
                                            {skill.level}%
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="relative">
                                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                className={`h-full bg-gradient-to-r from-${skillCategories[
                                                    activeTab
                                                ].color
                                                    }-500 to-${skillCategories[
                                                        activeTab
                                                    ].color
                                                    }-400 rounded-full`}
                                                initial={{ width: 0 }}
                                                animate={{ width: `${skill.level}%` }}
                                                transition={{
                                                    duration: 1,
                                                    ease: "easeOut",
                                                }}
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certifications Section */}
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={controls}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.6, delay: 0.3 },
                            },
                        }}
                    >
                        {/* Certifications Card */}
                        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-6">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-600/20">
                                    <Award className="h-6 w-6 text-yellow-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Certifications</h3>
                                    <p className="text-sm text-white/70">
                                        Professional credentials & achievements
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {certifications.map((cert) => {
                                    const Icon = cert.icon;
                                    return (
                                        <div
                                            key={cert.code}
                                            className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors"
                                        >
                                            <div className="flex items-center space-x-3">
                                                {cert.status === "completed" ? (
                                                    <CheckCircle className="h-5 w-5 text-green-400" />
                                                ) : (
                                                    <Clock className="h-5 w-5 text-yellow-400" />
                                                )}
                                                <div>
                                                    <h4 className="font-medium text-white">
                                                        {cert.name}
                                                    </h4>
                                                    <p className="text-xs text-white/60">{cert.code}</p>
                                                </div>
                                            </div>
                                            <div
                                                className={`px-3 py-1.5 rounded-full text-xs font-medium ${cert.status === "completed"
                                                    ? "bg-green-600/20 text-green-400 border border-green-400/30"
                                                    : "bg-yellow-600/20 text-yellow-400 border border-yellow-400/30"
                                                    }`}
                                            >
                                                {cert.date}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Specialized Skills */}
                        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-6">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/20">
                                    <Layers className="h-6 w-6 text-indigo-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Specialized Expertise</h3>
                                    <p className="text-sm text-white/70">
                                        Domain-specific skills & technologies
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {[
                                    {
                                        name: "Indoor Navigation",
                                        icon: "🧭",
                                        desc: "Mapping and route planning for indoor spaces",
                                    },
                                    {
                                        name: "GIS Systems",
                                        icon: "🗺️",
                                        desc: "Geographic information systems",
                                    },
                                    {
                                        name: "Computer Vision",
                                        icon: "👁️",
                                        desc: "AI-powered image processing",
                                    },
                                ].map((skill, index) => (
                                    <div
                                        key={skill.name}
                                        className="group flex items-center space-x-4 p-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
                                    >
                                        <div className="text-2xl">{skill.icon}</div>
                                        <div className="flex-1">
                                            <h4 className="font-medium text-white group-hover:text-white/90 transition-colors">
                                                {skill.name}
                                            </h4>
                                            <p className="text-xs text-white/60">{skill.desc}</p>
                                        </div>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="h-2 w-2 rounded-full bg-indigo-400"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
