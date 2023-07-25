import React, { useState } from "react";
import ButtonLeerMas from "./ButtonLeerMas";
import Image from "next/image";
import step3 from "../../../../../public/step3.png";
export default function Step32() {
  const [textArea, setTextArea] = useState({});
  const handleText = (e) => {
    setTextArea((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <div className=" flex flex-col items-baseline justify-between gap-3 h-full w-full mx-auto text-center">
        <h2 className="uppercase text-primary-200 text-xl">
          ARMEMOS TU PROPIA CULTURA ORGANIZACIONAL
        </h2>
        <div className="flex items-center flex-col justify-between gap-2 w-full mx-auto  ">
          <p className="text-primary-100 font-medium text-left w-full">
            Escribe tu Misión Comercial
          </p>
          <textarea
            name="misionComercial"
            id="misionComercial"
            className="border-2 rounded-lg p-3 w-full"
            rows="10"
          ></textarea>
        </div>
        <div className="flex items-center justify-normal gap-5">
          <ButtonLeerMas label={"changeSubPantalla"} stepN={2}>
            Anterior
          </ButtonLeerMas>
          <ButtonLeerMas label={"changeSubPantalla"} stepN={4}>
            Siguiente
          </ButtonLeerMas>
        </div>
      
      </div>
      <div className="w-4/12  mx-auto h-full relative">
            <Image
              alt="step3"
              src={step3}
              fill
              className=" object-center object-contain absolute -right-3 top-4 w-4/12 ml-14 h-auto mx-auto "
            />
          </div>
    </>
  );
}
