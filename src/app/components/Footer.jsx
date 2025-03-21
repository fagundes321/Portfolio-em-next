import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

const Footer = () => {
  return (
    <footer className="footer border-t z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white" >
      <div className="container p-8 flex flex-col sm:flex-row justify-between items-center">
        <img
          src="images/logo.png"
          className="h-[50px] w-auto sm:h-[40px] md:h-[50px]"
          alt="Logo"
        />
        <p className="mt-4 sm:mt-0 text-center sm:text-left text-slate-500">
          Todos os Direitos Reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
