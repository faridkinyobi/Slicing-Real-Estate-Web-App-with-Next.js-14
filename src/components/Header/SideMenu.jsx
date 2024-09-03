import React from "react";
import { HiX } from "react-icons/hi";
import Menu from "./Menu";

export default function SideMenu({ SideMenuOpen, hendelOpenMenu }) {
  return (
    <>
      <div
        className={`bg-white fixed  top-0 h-full w-[260px] p-6 pt-16 z-30 transition-all duration-300 md:hidden block ${
          SideMenuOpen ? "right-[-100%] " :"right-0 "
        }`}
      >
        <button
          onClick={hendelOpenMenu}
          className=" absolute right-3 top-6 text-black"
        >
          <HiX size={20} />
        </button>
        <Menu/>
      </div>
      <div
        className={`bg-black/50 fixed h-full w-full md:w-0 inset-0  transition-all ${
          SideMenuOpen ? "opacity-0 -z-20 pointer-events-auto " : "opacity-100 z-20  pointer-events-none "
        }`}
      ></div>
    </>
  );
}
