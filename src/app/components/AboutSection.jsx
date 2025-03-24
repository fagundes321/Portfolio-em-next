"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import TabButton from "./TabButton";
import AOS from "aos";
import "aos/dist/aos.css";
import Recommendations from "./Recommendations";
import { useSwipeable } from "react-swipeable";

const sharedTransition = { duration: 0.3, ease: "easeInOut" };

const sobre_mim =
  "   Sou um desenvolvedor full stack apaixonado por criar aplicações web interativas e responsivas. Tenho experiência com JavaScript, React,Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS e Git. Sou um aprendiz rápido e estou sempre buscando expandir meus conhecimentos e habilidades. Trabalho bem em equipe e estou animado para colaborar com outras pessoas na criação de aplicações incríveis.";

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
  {
    title: "Recomendações",
    id: "recomendacoes",
    content: <Recommendations />,
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  useEffect(() => {
    AOS.init();
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      const currentIndex = TAB_DATA.findIndex((t) => t.id === tab);
      const nextIndex = (currentIndex + 1) % TAB_DATA.length;
      setTab(TAB_DATA[nextIndex].id);
    },
    onSwipedRight: () => {
      const currentIndex = TAB_DATA.findIndex((t) => t.id === tab);
      const prevIndex = (currentIndex - 1 + TAB_DATA.length) % TAB_DATA.length;
      setTab(TAB_DATA[prevIndex].id);
    },
  });

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section
      className="text-white md:grid gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16"
      id="sobre"
    >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <div
          className="flex justify-center mb-4 md:mb-0"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Image
            src="/images/hero-image3.png"
            alt="my photo"
            width={500}
            height={500}
            className="rounded-full"
          />
        </div>

        <div
          className="text-left flex flex-col h-full"
          data-aos="fade-up"
          data-aos-duration="1000"
          {...handlers}
        >
          <h2 className="text-4xl font-bold text-white mb-4">&lt;Sobre/&gt;</h2>
          <p className="text-base lg:text-lg">{sobre_mim}</p>
          <div
            className="flex flex-wrap justify-start mt-8 sm:grid sm:grid-cols-2 sm:gap-4 lg:flex lg:flex-row lg:space-x-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {TAB_DATA.map(({ id, title }) => (
              <TabButton
                key={id}
                selectTab={() => handleTabChange(id)}
                active={tab === id}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <span className="text-center w-full block">{title}</span>
              </TabButton>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={sharedTransition}
              className="mt-8"
            >
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
