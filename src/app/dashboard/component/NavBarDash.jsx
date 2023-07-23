"use client";
import { SvgHome, SVGPantalla } from "@/app/componentes/SVGComponent";
import { contextUser } from "@/context/contextUser";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavBarDash() {
  const path = usePathname();
  const driver = path.split("/")[3];
  // const driver = contextUser((state) => state.driver);
  return (
    <nav className="h-20 absolute bg-primary-tonoBlanco top-0 right-0 w-[83%] border shadow-md z-40">
      <div className="flex items-center justify-between h-full px-10">
        <div className="px-3 py-1">
          {!path.includes("driver") ? (
            <SvgHome className="w-8 h-8" />
          ) : (
            <SVGPantalla className="w-8 h-8" />
          )}
        </div>
        <div className=" text-primary-200 text-xl text-center w-1/3 font-semibold tracking-wide  ">
          <h2>
            {!path.includes("driver")
              ? "PEC (Plan Estrategico Comercial)"
              : `Driver ${driver}`}
          </h2>
          {!driver && <h3 className="capitalize">Ahora mas cerca de Tí</h3>}
        </div>
        <div>
          <p className="text-xl font-medium">Bienvenido</p>
        </div>
      </div>
    </nav>
  );
}
