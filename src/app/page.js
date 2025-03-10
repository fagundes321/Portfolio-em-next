import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="m-0 p-0 box-border scroll-smooth bg-[#1f242d] ">
      <div class="container mx-auto px-12 py-4">
        <HeroSection/>
      </div>
    </main>
  );
}
