"use client";

import React, { useEffect, useState } from "react";
import ButtonLeerMas from "./ButtonLeerMas";
import { contextUser } from "@/context/contextUser";
import { toast } from "react-hot-toast";

export default function Step31() {
  const { updateFormCarga, formCarga, cargarForm } = contextUser((state) => ({
    updateFormCarga: state.updateFormCarga,
    formCarga: state.formCarga,
    cargarForm: state.cargarForm,
  }));
  const [form, setForm] = useState(formCarga);
  const [isNext, setIsNext] = useState(true);
  const handleChango = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };
  const clickCargaFormulario = () => {
    if (!form.producto1 && !form.producto2) {
      toast.error("Complete los campos");
    } else {
      updateFormCarga("driver2","formulario2",form);
      setIsNext(!isNext);
      toast.success("Datos Guardados");
    }
  };
  return (
    <>
      <div className=" flex flex-col items-baseline justify-between gap-1 h-full w-full mx-auto text-center">
        <h2 className="uppercase text-primary-200 text-xl">
          DEFINE TU OFERTA COMERCIAL
        </h2>
        <p className="text-primary-100 mb-5 text-left font-semibold text-xl ">
       Describe el contratipo de la competencia haciendo ver las diferencias entre ambos y los argumnetos que justifican el precio de tu oferta comercial
        </p>
        <div className="flex items-center justify-between gap-2 w-full mx-auto flex-grow ">
        
            <div className="flex w-1/2 flex-auto flex-col items-start text-left ">
              <label htmlFor="producto1" className="text-primary-100">
                Producto/Servicio 1:
              </label>
              <textarea
                onChange={handleChango}
                name="producto1"
                id="producto"
                cols="20"
                rows="5"
                className="border-2 bg-transparent focus:outline-none rounded-lg w-full p-4 text-sm"
              />
            </div>
            <div className="flex w-1/2 flex-auto flex-col items-start text-left ">
              <label htmlFor="competencia" className="text-primary-100">
                Competencia:
              </label>
              <textarea
                onChange={handleChango}
                name="competencia"
                id="producto"
                cols="20"
                rows="5"
                className="border-2 rounded-lg w-full bg-transparent focus:outline-none p-4 text-sm"
              />
            </div>
        
        </div>
        <div className="flex items-center justify-between gap-5 w-full">
          <div className="space-x-4">
            <ButtonLeerMas label={"changeSubPantalla"} stepN={2}>Anterior</ButtonLeerMas>
            <ButtonLeerMas disable={isNext} label={"changeSubPantalla"} stepN={4}>
              Siguiente
            </ButtonLeerMas>
          </div>
          <button
            onClick={clickCargaFormulario}
            className="bg-primary-600 text-white rounded font-medium text-xs px-4 py-2"
          >
            Guardar
          </button>
        </div>
      </div>
    </>
  );
}
