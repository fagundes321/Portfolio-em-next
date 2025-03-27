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
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-1 p-[20px] m-[-50px]">
      {techStack.map((tech) => (
        <div
          key={tech.name}
          className="flex items-center text-center gap-4 1.5rem rounded-xl border border-white/[0.14] bg-[#1f242d] px-6 py-3 text-sm min-w-[135px] sm:min-w-[140px] w-full"
        >
          {tech.icon && <img height="20" width="20" src={tech.icon} alt={tech.name} />}
          <span className="text-white text-center">{tech.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Skills;
