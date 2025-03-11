"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid items-center grid-cols-1 sm:grid-cols-12 h-[85vh]">
        <div className="col-span-7 text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Seja Bem-Vindo!
          </h1>
          <h1 className="text-white mb-4 text-3xl lg:text-4xl font-bold">
            Sou Victor Fagundes
          </h1>
          <h1 className="text-[#7cf03d] mb-4 text-3xl lg:text-4xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#5CBF2A] via-[#7CF03D] to-[#2E6B1A]">
              Desenvolvedor{" "}
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
            <button className="cursor-pointer w-full sm:w-fit rounded-full p-1 bg-[#1f242d]  mt-3 transition-all duration-500 hover:bg-gradient-to-br hover:from-[#7CF03D] hover:via-[#5CBF2A] hover:to-[#3D8F1F]">
              <span className="block bg-gradient-to-br bg-[#7CF03D] text-[#1f242d] rounded-full px-5 py-2 shadow-[0_0_10px_#7cf03d]  border-[#7CF03D] transition-all duration-500 hover:bg-[#1f242d] hover:text-[#7CF03D] hover:shadow-none">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full overflow-hidden bg-[#181818] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] relative">
            <Image
              src="/images/hero-image.jpg"
              alt="Minha foto"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-45%] object-cover"
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
