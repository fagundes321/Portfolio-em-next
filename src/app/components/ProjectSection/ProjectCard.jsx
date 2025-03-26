import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css"; 

const ProjectCard = ({ imgUrl, title, description, gitUrl, previwUrl }) => {
  return (
    <div data-aos="flip-left">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
        }}
      >
        {/* Overlay com animação suave e pointer-events */}
        <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] opacity-0 pointer-events-none group-hover:opacity-80 group-hover:pointer-events-auto transition-all duration-500 gap-5">
          {/* Link para GitHub */}
          <Link
            href={gitUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover:text-white" />
          </Link>

          {/* Link para a visualização do projeto */}
          <Link
            href={previwUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover:text-white" />
          </Link>
        </div>
      </div>

      {/* Descrição do Projeto */}
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
