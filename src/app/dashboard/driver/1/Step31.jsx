"use client";

import React, { useEffect, useState } from "react";
import ButtonLeerMas from "./ButtonLeerMas";
import SelectExample from "./SelectExample";
import { contextUser } from "@/context/contextUser";

const select1 = [
  { label: "Vender/Comercializar", value: "vender/comercializar" },
  { label: "Distribuir", value: "distribuir" },
  { label: "Satifaser", value: "satifacer" },
  { label: "Generar", value: "generar" },
  { label: "Aportar", value: "aportar" },
  { label: "Compartir", value: "compartir" },
  { label: "Lograr", value: "lograr" },
  { label: "Cumplir", value: "cumplir" },
];
const select2 = [
  { label: "Clientes", value: "clientes" },
  { label: "Equipo de Trabajo", value: "equipoTRabajo" },
  { label: "Directivos", value: "directivos" },
  { label: "Sociedad", value: "sociedad" },
];
const select3 = [
  { label: "Reconocimiento", value: "reconocimiento" },
  { label: "Resultados", value: "resultados" },
  { label: "Clima Laboral", value: "climaLaboral" },
  { label: "Satisfaccion", value: "satisfaccion" },
];
export default function Step31() {
  const {formCarga,cargarForm,updateState,cargarSubPantallas,drivers} = contextUser((state) => ({
    formCarga:state.formCarga,
    cargarForm:state.cargarForm,
    cargarSubPantallas:state.cargarSubPantallas,
drivers:state.drivers,
updateState:state.updateState,
  }));
  const [selected, setSelected] = useState([]);
  const [selected2, setSelected2] = useState([]);
  const [selected3, setSelected3] = useState([]);
  const [form, setForm] = useState(formCarga);

  useEffect(() => {
    const cargandoDatos = () => {
      updateState({
        formCarga:{
          ...formCarga,
        driver1: {
          ...formCarga.driver1,
          formulario1: {
            slect1: selected,
            slect2: selected2,
            slect3: selected3,
          },
        },}
      });
    };
    cargandoDatos();
  }, [selected, selected2, selected3]);


  return (
    <>
      <div className=" flex flex-col items-baseline justify-between gap-3 h-full w-full mx-auto text-center">
        <h2 className="uppercase text-primary-200 text-xl">
          ARMEMOS TU PROPIA CULTURA ORGANIZACIONAL
        </h2>
        <div className="flex items-center justify-between gap-2 w-11/12 mx-auto  ">
          <div className="w-1/4 flex-auto">
            <p className="text-primary-100 font-medium mb-10">
              ¿Para que esta hecho tu Área Comercial?
            </p>
            <SelectExample
              options={select1}
              selected={selected}
              setSelected={setSelected}
              labelSpan={"Selecciona los 3 mas importantes para ti"}
            />
          </div>
          <div className="w-1/4 flex-auto">
            <p className="text-primary-100 font-medium mb-10">
              ¿A quien esta dirigida tu Misión Comercial?
            </p>
            <SelectExample
              options={select2}
              selected={selected2}
              labelSpan={"_"}
              setSelected={setSelected2}
            />
          </div>
          <div className="w-1/4 flex-auto">
            <p className="text-primary-100 font-medium mb-10">
              ¿Que es importante para tu Área Comercial?
            </p>
            <SelectExample
              options={select3}
              selected={selected3}
              setSelected={setSelected3}
              labelSpan={"Selecciona solo 2"}
            />
          </div>
        </div>
        <div className="flex items-center justify-normal gap-5">
          <ButtonLeerMas stepN={19}>Anterior</ButtonLeerMas>
  
         <ButtonLeerMas o label={"changeSubPantalla"} stepN={3}>Siguiente</ButtonLeerMas> 
        </div>
      </div>
    </>
  );
}
