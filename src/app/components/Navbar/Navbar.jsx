"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import "animate.css";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Inicio",
    path: "#inicio",
  },
  {
    title: "Sobre",
    path: "#sobre",
  },
  {
    title: "Projetos",
    path: "#projetos",
  },
  {
    title: "Contato",
    path: "#contato",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#1f242d] bg-opacity-100 animate__animated animate__fadeInDown">
      <div className="flex container items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <img
            src="images/logo.png"
            className="h-[50px] w-auto mx-auto sm:h-[40px] md:h-[50px]"
            alt="Logo"
          />
        </Link>

        <div className="mobile-menu flex md:hidden items-center">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-[#7CF03D] hover:border-[#7CF03D] ml-auto relative"
            >
              <Bars3Icon
                className="h-5 w-5 transform transition-transform duration-500 ease-in-out"
                style={{
                  transform: navbarOpen ? "rotate(45deg)" : "rotate(0deg)",
                }}
              />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-[#f03d3d] hover:border-[#f03d3d] ml-auto relative"
            >
              <XMarkIcon
                className="h-5 w-5 transform transition-transform duration-500 ease-in-out"
                style={{
                  transform: navbarOpen ? "rotate(0deg)" : "rotate(-45deg)",
                }}
              />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {navbarOpen && (
        <MenuOverlay
          links={navLinks}
          className="animate__animated animate__fadeInDown"
        />
      )}
    </nav>
  );
};

export default Navbar;
