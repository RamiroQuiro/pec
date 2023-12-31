import React, { useState } from "react";
import ButtonLeerMas from "./ButtonLeerMas";
import Image from "next/image";
import step3 from "../../../../../public/step3.png";
import Step31 from "./Step31";
import { contextUser } from "@/context/contextUser";
import Step32 from "./Step32";
import Step33 from "./Step33";

export default function Step3() {

const subPantallas=contextUser(state=>state.subPantallas)
  return (
    <div className="flex md:flex-row flex-col items-center justify-between p-6  relative w-full  h-full">
 
      {!subPantallas ? (
        <>
             <div className=" flex flex-col md:items-baseline justify-between gap-3 h-full md:w-8/12">
            <h2 className="uppercase text-primary-200 text-xl">
              {`LISTO!, BIENVENIDO AL PASO 3 "ARMEMOS TU PROPIA CULTURA
              ORGANIZACIONAL" PERO CON UNA GRAN DIFERENCIA: ENFOCADA AL ÁREA
              COMERCIAL`}
              <span className="text-primary-100 font-semibold">
                {" "}
                ¿ESTAS LISTO?, VAMOS!!!!
              </span>
            </h2>
            <p className="text-primary-textGris font-semibold uppercase tracking-wide leading-relaxed text-xl w-full">
              ¿Estas Listo?,
              <span className="text-primary-100 "> Vamos!!!</span>
            </p>
            <div className="flex items-center justify-normal gap-5">
              <ButtonLeerMas label={"changeStep"} stepN={2}>
                Anterior
              </ButtonLeerMas>
              <ButtonLeerMas stepN={16}>Ir...</ButtonLeerMas>
            </div>
          </div>
          <div className="w-4/12  mx-auto h-full relative">
            <Image
              alt="step3"
              src={step3}
              fill
              className=" object-center object-contain absolute -right-3 top-4 w-full ml-14 h-auto mx-auto "
            />
          </div>
        </>
      ) : subPantallas == 2 ? (
         <Step31/>
      ) : subPantallas == 3 ? (
        <Step32/>
     ) : subPantallas == 4 ? (
        <Step33/>
     ) :(
        <></>
      )}
    </div>
  );
}
