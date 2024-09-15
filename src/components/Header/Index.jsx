"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { HiOutlineMenu } from "react-icons/hi";
import SideMenu from "./SideMenu";
import Menu from "./Menu";
import Link from "next/link";
export default function Header({theme="light"}) {
  const [SideMenuOpen, setSideMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScrolled = () => {
      window.scrollY > 100 ? setScrolled(true) : theme==="dark"&&setScrolled(false);
    };
    window.addEventListener("scroll", handleScrolled);
    return () => {
      window.addEventListener("scroll", handleScrolled);
    };
  }, []);

  const hendelOpenMenu = () => {
    setSideMenuOpen(!SideMenuOpen);
  };
  useEffect(()=>{
    if(theme==="light"){
      setScrolled(true)
    }
  },[theme])
  return (
    <>
      <div
        className={`py-5 z-10 md:py-7 fixed top-0 left-0 w-full transition-all ${
          scrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="custom-container">
          <div className="flex items-center justify-between ">
            <Link href={'/'}>
              {scrolled ? (
                <Image
                  src="/asset/logo.svg"
                  width={155}
                  height={24}
                  alt="logo-white"
                />
              ) : (
                <Image
                  src="/asset/logo-white.svg"
                  width={155}
                  height={24}
                  alt="logo-white"
                />
              )}
            </Link>
            <button onClick={hendelOpenMenu}>
              <HiOutlineMenu
                size={25}
                className={`${
                  scrolled ? "text-black" : "text-white"
                } md:hidden`}
              />
            </button>
            <div className="md:block hidden">
              <Menu scrolled={scrolled}/>
            </div>
          </div>
        </div>
      </div>
      <SideMenu SideMenuOpen={SideMenuOpen} hendelOpenMenu={hendelOpenMenu} />
    </>
  );
}
