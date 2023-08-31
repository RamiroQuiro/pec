"use client";
import Image from "next/image";
import React, { useState } from "react";
import SVGLogin, { SVGMenu } from "./SVGComponent";
import logo from "../../../../public/logo.png";
import LinkLogin from "./LinkLogin";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <nav className="h w-screen py-2 fixed top-0 left-0  flex flex-col md:flex-row items-center bg-primary-500 justify-between md:px-12 px-6 text-primary-200 z-40">
      <div className="md:w-1/3 flex items-center justify-between font-light  md:gap-0 gap-2">
        <a href="#inicio">
          <Image alt="logo" src={logo} width={50} height={50} quality={50} />
        </a>
        <h2 className="text-sm md:text-lg md:px-0 px-3 text-center md:text-left">
          PEC (PLAN ESTRATEGICO COMERCIAL)
        </h2>
        <div className="md:hidden flex items-center justify-center ">
        <SVGMenu
          className={`${
            !toggle ? "rotate-90 duration-300" : " duration-500"
          } w-10 h-10 cursor-pointer`}
          onClick={handleClick}
        />
      </div>
      </div>


   { !toggle&&  <ul className="md:w-1/3 w-full gap-y-5 animate-[aparecer_.5s]  flex flex-col md:flex-row mt-10 mb-5 md:m-0   md:items-center justify-between md:font-medium md:text-sm">
        <li className="w-full md:w-auto bolck  ">
          <a href="#nosotros" className="w-full  p-2 md:w-auto  md:py-0">Nosotros</a>
        </li>
        <li className="w-full md:w-auto bolck  ">
          <a href="#misionVision" className="w-full  p-2 md:w-auto  md:py-0">Mision y Vision</a>
        </li>
        <li className="w-full md:w-auto bolck ">
          <a href="#avisoPrivacidad" className="w-full  p-2 md:w-auto  md:py-0">Aviso de Privacidad</a>
        </li>
        <li className="w-full md:w-auto bolck  ">
          <a href="#contacto" className="w-full  p-2 md:w-auto  md:py-0">Contacto</a>
        </li>
      </ul>}
      <LinkLogin />
    </nav>
  );
}
