import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Seja Bem-Vindo!
          </h1>
          <h2 className="text-[#ADB7BE] text-lg lg:text-xl">
            Sou Victor Fagundes
          </h2>
        </div>
        <div className="col-span-5">
          <div className="rounded-full bg-[#181818] w-100 h-100 relative">
            <Image
              src="/images/hero-image.jpg"
              alt="Minha foto"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
