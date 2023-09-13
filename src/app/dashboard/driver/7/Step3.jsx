import React, { useState } from "react";
import { contextUser } from "@/context/contextUser";
import ButtonLeerMas from "./ButtonLeerMas";
import Image from "next/image";
import step3 from "../../../../../public/step1.png";
import Step31 from "./Step31";
import Step32 from "./Step32";
import Step33 from "./Step33";
import ContenedorStep from "../../component/ContenedorStep1";
import ContenedorTitulosDeStep from "../../component/ContenedorTitulosDeStep";
export default function Step3() {
  const subPantallas = contextUser((state) => state.subPantallas);
  return (
    <ContenedorStep>
   
      {!subPantallas ? (
        <>
      <ContenedorTitulosDeStep>
        <h2 className="uppercase text-primary-200 text-xl">ARMEMOS TU Player project life</h2>
        <p className="text-primary-200 text-left text-xl ">
          Genial, vamos avanzando, ahora que te parece si armamos tu{" "}
          <span className="text-primary-100 font-bold capitalize">
          Player project life.
          </span>
        </p>
        <p className="text-primary-200 mb-10 font-bold text-xl tracking-wide leading-relaxed">
          Estas listo?, <span className="text-primary-100">Vamos!!!</span>
        </p>
        <div className="flex items-center justify-normal gap-5 mt-20">
          <ButtonLeerMas stepN={10}>Anterior</ButtonLeerMas>
          <ButtonLeerMas stepN={11}>Leer mas...</ButtonLeerMas>
        </div>
      </ContenedorTitulosDeStep>
      <div className="w-4/12 h-full relative">
        <Image
          alt="step3"
          src={step3}
          fill
          className=" object-center object-contain absolute -right-3 top-4 w-4/12 h-auto "
        />
      </div></>
     ) : subPantallas == 2 ? (
      <Step31/>
   ) : subPantallas == 3 ? (
     <Step32/>
  ) : subPantallas == 4 ? (
     <Step33/>
  ) :(
     <></>
   )}
    </ContenedorStep>
  );
}
