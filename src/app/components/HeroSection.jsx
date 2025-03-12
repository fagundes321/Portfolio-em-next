"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import "boxicons/css/boxicons.min.css";
import "animate.css";

const HeroSection = () => {
  return (
    <section>
      <div className="grid items-center grid-cols-1 sm:grid-cols-12 h-[85vh]">
        <div className="col-span-7 text-center sm:text-left animate__animated animate__slow animate__fadeInLeft">
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
          <div className="flex gap-4">
            <img
              src="https://skillicons.dev/icons?i=next"
              alt="Next.js"
              className="w-12 h-12 transition-transform duration-300 hover:scale-110"
            />
            <img
              src="https://skillicons.dev/icons?i=react"
              alt="React"
              className="w-12 h-12 transition-transform duration-300 hover:rotate-12"
            />
            <img
              src="https://skillicons.dev/icons?i=angular"
              alt="Angular"
              className="w-12 h-12 transition-transform duration-300 hover:translate-y-2"
            />
            <img
              src="https://skillicons.dev/icons?i=tailwind"
              alt="Tailwind CSS"
              className="w-12 h-12 transition-transform duration-300 hover:skew-x-12"
            />
            <img
              src="https://skillicons.dev/icons?i=html"
              alt="Tailwind CSS"
              className="w-12 h-12 transition-transform duration-300 hover:skew-x-12"
            />
          </div>

          <br />
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            {/* Botão de Download */}
            <button className="flex items-center justify-center w-fit px-6 py-3 gap-3 border-2 border-[#7CF03D] text-[#7CF03D] rounded-full text-lg font-extrabold transition-all duration-300 hover:bg-[#7CF03D] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7CF03D]">
              Download CV
              <i className="bx bx-download text-2xl"></i>
            </button>

            {/* Ícones Sociais */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/fagundes321"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 border-2 border-[#7CF03D] text-[#7CF03D] rounded-full text-2xl transition-all duration-300 hover:bg-[#7CF03D] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7CF03D]"
              >
                <i className="bx bxl-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/victor-fagundes-324070259/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 border-2 border-[#7CF03D] text-[#7CF03D] rounded-full text-2xl transition-all duration-300 hover:bg-[#7CF03D] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7CF03D]"
              >
                <i className="bx bxl-linkedin"></i>
              </a>

              <a
                href="mailto:victorfagundes123@gmail.com?subject=Contato%20via%20Portfólio&body=Olá%20Victor,%20gostaria%20de%20falar%20com%20você!"
                className="flex items-center justify-center w-12 h-12 border-2 border-[#7CF03D] text-[#7CF03D] rounded-full text-2xl transition-all duration-300 hover:bg-[#7CF03D] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7CF03D]"
              >
                <i className="bx bxl-gmail"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 animate__animated animate__slow animate__fadeInRight">
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden bg-[#181818] animate-rotate-border">
            <Image
              src="/images/hero-image.jpg"
              alt="Minha foto"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-45%] object-cover"
              width={500}
              height={500}
            />
            <div className="absolute inset-0 border-4 border-transparent bg-conic-gradient from-transparent via-transparent to-[#7cf03d] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
