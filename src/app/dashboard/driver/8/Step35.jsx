"use client";

import React, { useEffect, useState } from "react";
import ButtonLeerMas from "./ButtonLeerMas";
import { contextUser } from "@/context/contextUser";
import { toast } from "react-hot-toast";
import { SVGSize, UploadCloud } from "@/app/componentes/SVGComponent";

export default function Step35() {
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
    formCarga?.driver8?.formulario3 ? formCarga?.driver8?.formulario3 : {}
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
          driver8: { ...formCarga.driver8, formulario4: form },
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
        <div className="flex items-stretch justify-between gap-4 w-full mx-auto flex-grow mt-5 h-full  ">
          <div className="flex w-2/3 flex-auto flex-col  items-center gap-8 text-left ">
            <p className="text-primary-200 text-lg font-thin">
              Carga tu diagrama de flujo inteligente de tu Sistema de Ventas
            </p>
            <div className="flex flex-col items-center justify-normal cursor-pointer">
              <UploadCloud className="w-20 h-20  mx-auto fill-primary-700" />
              <span className="text-sm text-primary-textGris mx-auto">
                Click aqui para cargar tu archivo
              </span>
            </div>
          </div>
          <div className="flex w-1/3 flex-auto flex-col gap-5 items-start text-left ">
            <p className="text-primary-100 font-medium mx-auto">
              Observa este ejemplo
            </p>
            <div className="mx-auto ">
              <SVGSize className="w-20 h-20  mx-auto fill-transparent" />
              <span className="text-sm text-primary-textGris mx-auto">
                Click Aqui...
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 w-full">
          <div className="space-x-4">
            <ButtonLeerMas label="changeSubPantalla" stepN={3}>
              Anterior
            </ButtonLeerMas>
          </div>
          <button
            onClick={clickCargaFormulario}
            className="bg-primary-600 text-white rounded font-medium text-xs w-24 py-2.5"
          >
            Guardar{" "}
          </button>
        </div>
      </div>
    </>
  );
}
