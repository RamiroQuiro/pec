"use client";

import React, { useEffect, useState } from "react";
import ButtonLeerMas from "./ButtonLeerMas";
import { contextUser } from "@/context/contextUser";
import { toast } from "react-hot-toast";

const offline=[
  {
    id:1,
    label:"Radio"
  },
  {
    id:2,
    label:"TV"
  },
  {
    id:3,
    label:"Revistas"
  },
  {
    id:4,
    label:"Vallas"
  },
  {
    id:5,
    label:"Volanteo"
  },
  {
    id:6,
    label:"Espectaculares"
  },
  {
    id:7,
    label:"Activaciones de Marca"
  },

]
const online=[
  {
    id:1,
    label:"Redes Sociales"
  },
  {
    id:2,
    label:"Facebook"
  },
  {
    id:3,
    label:"Instagram"
  },
  {
    id:4,
    label:"Tiktok"
  },
  {
    id:5,
    label:"Linkedin"
  },
  {
    id:6,
    label:"Otros"
  },

]

export default function Step32() {
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
    formCarga?.driver8?.formulario2 ? formCarga?.driver8?.formulario2 : {}
  );
  const handleChango = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const clickCargaFormulario = () => {
    if (!form.offline && !form.online) {
      toast.error("Complete los campos");
    } else {
      updateState({
        formCarga: {
          ...formCarga,
          driver8: { ...formCarga.driver8,formulario2: form },
        },
      });

      cargarSubPantallas(4);

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

        <h3 className="text-primary-200 text-lg ">¿Que tipo de campaña de marketing utilizarias?</h3>
        <div className="flex items-stretch justify-between gap-4 w-full mx-auto flex-grow mt-5 h-full  ">
          
          <div className="flex w-1/2 flex-auto flex-col gap-5 items-start text-left ">
            <p className="text-primary-100 font-medium">Offline:</p>
            <select
                onChange={handleSelect}
                name="offline"
                id="offline"
                className="w-full border-2 py-2.5 px-2 rounded text-sm text-primary-textGris"
              >
                <option disabled selected className="py-2.5">
                  {" "}
                  Selecciona
                </option>
                {offline?.map((puntaje, i) => (
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
          <p className="text-primary-100 font-medium">Online:</p>
          <select
                onChange={handleSelect}
                name="online"
                id="online"
                className="w-full border-2 py-2.5 px-2 rounded text-sm text-primary-textGris "
              >
                <option disabled selected className="py-2.5">
                  {" "}
                  Selecciona
                </option>
                {online?.map((puntaje, i) => (
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
