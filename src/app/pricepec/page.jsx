import React from "react";
import { SVGDownload, SVGGit, SVGInfinity, SVGPantalla } from "../componentes/SVGComponent";

export default function PricePEC() {
  return (
    <main className=" w-screen min-h-screen flex flex-col items-center justify-between text-primary-textGris relative">
      <nav className="w-full absolute z-40 flex items-center justify-between bg-primary-tonoBlanco h-20 px-16 top-0 left-0">
        {/* logo */}
        <div>logo </div>
        <div>cancelar</div>
      </nav>
      <header className="w-full  h-[60vh] bg-[#000028] relative flex items-center justify-between">
        <div className="text-white w-[35%] flex flex-col items-start justify-center pt-10 ml-32 ">
          <h1 className="text-3xl font-bold tracking-wide">
            PLAN ESTRATEGICO COMERCIAL | 10 DRIVERS + PRODUCTO FINAL
          </h1>
          <h3 className="text-lg leading-tight">
            Plan Estratégico Comercial Basado en un Tablero Dinámico de 10
            Drivers + Guía Estratégica Comercial
          </h3>
          <p className="text-xs my-3">
            Creado por:{" "}
            <span className="text-primary-700">Hector Ávila Muñoz</span>{" "}
          </p>
          <p className="text-xs my-3 text-white">
            Ultima Actualización : 19/07/2023
          </p>
        </div>
        <div className="md:w-[450px] h-[1044px] bg-white  absolute right-44 top-20 mt-20 border">
          <div className="flex flex-col items-start justify-center">
            <div>
              <video src=""></video>
            </div>
            <div className="flex flex-col items-start justify-center px-7 gap-4 w-full">
              <p className="text-2xl font-black text-[#000028] tracking-wide">
                2,500 MXN
              </p>
              <button className="bg-primary-100 text-white font-bold capitalize w-full py-4">
                Comprar Ahora
              </button>
              <span className="text-xs text-center w-full">Garantía de reembolso de 10 dias</span>
              <div>
                <h3 className="text-lg font-bold my-5 text-[#000028] tracking-wide">Tu PEC incluye:</h3>
                <ul className="w-full flex flex-col items-start justify-between font-medium gap-2">
                  <li className="w-full flex items-center justify-start  gap-2">
                    <SVGPantalla className="w-5"/><p>Drivers dinámicos.</p>
                  </li>
                  <li className="w-full flex items-center justify-start  gap-2">
                    <SVGInfinity className="w-5"/><p>Acceso de por vida</p>
                  </li>
                  <li className="w-full flex items-center justify-start  gap-2">
                  <SVGGit className="w-5"/> <p>Guia de uso de plataforma</p>
                  </li>
                  <li className="w-full flex items-center justify-start  gap-2">
                  <SVGDownload className="w-5"/> <p>Recursos descargables</p>
                  </li>
                  <li className="w-full flex items-center justify-start  gap-2">
                  <SVGInfinity className="w-5"/> <p>Certificado final</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}
