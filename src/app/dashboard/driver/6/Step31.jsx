"use client";

import React, { useEffect, useState } from "react";
import ButtonLeerMas from "./ButtonLeerMas";
import { contextUser } from "@/context/contextUser";
import { toast } from "react-hot-toast";

export default function Step31() {
  const { updateState, formCarga, drivers, activarFlyer } = contextUser(
    (state) => ({
      activarFlyer: state.activarFlyer,
      updateState: state.updateState,
      formCarga: state.formCarga,
      drivers: state.drivers,
      setCurrentStep: state.setCurrentStep,
    })
  );
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const handleChango = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const clickCargaFormulario = () => {
    if (!isEdit) {
      setIsEdit(true);
      toast.success("puedes editar");
    } else {
      if (!form.mes || !form.valorProyectado) {
        toast.error("Complete los campos");
      } else {
        updateState({
          formCarga: {
            ...formCarga,
            driver6: { formulario1: form },
          },
        });
        setIsEdit(false);
       
        activarFlyer(15);

        toast.success("Datos Guardados");
      }
    }
  };
  useEffect(() => {
    setIsLoading(false);
    if (formCarga?.driver6?.formulario1) {
      setForm(formCarga.driver6.formulario1);
    

      setIsLoading(true);
    }
  }, [formCarga, isLoading]);
  return (
    <>
      <div className=" flex flex-col items-baseline justify-between gap-3 h-full w-full mx-auto text-center">
        <h2 className="uppercase text-primary-200 text-xl">
          Definamos lo que para tu empresa es alto rendimiento comercial
        </h2>
        <p className="text-primary-200 text-left">
          {
            "Prioricemos, responde en orden de importancia lo que para ti represente en tu empresa el ARC, siendo 1 el mas importante y, así sucesivamente:"
          }
        </p>
        <div className="flex items-stretch justify-between gap-2 w-full mx-auto flex-grow flex-wrap"></div>
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
