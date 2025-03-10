import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#1f242d] ">
        <Navbar/>
      <div className="container mx-auto px-12 py-4">
        <HeroSection/>
      </div>
    </main>
  );
}
