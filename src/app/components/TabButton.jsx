import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-[#7CF03D]"
    : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-[#7CF03D] border-b ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
