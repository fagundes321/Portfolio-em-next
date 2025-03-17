import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Testando a parte de projetos",
    description: "Descrição do projeto 1",
    image: "/images/projects/1.jpg",
    tag: ["all", "web"],
  },
];

const ProjectsSection = () => {
  return (
    <section className="md:grid gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
      {/* Wrapper para centralizar o título */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mt-4">PROJETOS</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
