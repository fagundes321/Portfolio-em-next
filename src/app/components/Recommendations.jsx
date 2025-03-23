import React from "react";
import { Accordion, AccordionItem, Avatar } from "@heroui/react"; // Certifique-se de usar @heroui/react

const Recommendations = () => {
  const jose_carlos =
    "É um profissional muito dedicado, respeitoso, cordial, possui excelente capacidade de aprendizado rápido e tem uma proatividade que faz toda a diferença no ambiente de trabalho.Seu grande diferencial é sua constante busca pelo conhecimento e aprimoramento profissional.";

    const cleydson_lago =
    "Um jovem talentoso e dedicado que tem se destacado em nossa equipe. Apesar de ser relativamente novo no mundo da programação, ele demonstra uma capacidade impressionante de aprender rapidamente e aplicar conceitos de forma prática. Sua inteligência, aliada a um esforço constante, faz com que ele supere desafios com maestria e entregue resultados de alta qualidade..";

    const bruno_brison =
    "Foi um ótimo aluno, dedicado, inteligente e focado. Sua capacidade de compreensão das linguagens apresentadas e desenvolvimento de raciocínio lógico sempre me surpreenderam. Como profissional tenho certeza que ele se destacará independente do campo. Me orgulho por ter feito parte do caminho dele como profissional de TI e vendo o quanto cresceu me deixa feliz e ver que mais pessoas com amor pela profissão estão entrando no mercado de trabalho.";

  return (
    <Accordion selectionMode="multiple">
    <AccordionItem
      key="1"
      aria-label="Chung Miller"
      startContent={
        <Avatar
          isBordered
          color="primary"
          radius="lg"
          src="images/avatar/jose_carlos.jpg"
        />
      }
      subtitle={
        <p className="text-[#ADB7BE] text-[15px] text-left">
          Desenvolvedor Outsystems e PHP
        </p>
      }
      title={
        <p className="text-left">
          José Carlos Gonçalves da Costa
        </p>
      }
      className="border-b-2 border-[#33353F]"  // Cor da linha entre os itens
    >
      {jose_carlos}
    </AccordionItem>
  
    <AccordionItem
      key="2"
      aria-label="Janelle Lenard"
      startContent={
        <Avatar
          isBordered
          color="success"
          radius="lg"
          src="images/avatar/cleyson_lago.jpg"
        />
      }
      subtitle={
        <p className="text-[#ADB7BE] text-[15px] text-left">
          Desenvolvedor Full Stack <br /> PHP | Laravel | Python | JavaScript | React | WordPress
        </p>
      }
      title={
        <p className="text-left">
          Cleyson Lago de Sousa
        </p>
      }
      className="border-b-1 border-[#33353F]"  // Cor da linha entre os itens
    >
      {cleydson_lago}
    </AccordionItem>
  
    <AccordionItem
      key="3"
      aria-label="Zoey Lang"
      startContent={
        <Avatar
          isBordered
          color="warning"
          radius="lg"
          src="images/avatar/bruno_brizon.jpg"
        />
      }
      subtitle={
        <p className="text-[#ADB7BE] text-[15px] text-left">
          Desenvolvedor full stack
        </p>
      }
      title={
        <p className="text-left">
          Bruno Brizon Reis
        </p>
      }
      className="border-b-1 border-[#33353F]"  // Cor da linha entre os itens
    >
      {bruno_brison}
    </AccordionItem>
  </Accordion>
  
  );
};

export default Recommendations;
