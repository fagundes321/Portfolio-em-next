import React, { useState } from "react";
import { Accordion, AccordionItem, Avatar } from "@heroui/react";
import Image from "next/image";
import "boxicons/css/boxicons.min.css";

const Recommendations = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleAccordion = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const recommendations = [
    {
      id: 1,
      name: "José Carlos Gonçalves da Costa",
      shortName: "José C.",
      role: "Desenvolvedor Outsystems e PHP",
      img: "/images/avatar/jose_carlos.jpg",
      linkedin:
        "https://www.linkedin.com/in/jos%C3%A9-carlos-gon%C3%A7alves-da-costa-33572a115/",
      description:
        "É um profissional muito dedicado, respeitoso, cordial, possui excelente capacidade de aprendizado rápido e tem uma proatividade que faz toda a diferença no ambiente de trabalho. Seu grande diferencial é sua constante busca pelo conhecimento e aprimoramento profissional.",
    },
    {
      id: 2,
      name: "Cleyson Lago de Sousa",
      shortName: "Cleyson L.",
      role: "Desenvolvedor Full Stack \n PHP | Laravel | Python | JavaScript | React | WordPress",
      img: "/images/avatar/cleyson_lago.jpg",
      linkedin: "https://www.linkedin.com/in/cleysonlago/",
      description:
        "Um jovem talentoso e dedicado que tem se destacado em nossa equipe. Apesar de ser relativamente novo no mundo da programação, ele demonstra uma capacidade impressionante de aprender rapidamente e aplicar conceitos de forma prática. Sua inteligência, aliada a um esforço constante, faz com que ele supere desafios com maestria e entregue resultados de alta qualidade.",
    },
    {
      id: 3,
      name: "Bruno Brizon Reis",
      shortName: "Bruno B.",
      role: "Desenvolvedor Full Stack",
      img: "/images/avatar/bruno_brizon.jpg",
      linkedin: "https://www.linkedin.com/in/bruno-brizon-reis-981a7a78/",
      description:
        "Foi um ótimo aluno, dedicado, inteligente e focado. Sua capacidade de compreensão das linguagens apresentadas e desenvolvimento de raciocínio lógico sempre me surpreenderam. Como profissional tenho certeza que ele se destacará independente do campo. Me orgulho por ter feito parte do caminho dele como profissional de TI e vendo o quanto cresceu me deixa feliz e ver que mais pessoas com amor pela profissão estão entrando no mercado de trabalho.",
    },
    {
      id: 4,
      name: " Giovani Melo",
      shortName: " Giovani M.",
      role: "Desenvolvedor Full Stack \n (PHP, Laravel, React, Docker, Oracle, MySQL)",
      img: "/images/avatar/giovani_melo.jpeg",
      linkedin: "https://www.linkedin.com/in/giovani-melo-9a9466293/",
      description:
        "Tive a oportunidade de trabalhar com Victor e posso dizer com segurança que sua curva de aprendizado e expertise em desenvolvimento de sistemas é excepcional. Destaco sua capacidade de analisar problemas, propor soluções eficientes e escrever código limpo e bem estruturado. Além do conhecimento técnico, Victor é um profissional extremamente colaborativo, sempre disposto em ajudar a equipe. Seu comprometimento e proatividade o torna um profissional talentoso e destacado.",
    },
  ];

  return (
    <div className="space-y-4 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 p-[20px] sm:m-[-10px] m-[-70px] mt-px ">
      <Accordion variant="splitted">
        {recommendations.map((person) => (
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
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-2"
                  >
                    <i className="bx bxl-linkedin-square text-xl sm:text-2xl text-gray-500"></i>
                  </a>
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
              <div className="flex-1">{person.description}</div>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Recommendations;
