import {SvgHome} from "@/app/componentes/SVGComponent";
import React from "react";

export default function NavBarDash() {
  return (
    <nav className="h-20 absolute bg-primary-tonoBlanco top-0 right-0 w-[83%] border shadow-md z-40">
      <div className="flex items-center justify-between h-full px-10">
        <div className="px-3 py-1">
            <SvgHome
            className="w-8 h-8"
            />
        </div>
        <div className=" text-primary-200 text-xl text-center w-1/3 font-semibold tracking-wide  ">
          <h2>PEC (Plan Estrategico Comercial)</h2>
          <h3 className="capitalize">Ahora mas cerca de Tí</h3>
        </div>
        <div>
            <p className="text-xl font-medium">Bienvenido</p></div>
      </div>
    </nav>
  );
}
