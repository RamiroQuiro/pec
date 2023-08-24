"use client";

import React, { useEffect, useState } from "react";
import ButtonLeerMas from "./ButtonLeerMas";
import { contextUser } from "@/context/contextUser";
import { toast } from "react-hot-toast";

export default function Step31() {
  const { updateState, formCarga,drivers, setCurrentStep } = contextUser((state) => ({
    updateState: state.updateState,
    formCarga: state.formCarga,
    drivers: state.drivers,
    setCurrentStep: state.setCurrentStep,
  }));
  const [form, setForm] = useState( formCarga?.driver4?.formulario1 ? formCarga?.driver4?.formulario1 : {});
  const [isEdit, setIsEdit] = useState(
    !formCarga?.driver4?.formulario1 ? false : true
  );
  const puntajeLider = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handleChango = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const clickCargaFormulario = () => {
    if (!isEdit) {
      setIsEdit(true);
      toast.success("puedes editar");
    } else {
      if (
        !form.filosofiaPersonal ||
        !form.equipoTrabajo ||
        !form.puntajeLider ||
        !form.valoresEsenciales
      ) {
        toast.error("Complete los campos");
      } else {
        updateState({
          formCarga: {
            ...formCarga,
            driver4: { formulario1: form },
          },
        });
        setIsEdit(false);
        updateState({drivers:{...drivers,driver4: { ...drivers.driver4, step3: true }} });
        setCurrentStep(4);

        toast.success("Datos Guardados");
      }
    }
  };
  const handleSelect = (e) => {
    setForm((form) => ({
      ...form,
      puntajeLider: e.target.value,
    }));
  };
  return (
    <>
      <div className=" flex flex-col items-baseline justify-between gap-3 h-full w-full mx-auto text-center">
        <div className="flex  mb-5 justify-between w-full items-center gap-3 text-left">
          <h2 className="uppercase text-primary-200 text-xl">
            ARMEMOS TU MODELO DE LIDERAZGO COMERCIAL
          </h2>
          <span className="text-xs text-primary-100">
            * Responde adecuadamente
          </span>
        </div>
        <div className="flex items-stretch justify-between gap-2 w-full mx-auto flex-grow ">
          <div className="flex w-2/3 flex-auto flex-col items-start text-left gap-5 text-primary-textGris text-sm ">
            <div className="flex items-center justify-between w-full">
              <label
                htmlFor="filosofiaPersonal"
                className="w-1/2  text-xs text-primary-200"
              >
                Mi Filosofia personal como líder es:{" "}
              </label>
              <input
              value={
               form.filosofiaPersonal
              }
                onChange={handleChango}
                name="filosofiaPersonal"
                type="text"
                className="border-2 rounded py-2.5 ml-5 w-1/2 px-2 focus:outline-none"
              />
            </div>
            <div className="flex items-center justify-between w-full">
              <label
                htmlFor="valoresEsenciales"
                className="w-1/2  text-xs text-primary-200"
              >
                Mis valores esenciales como líder son:
              </label>
              <input
               value={
               
                   form?.valoresEsenciales
              }
                onChange={handleChango}
                name="valoresEsenciales"
                type="text"
                className="border-2 rounded py-2.5 ml-5 w-1/2 px-2 focus:outline-none"
              />
            </div>
            <div className="flex items-center justify-between w-full">
              <label
                htmlFor="equipoTrabajo"
                className="w-1/2  text-xs text-primary-200"
              >
                Me gusta que mi equipo de trabajo se comporte:
              </label>
              <input
               value={
                
                  form?.equipoTrabajo
              }
                onChange={handleChango}
                name="equipoTrabajo"
                type="text"
                className="border-2 rounded py-2.5 ml-5 w-1/2 px-2 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex w-1/3 px-10 flex-auto flex-col items-start  gap-1">
            <p className="text-primary-100 font-medium">Text de Liderazgo</p>
            <p className="text-primary-200 text-center font-medium text-sm">
              Del 1 al 10 ¿como te catalogas?
            </p>
            <select
              onChange={handleSelect}
              name="puntakeLider"
              id="puntajeLider"
              className="w-full border-2 py-2.5 px-2 rounded text-sm text-primary-textGris"
            >
              <option disabled selected className="py-2.5">
                {" "}
                Selecciona
              </option>
              {puntajeLider.map((puntaje, i) => (
                <option value={puntaje} key={i} className="py-2.5">
                  {" "}
                  {puntaje}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 w-full">
          <div className="space-x-4">
            <ButtonLeerMas stepN={41}>Anterior</ButtonLeerMas>
          </div>
          <button
            onClick={clickCargaFormulario}
            className="bg-primary-600 text-white rounded font-medium text-xs w-24 py-2.5"
          >
            {isEdit ? "Guardar" : "Editar"}
          </button>
        </div>
      </div>
    </>
  );
}
