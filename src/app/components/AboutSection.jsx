"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabBotton from "./TabButton";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white relative">
      <br />
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <Image
          src="/images/hero-image3.png"
          alt="my photo"
          width={500}
          height={500}
        />
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
            <TabBotton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabBotton>
            <TabBotton
              selectTab={() => handleTabChange("Educação")}
              active={tab === "Educação"}
            >
              {" "}
              Educação{" "}
            </TabBotton>
            <TabBotton
              selectTab={() => handleTabChange("Certificações")}
              active={tab === "Certificações"}
            >
              {" "}
              Certificações{" "}
            </TabBotton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
