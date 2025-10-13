import Image from "next/image";
import AnimatedBackground from "../components/AnimatedBackground";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import TechSkills from "@/components/Techskills";
export default function Home() {
  return (
    <div className="font-sans relative bg-black">
      <AnimatedBackground />
      <Hero />
      <AboutMe />
      <Projects />
      <WorkExperience />
      <TechSkills />
    </div>
  );
}
