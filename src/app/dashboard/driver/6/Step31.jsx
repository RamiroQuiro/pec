"use client";

import React, { useEffect, useState } from "react";
import ButtonLeerMas from "./ButtonLeerMas";
import { contextUser } from "@/context/contextUser";
import { toast } from "react-hot-toast";

export default function Step31() {
  const { updateState, formCarga, drivers, activarFlyer } = contextUser(
    (state) => ({
      activarFlyer:state.activarFlyer,
      updateState: state.updateState,
      formCarga: state.formCarga,
      drivers: state.drivers,
      setCurrentStep: state.setCurrentStep,
    })
  );
  const [form, setForm] = useState(
    formCarga?.driver5?.formulario1 ? formCarga?.driver5?.formulario1 : {}
  );
  const [isEdit, setIsEdit] = useState(
    !formCarga?.driver4?.formulario1 ? true : false
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
      if (!form.mes ||!form.valorProyectado ) {
        toast.error("Complete los campos");
      } else {
        updateState({
          formCarga: {
            ...formCarga,
            driver5: { formulario1: form },
          },
        });
        setIsEdit(false);
        // updateState({
        //   drivers: { ...drivers, driver4: { ...drivers.driver4, step3: true } },
        // });
       activarFlyer(15);

        toast.success("Datos Guardados");
      }
    }
  };
  const handleSelect = (e) => {
    setForm((form) => ({
      ...form,
      mes: e.target.value,
    }));
  };
  return (
    <>
      <div className=" flex flex-col items-baseline justify-between gap-3 h-full w-full mx-auto text-center">
        <h2 className="uppercase text-primary-200 text-xl">Ventas vs tiempo</h2>
        <p className="text-primary-200 text-left">
         {" Por favor menciona (en tu moneda, pesos dls, etc) las ventas proyectadas a 12 meses a partir de la fecha de término de este documento:"}
        </p>
        <div className="flex items-stretch justify-between gap-2 w-full mx-auto flex-grow ">
          <div className="w-2/3 flex items-start justify-start mt-5">
            <div className="flex w-1/3 px-10 flex-auto flex-col items-start  gap-1">
              <p className="text-primary-100 font-medium">
                Selecciona y contesta uno a la vez
              </p>
              <select
                onChange={handleSelect}
                name="mes"
                id="mes"
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
            <div className="flex w-1/3 px-10 flex-auto flex-col items-start  gap-1">
              <label className="text-primary-100 font-medium">
                Selecciona y contesta uno a la vez
              </label>
              <input
              value={
               form.valorProyectado
              }
                onChange={handleChango}
                name="valorProyectado"
                type="text"
                className="border-2 rounded py-2.5 ml-5 w-full px-2 focus:outline-none text-sm text-primary-textGris"
              />
            </div>
          </div>
          <div className="w-1/3 flex items-start justify-start mt-5">
            <p className=" px-5 text-sm text-primary-100 italic">{'"Esta proyeccion puede ser proyectada también por bimestres, trimestres y a plazos largos, el ejercicio es una muestra de como realizarlo."'}</p>
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
            {isEdit ? "Guardar" : "Editar"}
          </button>
        </div>
      </div>
    </>
  );
}
