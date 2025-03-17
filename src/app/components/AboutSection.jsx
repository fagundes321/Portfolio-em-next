"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4 columns-2 space-y-1">
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
    <section className="text-white mt-20">
      <div className="flex flex-col items-center text-center md:text-left md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16">
        {/* Título */}
        <h2 className="text-4xl font-bold text-white order-1">&lt;Sobre/&gt;</h2>

        {/* Imagem */}
        <div className="order-2 md:order-1 flex justify-center">
          <Image
            src="/images/hero-image3.png"
            alt="my photo"
            width={500}
            height={500}
            className="rounded-full"
          />
        </div>

        {/* Texto */}
        <div className="order-3 md:order-2 text-left flex flex-col h-full">
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
          <div className="flex flex-row justify-center md:justify-start mt-8 space-x-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("educacao")}
              active={tab === "educacao"}
            >
              Educação
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certificacoes")}
              active={tab === "certificacoes"}
            >
              Certificações
            </TabButton>
          </div>

          {/* Conteúdo da Aba Selecionada */}
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
