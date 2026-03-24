import AnimatedBackground from "../components/AnimatedBackground";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import TechSkills from "@/components/Techskills";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Mark Knotzer - Software Engineer",
      url: "https://www.knotzer.io",
    },
    {
      "@type": "Person",
      name: "Mark Knotzer",
      url: "https://www.knotzer.io",
      jobTitle: "Software Engineer",
      knowsAbout: [
        "Full-Stack Web Development",
        "AI Integration",
        "Cloud Infrastructure",
        "DevOps",
        "React",
        "Next.js",
        "TypeScript",
        "Azure",
        "Docker",
        "Kubernetes",
      ],
      sameAs: [
        "https://github.com/KnotzerIO",
        "https://www.linkedin.com/in/knotzer",
      ],
    },
  ],
};

export default function Home() {
  return (
    <main className="font-sans relative bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnimatedBackground />
      <Hero />
      <AboutMe />
      <Projects />
      <WorkExperience />
      <TechSkills />
    </main>
  );
}
