import React from "react";
import Image from "next/image";

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
            <h1 className="text-[#7cf03d] mb-4 text-3xl mb-6 lg:text-4xl font-bold">
              Desenvolvedor Front-end
            </h1>
          </h1>

          <img
            src="https://skillicons.dev/icons?i=next,react,angular,tailwind,js,ts,docker,linux"
            alt="Tecnologias"
          />

          <div>
            <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
              Hire me
            </button>
            <button className="px-6 py-3 rounded-full bg tranparent hover:bg-slate-800 border border-white mt-3">
              Download CV
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
