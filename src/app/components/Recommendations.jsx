import React, { useState } from "react";
import { Accordion, AccordionItem, Avatar } from "@heroui/react";
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
      img: "images/avatar/jose_carlos.jpg",
      linkedin: "https://www.linkedin.com/in/jos%C3%A9-carlos-gon%C3%A7alves-da-costa-33572a115/",
      description:
        "É um profissional muito dedicado, respeitoso, cordial, possui excelente capacidade de aprendizado rápido e tem uma proatividade que faz toda a diferença no ambiente de trabalho. Seu grande diferencial é sua constante busca pelo conhecimento e aprimoramento profissional.",
    },
    {
      id: 2,
      name: "Cleyson Lago de Sousa",
      shortName: "Cleyson L.",
      role: "Desenvolvedor Full Stack \n PHP | Laravel | Python | JavaScript | React | WordPress",
      img: "images/avatar/cleyson_lago.jpg",
      linkedin: "https://www.linkedin.com/in/cleysonlago/",
      description:
        "Um jovem talentoso e dedicado que tem se destacado em nossa equipe. Apesar de ser relativamente novo no mundo da programação, ele demonstra uma capacidade impressionante de aprender rapidamente e aplicar conceitos de forma prática. Sua inteligência, aliada a um esforço constante, faz com que ele supere desafios com maestria e entregue resultados de alta qualidade.",
    },
    {
      id: 3,
      name: "Bruno Brizon Reis",
      shortName: "Bruno B.",
      role: "Desenvolvedor Full Stack",
      img: "images/avatar/bruno_brizon.jpg",
      linkedin: "https://www.linkedin.com/in/bruno-brizon-reis-981a7a78/",
      description:
        "Foi um ótimo aluno, dedicado, inteligente e focado. Sua capacidade de compreensão das linguagens apresentadas e desenvolvimento de raciocínio lógico sempre me surpreenderam. Como profissional tenho certeza que ele se destacará independente do campo. Me orgulho por ter feito parte do caminho dele como profissional de TI e vendo o quanto cresceu me deixa feliz e ver que mais pessoas com amor pela profissão estão entrando no mercado de trabalho.",
    },
  ];

  return (
    <div className="space-y-4">
      <Accordion variant="splitted">
        {recommendations.map((person) => (
          <AccordionItem
            key={person.id}
            aria-label={person.name}
            startContent={
              <div className="flex items-center w-full">
                <Avatar radius="full" src={person.img} />
              </div>
            }
            subtitle={<p className="text-[#ADB7BE] text-sm text-left whitespace-pre-line">{person.role}</p>}
            title={
              <div className="flex items-center w-full">
                <div className="flex-1 text-left">
                  <p className="text-sm sm:text-base hidden md:block">
                    {person.name}
                  </p>
                  <p className="text-sm sm:text-base md:hidden">
                    {person.shortName}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bxl-linkedin-square text-xl sm:text-2xl text-gray-500"></i>
                  </a>
                  <span
                    aria-hidden="true"
                    className={`text-gray-400 transition-transform duration-300 ${
                      expanded === person.id ? "rotate-90" : "rotate-0"
                    }`}
                  >
                    <svg 
                      aria-hidden="true"
                      fill="none"
                      focusable="false"
                      height="1em"
                      role="presentation"
                      viewBox="0 0 24 24"
                      width="1em"
                    >
                      
                    </svg>
                  </span>
                </div>
              </div>
            }
            className="border-b border-[#33353F]"
            onClick={() => toggleAccordion(person.id)}
          >
            <div className="text-left">
              {person.description}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Recommendations;