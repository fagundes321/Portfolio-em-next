import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className = "flex flex-wrap items-center jutify-between mx-auto p-8">
        <Link href={"/"} className=" text-5xl text-white font-semibold">LOGO</Link>
        <div clasName = "menu">
            <ul>
                <li>Link href={"#about"} ab</li>
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
