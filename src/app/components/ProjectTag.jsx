const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-[#7CF03D] border-[#7CF03D] hover:text-[#7CF03D]"
    : "text-[#ADB7BE] border-slate-600 hover:border-[#7CF03D] hover:text-white focus:ring-2 focus:ring-[#7CF03D]";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none`}
      onClick={() => onClick(name)}
      aria-pressed={isSelected} // Indica se o botão está selecionado
    >
      {name}
    </button>
  );
};

export default ProjectTag;
