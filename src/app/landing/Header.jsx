import React from "react";
import NavBar from "./component/NavBar";
import Image from "next/image";
import background from "../../../public/headerback.jpg";
import background2 from "../../../public/background2.jpg";
import background3 from "../../../public/background3.jpg";
import CarruselHeadre from "./component/CarruselHeadre";
import BotonInicioSesion from "./component/BotonInicioSesion";

export default function Header() {
  const imagenes = [
    {
      alt: "backgroun1",
      src: background,
      id: 1,
    },
    {
      alt: "backgroun2",
      src: background2,
      id: 2,
    },
    {
      alt: "backgroun3",
      src: background3,
      id: 3,
    },
  ];
  return (
    <header id="inicio" className="w-screen h-screen md:h-[80vh] relative">
      <NavBar />
      <div className="md:w-2/4 w-full   mx-auto py-10 gap-5 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-between z-10 absolute -bottom-0 md:-bottom-28 md:left-1/4  border-t border-primary-200/50">
        <h2 className="text-xl  text-primary-200">
        {"  PEC (Plan Estrategico Comercial)"}
        </h2>
        <h2 className="md:text-2xl font-medium text-gray-700">
          POTENCIALIZANDO ÁREAS COMERCIALES
        </h2>
        <BotonInicioSesion/>
      </div>{" "}
      <CarruselHeadre imagenes={imagenes} />
    </header>
  );
}
