"use client";

import React, { useEffect, useState } from "react";
import ButtonLeerMas from "./ButtonLeerMas";
import { contextUser } from "@/context/contextUser";
import { toast } from "react-hot-toast";

export default function Step31() {
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
    formCarga?.driver7?.formulario1 ? formCarga?.driver7?.formulario1 : {}
  );
  const [isEdit, setIsEdit] = useState(false);
  const handleChango = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const clickCargaFormulario = () => {
    if (!form.calidadVida || !form.desarrolloPersonal) {
      toast.error("Complete los campos");
    } else {
      updateState({
        formCarga: {
          ...formCarga,
          driver7: {...formCarga.driver7, formulario1: form },
        },
      });
      setIsEdit(false);

      cargarSubPantallas(3);

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
          {
            " Hagamos un ejemplo, el formato quedara listo en tu documento ejecutivo:"
          }
        </p>
        <div className="flex md:flex-row flex-col items-stretch justify-between gap-2 w-full mx-auto flex-grow ">
          <div className="flex w-full md:w-1/2 flex-auto flex-col items-start text-left ">
            <label htmlFor="calidadVida" className="text-primary-100">
              Meta 1:
            </label>
            <textarea
              onChange={handleChango}
              name="calidadVida"
              value={form?.calidadVida}
              id="calidadVida"
              cols="20"
              rows="5"
              className={`${
                !isEdit
                  ? "bg-gray-400/30 duration-300"
                  : "bg-transparent duration-300"
              } border-2 bg-transparent text-primary-textGris focus:outline-none rounded-lg w-full p-4 text-sm `}
            />
            <p className="text-primary-200 font-medium">
              Calidad de vida a 6 meses.
            </p>
          </div>
          <div className="flex w-full md:w-1/2 flex-auto flex-col items-start text-left ">
            <label htmlFor="desarrolloPersonal" className="text-primary-100">
              Meta 1
            </label>
            <textarea
              onChange={handleChango}
              name="desarrolloPersonal"
              value={form?.desarrolloPersonal}
              id="desarrolloPersonal"
              cols="20"
              rows="5"
              className={`${
                !isEdit
                  ? "bg-gray-400/30 duration-300"
                  : "bg-transparent duration-300"
              } border-2 bg-transparent focus:outline-none text-primary-textGris rounded-lg w-full p-4 text-sm `}
            />
            <p className="text-primary-200 font-medium">
              Desarrollo personal a 6 meses.
            </p>
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
