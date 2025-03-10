"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-left place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5 lg:text-6xl font-extrabold">
            Seja Bem-Vindo!
          </h1>
          <h1 className="text-white mb-4 text-3xl lg:text-4xl font-bold">
            Sou Victor Fagundes
          </h1>
          <h1 className="text-[#7cf03d]  mb-4 text-3xl lg:text-4xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#5CBF2A] via-[#7CF03D] to-[#2E6B1A]">
              Desenvolvedor {""}
            </span>
            <TypeAnimation
              sequence={[
                "Web",
                1000,
                "Front-end",
                1000,
                "Back-end!",
                1000,
                "Full Stack",
                1000,
              ]}
              wrapper="span"
              speed={30}
              style={{
                fontSize: "1em",
                display: "inline-block",
                color: "white",
              }}
              repeat={Infinity}
            />
          </h1>
          <br />
          <img
            src="https://skillicons.dev/icons?i=next,react,angular,tailwind,js,ts,docker,linux"
            alt="Tecnologias"
          />
          <br />
          <div>
            <button className="cursor-pointer px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#7CF03D] via-[#5CBF2A] to-[#3D8F1F] hover:bg-slate-800 text=white mt-3">
              <span className="block bg-[#1f242d] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full overflow-hidden bg-[#181818] w-[500px] h-[500px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.jpg"
              alt="Minha foto"
              className="absolute transform -translate-x-1/2 -translate-y-65 top-1/2 left-1/2"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
