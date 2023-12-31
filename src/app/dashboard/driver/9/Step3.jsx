import React, { useState } from "react";
import { contextUser } from "@/context/contextUser";
import ButtonLeerMas from "./ButtonLeerMas";
import Image from "next/image";
import step3 from "../../../../../public/step1.png";
export default function Step3() {
  const subPantallas = contextUser((state) => state.subPantallas);
  return (
    <div className="flex items-center justify-between p-6  relative w-full  h-full">
      {!subPantallas ? (
        <>
      <div className=" flex flex-col items-baseline justify-start gap-5 h-full w-8/12">
        <h2 className="uppercase text-primary-200 text-xl">ARMEMOS TU plan de seguimiento efectivo en tu proceso comercial</h2>
        <p className="text-primary-200 text-left text-xl ">
          Genial, vamos avanzando, ahora que te parece si armamos tu{" "}
          <span className="text-primary-100 font-bold capitalize">
          Plan de Seguimiento Efectivo en tu Proceso Comercial.
          </span>
        </p>
        <p className="text-primary-200 mb-10 font-bold text-xl tracking-wide leading-relaxed">
          Estas listo?, <span className="text-primary-100">Vamos!!!</span>
        </p>
        <div className="flex items-center justify-normal gap-5 mt-20">
          <ButtonLeerMas stepN={11}>Anterior</ButtonLeerMas>
          <ButtonLeerMas stepN={12}>Leer mas...</ButtonLeerMas>
        </div>
      </div>
      <div className="w-4/12 h-full relative">
        <Image
          alt="step3"
          src={step3}
          fill
          className=" object-center object-contain absolute -right-3 top-4 w-4/12 h-auto "
        />
      </div></>
      
  ) :(
     <></>
   )}
    </div>
  );
}
