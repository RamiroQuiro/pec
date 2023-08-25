"use client";

import React, { useEffect, useState } from "react";
import ButtonLeerMas from "./ButtonLeerMas";
import { contextUser } from "@/context/contextUser";
import { toast } from "react-hot-toast";

const arrayCicloVide=[
  {
    id:1,
    label:"Desarrollo"
  },
  {
    id:2,
    label:"Introducción"
  },
  {
    id:3,
    label:"Turbulencia"
  },
  {
    id:4,
    label:"Crecimiento"
  },
  {
    id:5,
    label:"Madurez"
  },
  {
    id:6,
    label:"Declive"
  },

]
const arrayElementosApoyo=[
  {
    id:1,
    label:"Presentación power point"
  },
  {
    id:2,
    label:"Video promocional"
  },
  {
    id:3,
    label:"Brochure informativo impreso"
  },
  {
    id:4,
    label:"Brochure informativo digital"
  },
  {
    id:5,
    label:"Otros (Showroom)"
  },
  {
    id:6,
    label:"Otros (Muestras sin costos)"
  },

]

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
  const [select, setSelect] = useState([])
  const [form, setForm] = useState(
    formCarga?.driver7?.formulario1 ? formCarga?.driver7?.formulario1 : {}
  );
  const [isEdit, setIsEdit] = useState(false);
  const handleChango = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const clickCargaFormulario = () => {
    if (!form.elementoApoyo && !form.cicloDeVida) {
      toast.error("Complete los campos");
    } else {
      updateState({
        formCarga: {
          ...formCarga,
          driver8: { formulario1: form },
        },
      });

      cargarSubPantallas(3);

      toast.success("Datos Guardados");
    }
  };

const handleSelect=(e)=>{
const {name,value}=e.target
setForm((form)=>({
...form,
[name]:value
}))
}

  return (
    <>
      <div className=" flex flex-col items-baseline justify-between gap-3 h-full w-full mx-auto text-center">
        <h2 className="uppercase text-primary-200 text-xl">
          armemos tu sistema de ventas inteligente
        </h2>

        <div className="flex items-stretch justify-between gap-4 w-full mx-auto flex-grow mt-5 h-full  ">
          <div className="flex w-1/2 flex-auto flex-col gap-5 items-start text-left ">
            <p className="text-primary-200 font-medium">¿En que momento de ciclo de vida de tu producto o servicio te encuentras?</p>
            <select
                onChange={handleSelect}
                name="cicloDeVida"
                id="cicloDeVida"
                className="w-full border-2 py-2.5 px-2 rounded text-sm text-primary-textGris"
              >
                <option disabled selected className="py-2.5">
                  {" "}
                  Selecciona
                </option>
                {arrayCicloVide?.map((puntaje, i) => (
                  <option
                    value={puntaje.label}
                    key={i}
                    // disabled={puntaje.state}
                    className={`py-2.5 font-medium `}
                  >
                    {" "}
                    {puntaje.label}
                  </option>
                ))}
              </select>
          </div>
          <div className="flex w-1/2 flex-auto flex-col gap-5 items-start text-left ">
          <p className="text-primary-200 font-medium">¿Que tipo de elementos de apoyo a la venta a la utilizarás?</p>
          <select
                onChange={handleSelect}
                name="elementoApoyo"
                id="elementoApoyo"
                className="w-full border-2 py-2.5 px-2 rounded text-sm text-primary-textGris mt-6"
              >
                <option disabled selected className="py-2.5">
                  {" "}
                  Selecciona
                </option>
                {arrayElementosApoyo?.map((puntaje, i) => (
                  <option
                    value={puntaje.label}
                    key={i}
                    // disabled={puntaje.state}
                    className={`py-2.5 font-medium `}>
                    {" "}
                    {puntaje.label}
                  </option>
                ))}
              </select>
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
