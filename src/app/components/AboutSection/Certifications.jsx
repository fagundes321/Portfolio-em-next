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
      name: "Análise e Desenvolvimento de Sistemas",
      shortName: "ADS",
      role: "Centro Universitário UDF",
      img: "/images/certifications/udf.jpeg",
      certification:
        "https://drive.google.com/file/d/1Dv8PIqxraZK_N6GNQk4_UnvxDUuxKlUB/view",
      description:
        "Curso superior focado no desenvolvimento de software, arquitetura de sistemas e tecnologias emergentes. Inclui fundamentos de programação, banco de dados, desenvolvimento web e mobile, além de segurança da informação e metodologias ágeis.",
      completed: false, // Adicionando status de conclusão
      status: "Cursando", // Status do curso
      startDate: "07/07/2023", // Data de início
      endDate: "", // Data de término
      hours: "670 hrs",
    },
    {
      id: 2,
      name: "Programador Full Stack",
      shortName: "Python DS",
      role: "Universidade Cruzeiro do Sul",
      img: "/images/certifications/techers.jpeg",
      certification:
        "https://drive.google.com/file/d/1Dv8PIqxraZK_N6GNQk4_UnvxDUuxKlUB/view",
      description:
        "Curso focado em Python, bibliotecas como Pandas e Matplotlib, e a aplicação dessas ferramentas para análise de dados e machine learning.",
      completed: true, // Este curso está concluído
      status: "Concluído", // Status do curso
      startDate: "2022-06-01", // Data de início
      endDate: "2022-09-01", // Data de término
    },
    {
      id: 3,
      name: "Curso de React e Redux",
      shortName: "React & Redux",
      role: "Framework Frontend",
      img: "/images/certifications/senai.jpeg",
      certification:
        "https://drive.google.com/file/d/1Dv8PIqxraZK_N6GNQk4_UnvxDUuxKlUB/view",
      description:
        "Curso aprofundado sobre React, Hooks e Redux, com foco na criação de aplicações modernas e escaláveis para a web.",
      completed: true, // Este curso também está concluído
      status: "Concluído", // Status do curso
      startDate: "2022-03-01", // Data de início
      endDate: "2022-06-01", // Data de término
    },
    {
      id: 4,
      name: "Curso de React e Redux",
      shortName: "React & Redux",
      role: "Framework Frontend",
      img: "/images/certifications/senai.jpeg",
      certification:
        "https://drive.google.com/file/d/1Dv8PIqxraZK_N6GNQk4_UnvxDUuxKlUB/view",
      description:
        "Curso aprofundado sobre React, Hooks e Redux, com foco na criação de aplicações modernas e escaláveis para a web.",
      completed: false, // Não concluído
      status: "Cursando", // Status do curso
      startDate: "2024-01-01", // Data de início
      endDate: "2025-01-01", // Data de término
    },
    {
      id: 5,
      name: "Curso de React e Redux",
      shortName: "React & Redux",
      role: "Framework Frontend",
      img: "/images/certifications/senai.jpeg",
      certification:
        "https://drive.google.com/file/d/1Dv8PIqxraZK_N6GNQk4_UnvxDUuxKlUB/view",
      description:
        "Curso aprofundado sobre React, Hooks e Redux, com foco na criação de aplicações modernas e escaláveis para a web.",
      completed: true, // Concluído
      status: "Concluído", // Status do curso
      startDate: "2023-01-01", // Data de início
      endDate: "2023-12-01", // Data de término
      hours: "",

    },
  ];

  return (
    <div className="space-y-4 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 p-[20px] sm:m-[-10px] m-[-70px] mt-px">
      <Accordion variant="splitted">
        {Certification.map((person) => (
          <AccordionItem
            key={person.id}
            aria-label={person.name}
            isOpen={expanded === person.id}
            hideIndicator={true}
            startContent={
              <div className="flex items-center w-full cursor-pointer ">
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
              <p className="text-[#ADB7BE] text-sm text-left whitespace-pre-line cursor-pointer">
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
                  <p className="text-sm text-gray-500">
                    Status:{" "}
                    <span className="font-semibold">{person.status}</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Início:{" "}
                    <span className="font-semibold">{person.startDate}</span>
                  </p>
                  {person.completed && (
                    <p className="text-sm text-gray-500">
                      Término:{" "}
                      <span className="font-semibold">{person.endDate}</span>
                    </p>
                  )}
                  {person.completed && (
                    <p className="text-sm text-gray-500">
                      Horas:{" "}
                      <span className="font-semibold">{person.hours}</span>
                    </p>
                  )}
                </div>
                <div className="mt-2">
                  <a
                    href={person.certification}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-[#7CF03D] flex items-center space-x-2 ${
                      person.completed ? "text-[#7CF03D]" : "text-gray-500"
                    }`}
                    style={{
                      pointerEvents: person.completed ? "auto" : "none",
                    }}
                  >
                    <i
                      className={`bx bx-award text-xl ${
                        person.completed ? "text-[#7CF03D]" : "text-gray-500"
                      }`}
                    ></i>
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
