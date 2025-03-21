"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 columns-2 space-y-1">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Next.js</li>
        <li>React</li>
        <li>Angular</li>
        <li>Tailwind</li>
        <li>Docker</li>
        <li>Linux</li>
      </ul>
    ),
  },
  {
    title: "Educação",
    id: "educacao",
    content: (
      <ul className="list-disc pl-2">
        <li>Cursando Análise e Desenvolvimento de Sistemas</li>
        <li>Curso</li>
      </ul>
    ),
  },
  {
    title: "Certificações",
    id: "certificacoes",
    content: (
      <ul className="list-disc pl-2">
        <li>Certificado Alura React</li>
        <li>Certificado Senai</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        {/* Imagem do Perfil */}
        <div className="flex justify-center mb-4 md:mb-0">
          <Image
            src="/images/hero-image3.png"
            alt="my photo"
            width={500}
            height={500}
            className="rounded-full"
          />
        </div>

        {/* Texto */}
        <div className="text-left flex flex-col h-full">
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

          {/* Botões de Aba */}
          <div className="flex flex-row justify-start mt-8 space-x-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              <span className="text-center w-full block">Skills</span>
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("educacao")}
              active={tab === "educacao"}
            >
              <span className="text-center w-full block">Educação</span>
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certificacoes")}
              active={tab === "certificacoes"}
            >
              <span className="text-center w-full block">Certificações</span>
            </TabButton>
          </div>

          {/* Conteúdo da Aba Selecionada */}
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
