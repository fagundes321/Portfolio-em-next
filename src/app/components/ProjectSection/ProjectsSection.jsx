"use client";
import "aos/dist/aos.css";
import { useState } from "react";
import ProjectTag from "./ProjectTag";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Testando a parte de projetos",
    description: "Descrição do projeto 1",
    image: "/images/projects/1.jpg",
    tag: ["all", "web"],
    gitUrl: "/",
    previwUrl: "/",
  },
  {
    id: 2,
    title: "Testando a parte de projetos",
    description: "Descrição do projeto 2",
    image: "/images/projects/1.jpg",
    tag: ["all", "mobile"],
    gitUrl: "/",
    previwUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  // Corrected the filter logic by ensuring the return value is provided
  const filteredProjects = projectsData.filter((project) => {
    return project.tag.includes(tag.toLowerCase()) || tag === "Todos";
  });

  return (
    <section
      className="md:grid gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16"
      id="projetos"
    >
      {/* Wrapper para centralizar o título */}
      <h1 className="text-[#7cf03d] mb-4 text-3xl text-center sm:text-4xl lg:text-5xl font-bold  sm:flex-row sm:items-center" data-aos="zoom-in">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#5CBF2A] via-[#7CF03D] to-[#2E6B1A]">
            PROJETOS
            </span>
          </h1>
      <div
        className="text-white flex fle-row justify-center items-center gap-2 py-6"
        data-aos="zoom-in"
      >
        <ProjectTag
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previwUrl={project.previwUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
