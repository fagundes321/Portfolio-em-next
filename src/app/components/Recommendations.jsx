import React, { useState } from "react";
import { Accordion, AccordionItem, Avatar } from "@heroui/react"; // Certifique-se de usar @heroui/react
import "boxicons/css/boxicons.min.css";

const Recommendations = () => {
  const [expanded, setExpanded] = useState(null); // Track which accordion item is expanded

  const toggleAccordion = (index) => {
    setExpanded(expanded === index ? null : index); // Toggle the accordion state
  };

  const jose_carlos =
    "É um profissional muito dedicado, respeitoso, cordial, possui excelente capacidade de aprendizado rápido e tem uma proatividade que faz toda a diferença no ambiente de trabalho. Seu grande diferencial é sua constante busca pelo conhecimento e aprimoramento profissional.";

  const cleydson_lago =
    "Um jovem talentoso e dedicado que tem se destacado em nossa equipe. Apesar de ser relativamente novo no mundo da programação, ele demonstra uma capacidade impressionante de aprender rapidamente e aplicar conceitos de forma prática. Sua inteligência, aliada a um esforço constante, faz com que ele supere desafios com maestria e entregue resultados de alta qualidade.";

  const bruno_brison =
    "Foi um ótimo aluno, dedicado, inteligente e focado. Sua capacidade de compreensão das linguagens apresentadas e desenvolvimento de raciocínio lógico sempre me surpreenderam. Como profissional tenho certeza que ele se destacará independente do campo. Me orgulho por ter feito parte do caminho dele como profissional de TI e vendo o quanto cresceu me deixa feliz e ver que mais pessoas com amor pela profissão estão entrando no mercado de trabalho.";

  return (
    <div className="space-y-4">
      <Accordion variant="splitted">
        <AccordionItem
          key="1"
          aria-label="José Carlos Gonçalves"
          startContent={
            <div className="flex items-center w-full">
              <Avatar radius="full" src="images/avatar/jose_carlos.jpg" />
            </div>
          }
          subtitle={
            <p className="text-[#ADB7BE] text-sm text-left">
              Desenvolvedor Outsystems e PHP
            </p>
          }
          title={
            <div className="flex items-center justify-between w-full">
              <p className="text-left text-sm sm:text-base hidden md:block">José Carlos Gonçalves da Costa</p>
              <p className="text-left text-sm sm:text-base md:hidden">José C.</p> {/* Simplificado para celular */}
              <a
                href="https://www.linkedin.com/in/jos%C3%A9-carlos-gon%C3%A7alves-da-costa-33572a115/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2"
              >
                <i className="bx bxl-linkedin-square text-xl sm:text-2xl text-gray-500"></i>
              </a>
            </div>
          }
          className="border-b border-[#33353F]"
          onClick={() => toggleAccordion(1)} // Toggle item 1
        >
          <div className="flex items-center justify-between">
            <span
              aria-hidden="true"
              className={`transition-transform duration-300 ease-in-out ${
                expanded === 1 ? "-rotate-90" : "rotate-0"
              } text-gray-400`}
            ></span>
          </div>
          {jose_carlos}
        </AccordionItem>

        <AccordionItem
          key="2"
          aria-label="Cleyson Lago"
          startContent={
            <div className="flex items-center w-full">
              <Avatar radius="full" src="images/avatar/cleyson_lago.jpg" />
            </div>
          }
          subtitle={
            <p className="text-[#ADB7BE] text-sm text-left">
              Desenvolvedor Full Stack <br /> PHP | Laravel | Python |
              JavaScript | React | WordPress
            </p>
          }
          title={
            <div className="flex items-center justify-between w-full">
              <p className="text-left text-sm sm:text-base hidden md:block">Cleyson Lago de Sousa</p>
              <p className="text-left text-sm sm:text-base md:hidden">Cleyson L.</p> {/* Simplificado para celular */}
              <a
                href="https://www.linkedin.com/in/cleysonlago/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2"
              >
                <i className="bx bxl-linkedin-square text-xl sm:text-2xl text-gray-500"></i>
              </a>
            </div>
          }
          className="border-b border-[#33353F]"
          onClick={() => toggleAccordion(2)} // Toggle item 2
        >
          <div className="flex items-center justify-between">
            <span
              aria-hidden="true"
              className={`transition-transform duration-300 ease-in-out ${
                expanded === 2 ? "-rotate-90" : "rotate-0"
              } text-gray-400`}
            ></span>
          </div>
          {cleydson_lago}
        </AccordionItem>

        <AccordionItem
          key="3"
          aria-label="Bruno Brizon"
          startContent={
            <div className="flex items-center w-full">
              <Avatar radius="full" src="images/avatar/bruno_brizon.jpg" />
            </div>
          }
          subtitle={
            <div className="flex justify-between items-center w-full">
              <p className="text-[#ADB7BE] text-sm text-left">
                Desenvolvedor Full Stack
              </p>
            </div>
          }
          title={
            <div className="flex items-center justify-between w-full">
              <p className="text-left text-sm sm:text-base hidden md:block">Bruno Brizon Reis</p>
              <p className="text-left text-sm sm:text-base md:hidden">Bruno B.</p> {/* Simplificado para celular */}
              <a
                href="https://www.linkedin.com/in/bruno-brizon-reis-981a7a78/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2"
              >
                <i className="bx bxl-linkedin-square text-xl sm:text-2xl text-gray-500"></i>
              </a>
            </div>
          }
          className="border-b border-[#33353F]"
          onClick={() => toggleAccordion(3)} // Toggle item 3
        >
          <div className="flex items-center justify-between">
            <span
              aria-hidden="true"
              className={`transition-transform duration-300 ease-in-out ${
                expanded === 3 ? "-rotate-90" : "rotate-0"
              } text-gray-400`}
            ></span>
          </div>
          {bruno_brison}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Recommendations;
