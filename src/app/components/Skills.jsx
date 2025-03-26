const techStack = [
  { name: "HTML", icon: "https://cdn.simpleicons.org/html5" },
  { name: "CSS", icon: "https://cdn.simpleicons.org/css3" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "React", icon: "https://cdn.simpleicons.org/react" },
  { name: "Angular", icon: "https://cdn.simpleicons.org/angular/red" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
  { name: "Linux", icon: "https://cdn.simpleicons.org/linux" },
];

const Skills = () => {
  return (
    <div className="grid grid-cols-2 gap-2 mt-8">
      {techStack.map((tech) => (
        <div
          key={tech.name}
          className="flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-4 py-2 text-sm max-w-[120px] w-full"
        >
          {tech.icon && <img height="20" width="20" src={tech.icon} alt={tech.name} />}
          <span className="text-white text-center">{tech.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Skills;
