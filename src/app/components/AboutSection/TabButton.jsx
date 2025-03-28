import React from "react";
import { motion } from "framer-motion";


const sharedTransition = { duration: 0.3, ease: "easeInOut" };

const variants = {
  default: { scaleX: 0, opacity: 0, transformOrigin: "center" },
  active: { scaleX: 1, opacity: 1, transformOrigin: "center" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-transparent bg-clip-text bg-gradient-to-br from-[#5CBF2A] via-[#7CF03D] to-[#2E6B1A] border-[#7CF03D]"
    : "text-[#ADB7BE] border-[#ADB7BE]";
  const lineColor = active ? "#7CF03D" : "#ADB7BE";

  return (
    <button onClick={selectTab} className="relative inline-block">
      <span
        className={`mr-3 font-semibold transition-colors duration-300 ${buttonClasses} hover:text-[#7CF03D] inline-block relative`}
      >
        {children}
        <motion.div
          initial="default"
          animate={active ? "active" : "default"}
          variants={variants}
          transition={sharedTransition}
          className="absolute left-0 bottom-0 h-0.5 w-full"
          style={{ backgroundColor: lineColor }}
        />
      </span>
    </button>
  );
};

export default TabButton;
