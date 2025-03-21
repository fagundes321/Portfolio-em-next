"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import AOS from "aos";
import "aos/dist/aos.css"; 

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
    <section className="md:grid gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16" id="projetos">
      {/* Wrapper para centralizar o título */}
      <div className="text-center" data-aos="zoom-in">
        <h2 className="text-4xl font-bold text-white mt-4">PROJETOS</h2>
      </div>
      <div className="text-white flex fle-row justify-center items-center gap-2 py-6" data-aos="zoom-in">
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
      <div className="grid md:grid-cols-3 gap-8 md:gap-12" >
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
