import React from "react";
import NavBar from "./component/NavBar";
import Image from "next/image";
import background from "../../../public/headerback.jpg";
import background2 from "../../../public/background2.jpg";
import background3 from "../../../public/background3.jpg";
import background4 from "../../../public/background1.webp";
import background5 from "../../../public/background2.webp";
import background6 from "../../../public/background3.webp";
import background7 from "../../../public/background4.webp";
import CarruselHeadre from "./component/CarruselHeadre";
import BotonInicioSesion from "./component/BotonInicioSesion";
import Titulos from "./Titulos";

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
    {
      alt: "backgroun4",
      src: background4,
      id: 4,
    },
    {
      alt: "backgroun5",
      src: background5,
      id: 5,
    },
    {
      alt: "backgroun6",
      src: background6,
      id: 6,
    },
    {
      alt: "backgroun7",
      src: background7,
      id: 7,
    },
  ];
  return (
    <header id="inicio" className="w-screen h-screen md:h-[80vh] relative">
      <NavBar />
      <Titulos />
      <CarruselHeadre imagenes={imagenes} />
    </header>
  );
}
