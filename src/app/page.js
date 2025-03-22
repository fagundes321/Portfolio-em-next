"use client";
import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ClickSpark from "./components/ClickSpark/ClickSpark";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  return (
    <main className="select-none flex flex-col">
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Navbar />
        <div className="container mt-15 mx-auto px-12 py-4">
          <HeroSection />
          <br />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </div>
        <Footer />
      </ClickSpark>
    </main>
  );
}
