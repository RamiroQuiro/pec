import Image from "next/image";
import React from "react";
import SVGLogin from "./SVGComponent";
import logo from "../../../../public/logo.png";
import LinkLogin from "./LinkLogin";

export default function NavBar() {
  return (
    <nav className="h w-screen py-2 fixed top-0 left-0  flex items-center bg-primary-500 justify-between px-12 text-primary-200 z-40">
      <div className="w-1/3 flex items-center justify-between font-light text-sm">
        <a href="#inicio">
        <Image alt="logo"
        src={logo}
        width={50}
        height={50}
        quality={50}
        />
        </a>
        <h2>PEC (PLAN ESTRATEGICO COMERCIAL)</h2>
      </div>
      <ul className="w-1/3 flex items-center justify-between font-medium text-sm">
        <li>
          <a href="#nosotros">Nosotros</a></li>
        <li>
        <a href="#misionVision">Mision y Vision</a></li>
        <li>  <a href="#avisoPrivacidad">Aviso de Privacidad</a></li>
        <li>  <a href="#contacto">Contacto</a></li>
      </ul>
    <LinkLogin/>
    </nav>
  );
}
