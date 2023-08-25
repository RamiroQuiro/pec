"use client";

import React, { useEffect, useState } from "react";
import ButtonLeerMas from "./ButtonLeerMas";
import { contextUser } from "@/context/contextUser";
import { toast } from "react-hot-toast";


export default function Step34() {
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
    formCarga?.driver8?.formulario4? formCarga?.driver8?.formulario4 : {}
  );
  const handleChango = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const clickCargaFormulario = () => {
    if (!form.influencer && !form.valorAsignado  && !form.diasProyectados) {
      toast.error("Complete los campos");
    } else {
      updateState({
        formCarga: {
          ...formCarga,
          driver8: { ...formCarga.driver8,formulario4: form },
        },
      });

      cargarSubPantallas(6);

      toast.success("Datos Guardados");
    }
  };



  return (
    <>
      <div className=" flex flex-col items-baseline justify-between gap-3 h-full w-full mx-auto text-center">
        <h2 className="uppercase text-primary-200 text-xl">
          armemos tu sistema de ventas inteligente
        </h2>
        <h3 className="text-primary-200 text-lg ">Influencers</h3>
        <div className="flex items-stretch justify-between gap-4 w-full mx-auto flex-grow mt-5 h-full  ">
          
          <div className="flex w-1/2 flex-auto flex-col gap-5 items-start text-left ">
            <p className="text-primary-100 font-medium">¿Cuáles influencers son aptos para mi mercado?</p>
            <input
                onChange={handleChango}
                name="influencer"
                value={form?.influencer}
                type="text"
                placeholder="Ingresar nombre"
                className="border-2 rounded py-2.5  w-full px-2 focus:outline-none text-sm text-primary-textGris"
              />
          </div>
          <div className="flex w-1/2 flex-auto flex-col gap-5 items-start text-left ">
          <p className="text-primary-100 font-medium">¿Qué presupuesto asignarás a la campaña?</p>
          <input
                onChange={handleChango}
                value={form?.valorAsignado}
                name="valorAsignado"
                type="number"
                placeholder="Ingresar Monto"
                className="border-2 rounded py-2.5  w-full px-2 focus:outline-none text-sm text-primary-textGris"
              />
          </div>
          <div className="flex w-1/2 flex-auto flex-col gap-5 items-start text-left ">
          <p className="text-primary-100 font-medium">¿Cuánto tiempo durara la campaña designada?</p>
          <input
                onChange={handleChango}
                value={form?.diasProyectados}
                name="diasProyectados"
                type="number"
                placeholder="Ingresar los días"
                className="border-2 rounded py-2.5  w-full px-2 focus:outline-none text-sm text-primary-textGris"
              />
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 w-full">
          <div className="space-x-4">
            <ButtonLeerMas label="changeSubPantalla" stepN={4}>Anterior</ButtonLeerMas>
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
