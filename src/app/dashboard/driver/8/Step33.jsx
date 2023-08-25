"use client";

import React, { useEffect, useState } from "react";
import ButtonLeerMas from "./ButtonLeerMas";
import { contextUser } from "@/context/contextUser";
import { toast } from "react-hot-toast";

const arrayVideos=[
  {
    id:1,
    label:"Youtube"
  },
  {
    id:2,
    label:"Vimeo"
  },
  {
    id:3,
    label:"Otros"
  },
 
]
const arrayWeb=[
  {
    id:1,
    label:"Pagina Web"
  },
  {
    id:2,
    label:"App Comercial"
  },
  

]

export default function Step33() {
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
    formCarga?.driver8?.formulario3 ? formCarga?.driver8?.formulario3 : {}
  );
  const handleChango = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const clickCargaFormulario = () => {
    if (!form.web && !form.videos) {
      toast.error("Complete los campos");
    } else {
      updateState({
        formCarga: {
          ...formCarga,
          driver8: { ...formCarga.driver8,formulario3: form },
        },
      });

      cargarSubPantallas(5);

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
            <p className="text-primary-100 font-medium">Video en Plataformas</p>
            <select
                onChange={handleSelect}
                name="videos"
                id="videos"
                className="w-full border-2 py-2.5 px-2 rounded text-sm text-primary-textGris"
              >
                <option disabled selected className="py-2.5">
                  {" "}
                  Selecciona
                </option>
                {arrayVideos?.map((puntaje, i) => (
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
          <p className="text-primary-100 font-medium">Web</p>
          <select
                onChange={handleSelect}
                name="web"
                id="web"
                className="w-full border-2 py-2.5 px-2 rounded text-sm text-primary-textGris "
              >
                <option disabled selected className="py-2.5">
                  {" "}
                  Selecciona
                </option>
                {arrayWeb?.map((puntaje, i) => (
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
            <ButtonLeerMas label="changeSubPantalla" stepN={3}>Anterior</ButtonLeerMas>
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
