import Image from "next/image";
import AnimatedBackground from "../components/AnimatedBackground";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <div className="font-sans relative bg-black">
      <AnimatedBackground />
      <Hero />
      <AboutMe />
      <Projects />
    </div>
  );
}
