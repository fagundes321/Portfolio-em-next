import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border-t z-10 border-t-[#33353F] text-white w-full flex justify-center">
      <div className="w-full max-w-3xl p-8 flex flex-col items-center justify-center text-center">
    
         <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <img
          src="images/logo.png"
          className="h-[50px] w-auto sm:h-[40px] md:h-[50px]"
          alt="Logo"
        />
        </Link>
        <p className="mt-4 text-slate-500">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
