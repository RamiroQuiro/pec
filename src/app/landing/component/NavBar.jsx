import Image from "next/image";
import React from "react";
import SVGLogin from "./SVGComponent";
import logo from "../../../../public/logo.png";

export default function NavBar() {
  return (
    <nav className="h w-screen py-2 fixed top-0 left-0  flex items-center bg-primary-500 justify-between px-12 text-primary-200 z-40">
      <div className="w-1/4 flex items-center justify-between font-light text-sm">
        <Image alt="logo"
        src={logo}
        width={50}
        height={50}
        quality={50}
        />
        <h2>PEC (PLAN ESTRATEGICO COMERCIAL)</h2>
      </div>
      <ul className="w-1/3 flex items-center justify-between font-medium text-sm">
        <li>Nosotros</li>
        <li>Mision y Vision</li>
        <li>Aviso de Privacidad</li>
        <li>Contacto</li>
      </ul>
      <div className="w- flex flex-col items-center justify-center text-sm">
        <SVGLogin className="w-10" />
        <span className="w-fll">Iniciar Sesion</span>
      </div>
    </nav>
  );
}
