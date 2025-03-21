import React from "react";
import { motion } from "framer-motion";

// Definindo as variantes de animação
const variants = {
  default: { 
    width: "0%", 
    scaleX: 0, 
    transformOrigin: "center",  // A animação começa do meio
  },
  active: { 
    width: "100%", 
    scaleX: 1, 
    transformOrigin: "center",  // A animação vai até o final
  },
};

const TabButton = ({ active, selectTab, children }) => {
  // Definindo as classes de estilo do botão com base no estado ativo
  const buttonClasses = active
    ? "text-white border-[#7CF03D]"
    : "text-[#ADB7BE]";

  // Cor da linha de animação, depende se o botão está ativo
  const lineColor = active ? "#7CF03D" : "#ADB7BE"; // verde ou cinza

  return (
    <button
      onClick={selectTab}
      className="relative"
      style={{ display: 'inline-block' }}
    >
      {/* Texto do botão */}
      <p className={`mr-3 font-semibold hover:text-[#7CF03D] border-b ${buttonClasses}`}>
        {children}
      </p>
      {/* Motion div para animação de linha abaixo do botão */}
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        transition={{ duration: 0.3 }} // Tempo da animação
        className="h-0.5 mt-1 absolute bottom-0 left-0"
        style={{ backgroundColor: lineColor }} // Aplica a cor da linha condicionalmente
      ></motion.div>
    </button>
  );
};

export default TabButton;
