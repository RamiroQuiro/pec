"use client";
import React, { useState } from "react";
import ButtonLeerMas from "./ButtonLeerMas";
import Image from "next/image";
import step3 from "../../../../../public/step3.png";
import { contextUser } from "@/context/contextUser";
export default function Step32() {
  const formCarga = contextUser((state) => state.formCarga);
  const cargarForm = contextUser((state) => state.cargarForm);
  const cargarSubPantallas = contextUser((state) => state.cargarSubPantallas);
  const [textArea, setTextArea] = useState(formCarga);
  const handleText = (e) => {
    setTextArea((state) => ({ ...state, driver1:{...state.driver1,[e.target.name]: e.target.value }}));
  };
  
  const clickCargaFormulario = () => {
    cargarForm(textArea);
    cargarSubPantallas(4);
  };
  return (
    <>
      <div className=" flex flex-col items-baseline justify-between gap-3 h-full w-full mx-auto text-center">
        <h2 className="uppercase text-primary-200 text-xl">
          ARMEMOS TU PROPIA CULTURA ORGANIZACIONAL
        </h2>
        <div className="flex items-center justify-between gap-2 w-11/12 mx-auto  ">
          <div className="w-full flex items-center justify-between gap-5">
            <div className="flex w-1/2 flex-auto flex-col items-start text-left ">
              <label htmlFor="producto1" className="text-primary-100">
                Producto/Servicio 1:
              </label>
              <textarea
                onChange={handleChango}
                name="producto1"
                id="producto"
                cols="20"
                rows="5"
                className="border-2 bg-transparent focus:outline-none rounded-lg w-full p-4 text-sm"
              />
            </div>
            <div className="flex w-1/2 flex-auto flex-col items-start text-left ">
              <label htmlFor="producto2" className="text-primary-100">
                Producto/Servicio 1:
              </label>
              <textarea
                onChange={handleChango}
                name="producto2"
                id="producto"
                cols="20"
                rows="5"
                className="border-2 rounded-lg w-full bg-transparent focus:outline-none p-4 text-sm"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 w-full">
          <div className="space-x-4">
            <ButtonLeerMas stepN={14}>Anterior</ButtonLeerMas>
            <ButtonLeerMas disable={isNext} stepN={16}>
              Siguiente
            </ButtonLeerMas>
          </div>
          <button
            onClick={clickCargaFormulario}
            className="bg-primary-600 text-white rounded font-medium text-xs px-4 py-2"
          >
            Guardar
          </button>
        </div>
      </div>
    </>
  );
}
