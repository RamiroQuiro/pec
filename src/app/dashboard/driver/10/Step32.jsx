"use client";

import React, { useEffect, useState } from "react";
import ButtonLeerMas from "./ButtonLeerMas";
import { contextUser } from "@/context/contextUser";
import { toast } from "react-hot-toast";

export default function Step32() {
  const { updateState, formCarga, drivers, setCurrentStep } = contextUser(
    (state) => ({
      cargarSubPantallas: state.cargarSubPantallas,
      updateState: state.updateState,
      formCarga: state.formCarga,
      drivers: state.drivers,
      setCurrentStep: state.setCurrentStep,
    })
  );
  const [form, setForm] = useState(
    formCarga?.driver10?.formulario2 ? formCarga?.driver10?.formulario2 : {}
  );

  const handleChango = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const clickCargaFormulario = () => {
    if (!form?.primerTrimestre && !form?.segundoTrimestre && !form?.tercerTrimestre && !form?.cuartoTrimestre) {
      toast.error("Complete los campos");
    } else {
      updateState({
        formCarga: {
          ...formCarga,
          driver10: {
            ...formCarga.driver10,

            formulario2: form,
          },
        },
        drivers:{...drivers, driver10: {...drivers.driver10, step3: true } }
      });

      setCurrentStep(4);

      toast.success("Datos Guardados");
    }
  };

  return (
    <>
      <div className=" flex flex-col items-baseline justify-between gap-3 h-full w-full mx-auto text-center">
        <h2 className="uppercase text-primary-200 text-xl">
          armemos tu player project life
        </h2>
        <p className="text-primary-200 text-left">
          Estructura una linea del tiempo y fíjas en que periodos das, que valor agregado otorgas
        </p>
        <div className="flex items-stretch justify-between gap-4 w-full mx-auto flex-grow mt-5 h-full  ">
          
          <div className="flex w-1/2 flex-auto flex-col gap-5 items-start text-left ">
            <p className="text-primary-100 font-medium">1er Trimestre</p>
            <input
                onChange={handleChango}
                name="primerTrimestre"
                value={form?.primerTrimestre}
                type="text"
                placeholder="Ingresar nombre"
                className="border-2 rounded py-2.5  w-full px-2 focus:outline-none text-sm text-primary-textGris"
              />
          </div>
          <div className="flex w-1/2 flex-auto flex-col gap-5 items-start text-left ">
          <p className="text-primary-100 font-medium">2do Trimestre</p>
          <input
                onChange={handleChango}
                value={form?.segundoTrimestre}
                name="segundoTrimestre"
                type="number"
                placeholder="Ingresar Monto"
                className="border-2 rounded py-2.5  w-full px-2 focus:outline-none text-sm text-primary-textGris"
              />
          </div>
          <div className="flex w-1/2 flex-auto flex-col gap-5 items-start text-left ">
          <p className="text-primary-100 font-medium">3er Trimestre</p>
          <input
                onChange={handleChango}
                value={form?.terceroTrimestre}
                name="terceroTrimestre"
                type="number"
                placeholder="Ingresar los días"
                className="border-2 rounded py-2.5  w-full px-2 focus:outline-none text-sm text-primary-textGris"
              />
          </div>
          <div className="flex w-1/2 flex-auto flex-col gap-5 items-start text-left ">
          <p className="text-primary-100 font-medium">4to Trimestre</p>
          <input
                onChange={handleChango}
                value={form?.cuartoTrimestre}
                name="cuartoTrimestre"
                type="number"
                placeholder="Ingresar los días"
                className="border-2 rounded py-2.5  w-full px-2 focus:outline-none text-sm text-primary-textGris"
              />
          </div>
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
