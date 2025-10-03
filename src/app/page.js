import Image from "next/image";
import AnimatedBackground from "../components/AnimatedBackground";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="font-sans relative bg-black">
      <AnimatedBackground />
      <Hero />
    </div>
  );
}
