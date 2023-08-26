"use client";

import React, { useEffect, useState } from "react";
import ButtonLeerMas from "./ButtonLeerMas";
import { contextUser } from "@/context/contextUser";
import { toast } from "react-hot-toast";

export default function Step31() {
  const select = [
    { label: 'Que realmente genere valor, y "lo agradezca"', id:1 },
    { label: 'Que no lo dé tu competencia"', id:2 },
    { label: 'Que no afecte sensiblemente tu presupuesto (recursos)', id:3 },
    { label: 'Que no sea nada que incluya TU DEBER SER (Garantia, calidad, puntualidad)', id:4 },
  ];
  const { updateState, formCarga, drivers, cargarSubPantallas } = contextUser(
    (state) => ({
      cargarSubPantallas: state.cargarSubPantallas,
      updateState: state.updateState,
      formCarga: state.formCarga,
      drivers: state.drivers,
      setCurrentStep: state.setCurrentStep,
    })
  );
  const [form, setForm] = useState(
    formCarga?.driver10?.formulario1 ? formCarga?.driver10?.formulario1 : {}
  );
  const handleChango = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const clickCargaFormulario = () => {
    if (!form.caracteristicas) {
      toast.error("Complete los campos");
    } else {
      updateState({
        formCarga: {
          ...formCarga,
          driver10: { formulario1: form },
        },
      });

      cargarSubPantallas(3);

      toast.success("Datos Guardados");
    }
  };

  return (
    <>
      <div className=" flex flex-col items-baseline justify-between gap-3 h-full w-full mx-auto text-center">
        <h2 className="uppercase text-primary-200 text-xl">
          armemos tu estrategias de valores agregados
        </h2>
        <p className="text-primary-200 text-left">
          {
            "Analizando tus clientes,¿Que valoraría tu cliente con las siguientes caracteristicas?:"
          }
        </p>
        <div className="flex items-center justify-between gap-2 focus:outline-none selection:outline-none mx-auto w-1/2 ">
          <select
            onChange={handleChango}
            name="caracteristicas"
            value={form?.caracteristicas}
            id="caracteristicas"
            className="w-full border-2 py-2.5 px-2 rounded text-sm text-primary-textGris"
          >
            <option disabled selected className="py-2.5">
              {" "}
              Selecciona
            </option>
            {select.map((puntaje, i) => (
              <option value={puntaje.label} key={i} className="py-2.5">
                {" "}
                {puntaje.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between gap-5 w-full">
          <div className="space-x-4">
            <ButtonLeerMas stepN={14}>Anterior</ButtonLeerMas>
          </div>
          <button
            onClick={clickCargaFormulario}
            className="bg-primary-600 text-white rounded font-medium text-xs w-24 py-2.5"
          >
            Siguiente
          </button>
        </div>
      </div>
    </>
  );
}
