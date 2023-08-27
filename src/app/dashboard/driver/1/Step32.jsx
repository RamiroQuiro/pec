"use client";
import React, { useState } from "react";
import ButtonLeerMas from "./ButtonLeerMas";
import Image from "next/image";
import step3 from "../../../../../public/step3.png";
import { contextUser } from "@/context/contextUser";
export default function Step32() {
  const formCarga = contextUser((state) => state.formCarga);
  const updateState = contextUser((state) => state.updateState);
  const drivers = contextUser((state) => state.drivers);
  const cargarSubPantallas = contextUser((state) => state.cargarSubPantallas);
  const [textArea, setTextArea] = useState(formCarga?.driver1?.misionComercial?formCarga?.driver1?.misionComercial:"");
  const handleText = (e) => {
    setTextArea(e.target.value);
  };
  
  const clickCargaFormulario = () => {
    updateState({
      formCarga:{
        ...formCarga,
        driver1:{
          ...formCarga.driver1,
          misionComercial:textArea
        }
      }
    });
    cargarSubPantallas(4);
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
            onChange={handleText}
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
          <button
            onClick={clickCargaFormulario}
            className="bg-primary-800 text-white rounded font-medium text-xs px-4 py-2"
          >
            Siguiente
          </button>
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
