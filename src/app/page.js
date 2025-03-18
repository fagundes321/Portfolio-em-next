import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ClickSpark from "./components/ClickSpark/ClickSpark";
import Threads from "./components/Backgrounds/Threads";
import Particles from "./components/Backgrounds/Particles"

export default function Home() {
  return (
    <main className="select-none">
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Navbar />
        {/* <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={900}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div> */}
        {/* Seção Hero */}
        <div className="flex flex-col select-none">
          <div className="container mt-15 mx-auto px-12 py-4">
            <HeroSection />
          </div>
        </div>

        {/* Threads entre as seções Hero e About */}
        <div style={{ width: "100%", height: "600px" }}>
          <Threads
            amplitude={1}
            distance={0}
            enableMouseInteraction={true}
            color={[124 / 255, 240 / 255, 61 / 255]} // Cor em RGB normalizada
          />
        </div>

        {/* Seção About */}
        <div className="flex flex-col select-none">
          <div className="container mt-15 mx-auto px-12 py-4">
            <AboutSection />
          </div>
        </div>

        {/* Threads entre as seções About e Projects */}
        <div style={{ width: "100%", height: "600px" }}>
          <Threads
            amplitude={1}
            distance={0}
            enableMouseInteraction={true}
            color={[124 / 255, 240 / 255, 61 / 255]} // Cor em RGB normalizada
          />
        </div>

        {/* Seção Projects */}
        <div className="flex flex-col select-none">
          <div className="container mt-15 mx-auto px-12 py-4">
            <ProjectsSection />
          </div>
        </div>
      </ClickSpark>
    </main>
  );
}
