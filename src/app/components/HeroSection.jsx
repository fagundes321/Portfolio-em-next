"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import "boxicons/css/boxicons.min.css";
import "animate.css";
import { motion } from "framer-motion";
import Photo from "./Photo";

const HeroSection = () => {
  return (
    <section>
      <div className="grid items-center grid-cols-1 sm:grid-cols-12 h-[85vh]">
        <div className="col-span-7  text-center sm:text-left order-2 xl:order-none animate__animated animate__slow animate__fadeInLeft">
          <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold">
            Seja Bem-Vindo!
          </h1>
          <h1 className="text-white mb-4 text-2xl lg:text-4xl font-bold">
            Sou Victor Fagundes
          </h1>
          <h1 className="text-[#7cf03d] mb-4 text-3xl lg:text-4xl font-bold whitespace-nowrap max-w-full max-h-full overflow-hidden">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#5CBF2A] via-[#7CF03D] to-[#2E6B1A]">
              Desenvolvedor{" "}
            </span>
            <div className="lg:hidden mt-2">
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
            </div>
            <div className="hidden lg:inline mt-2">
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
            </div>
          </h1>
          <br />
          <div className="flex flex-wrap justify-center sm:justify-start gap-4">
            {[
              "next",
              "react",
              "angular",
              "tailwind",
              "js",
              "ts",
              "html",
              "css",
              "docker",
              "linux",
            ].map((icon) => (
              <img
                key={icon}
                src={`https://skillicons.dev/icons?i=${icon}`}
                alt={icon}
                className="w-12 h-12 transition-transform duration-300 hover:scale-125"
              />
            ))}
          </div>

          <br />
          <div className="flex flex-col sm:flex-row gap-4 items-center relative">
            {/* Botão de Download */}
            <button className="flex items-center justify-center w-fit px-6 py-3 gap-3 border-2 border-[#7CF03D] text-[#7CF03D] rounded-full text-lg font-extrabold transition-all duration-300 hover:bg-[#7CF03D] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7CF03D]">
              Download CV
              <i className="bx bx-download text-2xl"></i>
            </button>

            {/* Ícones Sociais */}
            <div className=" flex items-center gap-4">
              {[
                { href: "https://github.com/fagundes321", icon: "github" },
                {
                  href: "https://www.linkedin.com/in/victor-fagundes-324070259/",
                  icon: "linkedin",
                },
                {
                  href: "mailto:victorfagundes123@gmail.com?subject=Contato%20via%20Portfólio&body=Olá%20Victor,%20gostaria%20de%20falar%20com%20você!",
                  icon: "gmail",
                },
              ].map(({ href, icon }) => (
                <a
                  key={icon}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 border-2 border-[#7CF03D] text-[#7CF03D] rounded-full text-2xl transition-all duration-300 hover:bg-[#7CF03D] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7CF03D]"
                >
                  <i className={`bx bxl-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* className="col-span-5 place-self-center mt-4 lg:mt-0 animate__animated animate__slow animate__fadeInRight" */}
        {/* Seção da imagem */}
        <div className="order-1 xl:order-none mb-8 xl:mb-0 col-span-5 place-self-center mt-6 animate__animated animate__slow animate__fadeInRight">
          <Photo />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
