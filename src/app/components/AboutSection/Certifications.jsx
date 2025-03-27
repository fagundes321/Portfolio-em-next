import React, { useState } from "react";
import { Accordion, AccordionItem } from "@heroui/react";
import Image from "next/image";
import "boxicons/css/boxicons.min.css";

const Certifications = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleAccordion = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const Certification = [
    {
      id: 1,
      name: "Curso de Desenvolvimento Web",
      shortName: "Dev Web",
      role: "Formação Full Stack",
      img: "/images/certifications/alura.jpeg",
      certification: "https://drive.google.com/file/d/1Dv8PIqxraZK_N6GNQk4_UnvxDUuxKlUB/view",
      description:
        "Curso intensivo focado em tecnologias web como HTML, CSS, JavaScript e Node.js. Ideal para quem deseja se tornar um desenvolvedor full stack completo.",
    },
    {
      id: 2,
      name: "Curso de Python para Data Science",
      shortName: "Python DS",
      role: "Especialização em Data Science",
      img: "/images/certifications/techers.jpeg",
      certification: "https://drive.google.com/file/d/1Dv8PIqxraZK_N6GNQk4_UnvxDUuxKlUB/view",
      description:
        "Curso focado em Python, bibliotecas como Pandas e Matplotlib, e a aplicação dessas ferramentas para análise de dados e machine learning.",
    },
    {
      id: 3,
      name: "Curso de React e Redux",
      shortName: "React & Redux",
      role: "Framework Frontend",
      img: "/images/certifications/senai.jpeg",
      certification: "https://drive.google.com/file/d/1Dv8PIqxraZK_N6GNQk4_UnvxDUuxKlUB/view",
      description:
        "Curso aprofundado sobre React, Hooks e Redux, com foco na criação de aplicações modernas e escaláveis para a web.",
    }
  ];

  return (
    <div className="space-y-4 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
      <Accordion variant="splitted">
        {Certification.map((person) => (
          <AccordionItem
            key={person.id}
            aria-label={person.name}
            isOpen={expanded === person.id}
            hideIndicator={true}
            startContent={
              <div className="flex items-center w-full">
                <Image
                  src={person.img}
                  alt={person.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
            }
            subtitle={
              <p className="text-[#ADB7BE] text-sm text-left whitespace-pre-line">
                {person.role}
              </p>
            }
            title={
              <div
                className="flex items-center justify-between w-full cursor-pointer"
                onClick={() => toggleAccordion(person.id)}
              >
                <div className="flex items-center">
                  <p className="text-left text-sm sm:text-base hidden md:block">
                    {person.name}
                  </p>
                  <p className="text-left text-sm sm:text-base md:hidden">
                    {person.shortName}
                  </p>
                </div>
                <div className="flex items-center">
                  <i
                    className={`bx bx-chevron-down text-xl text-gray-400 transition-transform duration-300 ease-in-out ${
                      expanded === person.id ? "rotate-180" : "rotate-0"
                    }`}
                  ></i>
                </div>
              </div>
            }
            className="border-b border-[#33353F]"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                {person.description}
                <div className="mt-2">
                  <a
                    href={person.certification}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7CF03D] flex items-center space-x-2"
                  >
                    <i className="bx bx-award text-xl text-[#7CF03D]"></i>
                    <span>Ver Certificado</span>
                  </a>
                </div>
              </div>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Certifications;
