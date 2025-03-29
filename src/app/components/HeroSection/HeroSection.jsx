"use client";
import { Tooltip } from "@heroui/tooltip";
import "animate.css";
import "boxicons/css/boxicons.min.css";
import { TypeAnimation } from "react-type-animation";
import Photo from "./Photo";

const HeroSection = () => {
  return (
    <section id="inicio" className="w-full max-w-screen-xl mx-auto py-8 sm:py-35 px-4">
      <div className="grid items-center grid-cols-1 sm:grid-cols-12">
        {/* Texto e animações */}
        <div className="col-span-12 sm:col-span-7 text-center sm:text-left order-2 xl:order-none animate__animated animate__slow animate__fadeInLeft">
        <h1 className="text-white mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold whitespace-nowrap">
  Seja Bem-Vindo!
</h1>
<h1 className="text-white mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold whitespace-nowrap">
  Sou Victor Fagundes
</h1>

          <h1 className="text-[#7cf03d] mb-4 text-3xl sm:text-4xl lg:text-5xl gap-2 font-bold whitespace-nowrap flex flex-col sm:flex-row sm:items-center">
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
                display: "inline-block",
                color: "white",
              }}
              className="text-3xl lg:text-4xl"
              repeat={Infinity}
            />
          </h1>

          <br />
          {/* Lista de habilidades */}
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
              "nodejs",
            ].map((icon) => (
              <Tooltip
                key={icon}
                content={
                  <div className="relative">
                    {icon.toUpperCase()}
                    <div
                      className="absolute left-1/2 transform -translate-x-1/2 -translate-y-[-5px] top-full w-0 h-0 
                                  border-l-4 border-l-transparent border-r-4 border-r-transparent 
                                  border-t-4 border-t-[#7CF03D]"
                    ></div>
                  </div>
                }
                showArrow={true}
                placement="top"
                className="bg-[#ffffff10] backdrop-blur-md border border-[#7CF03D] text-white 
                         text-sm font-semibold px-3 py-1 rounded-lg shadow-lg 
                         transition-opacity duration-300"
              >
                <img
                  src={`https://skillicons.dev/icons?i=${icon}`}
                  alt={icon}
                  className="w-12 h-12 transition-transform duration-300 hover:scale-110"
                />
              </Tooltip>
            ))}
          </div>
          <br />
          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-4 items-center relative">
            <button className="cursor-pointer flex items-center justify-center w-full sm:w-fit px-6 py-3 gap-3 border-2 border-[#7CF03D] text-[#7CF03D] rounded-full text-lg font-extrabold transition-all duration-300 hover:bg-[#7CF03D] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7CF03D]">
              Download CV
              <i className="bx bx-download text-2xl"></i>
            </button>
            <div className="flex items-center gap-4">
              {[
                {
                  href: "https://github.com/fagundes321",
                  icon: "github",
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/victor-fagundes-324070259/",
                  icon: "linkedin",
                  label: "LinkedIn",
                },
                {
                  href: "mailto:victorfagundes123@gmail.com?subject=Contato%20via%20Portf%C3%B3lio&body=Ol%C3%A1%20Victor,%20gostaria%20de%20falar%20com%20voc%C3%AA!",
                  icon: "gmail",
                },
              ].map(({ href, icon, label }) => (
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

        <div className="order-1 xl:order-none mb-6 xl:mb-0 col-span-12 sm:col-span-5 place-self-center mt-6 animate__animated animate__slow animate__fadeInRight">
          <Photo />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
