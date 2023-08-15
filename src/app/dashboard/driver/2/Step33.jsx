"use client"
import React, { useEffect, useState } from "react";
import ButtonLeerMas from "./ButtonLeerMas";
import { contextUser } from "@/context/contextUser";





  export default function Step33() {
    const formCarga=contextUser(state=>state.formCarga)
    const [selected, setSelected] = useState([]);
    const cargarForm = contextUser((state) => state.cargarForm);
    const [form, setForm] = useState(formCarga)
  
  return (
    <>
      <div className=" flex flex-col items-start justify-around gap-10 h-full w-full mx-auto text-center">
        <h2 className="uppercase text-primary-200 text-xl">
          ARMEMOS TU PROPIA CULTURA ORGANIZACIONAL
        </h2>
        <div className="flex items-stretch  justify-between gap-2 w-full mx-auto  ">
          <p className="text-primary-100 font-medium text-left w-1/2 text-xl">
          Selecciona los 3 Valores más importantes para tu equipo comercial
          </p>

        </div>
        <div className="flex items-center justify-normal gap-5">
          <ButtonLeerMas label={"changeSubPantalla"} stepN={3}>
            Anterior
          </ButtonLeerMas>
          <ButtonLeerMas  stepN={20}>
            Siguiente
          </ButtonLeerMas>
        </div>
    
      </div>
    </>
  );
}
