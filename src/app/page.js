export const dynamic = 'force-static';

import AnimatedBackground from "../components/AnimatedBackground";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import TechSkills from "@/components/Techskills";
import Footer from "@/components/Footer";

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
      image: "https://www.knotzer.io/images/og-image.png",
      jobTitle: "Software Engineer",
      description:
        "Software Engineer based in Austria specializing in full-stack web development, AI integration, cloud infrastructure and DevOps.",
      worksFor: {
        "@type": "Organization",
        name: "durchblicker.at",
        url: "https://durchblicker.at",
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "AT",
      },
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
      <Footer />
    </main>
  );
}
