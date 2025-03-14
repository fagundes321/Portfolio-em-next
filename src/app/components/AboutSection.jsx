import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white relative">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <Image src="/images/hero-image.jpg" width={500} height={500} />
        <br/>
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">&lt;Sobre/&gt;</h2>
          <p className="text-base lg:text-lg">
            Sou um desenvolvedor full stack apaixonado por criar aplicações web
            interativas e responsivas. Tenho experiência com JavaScript, React,
            Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS e Git. Sou
            um aprendiz rápido e estou sempre buscando expandir meus
            conhecimentos e habilidades. Trabalho bem em equipe e estou animado
            para colaborar com outras pessoas na criação de aplicações
            incríveis.
          </p>
          <div className="flex flex-row mt-8">
            <span className="mr-3 font-semibold hover:text-[#7CF03D] text-[#ADB7BE] border-b border-[#7CF03D]">
              Skills
            </span>
            <span>Education</span>
            <span>Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
