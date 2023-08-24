"use client";

import React, { useEffect, useState } from "react";
import ButtonLeerMas from "./ButtonLeerMas";
import { contextUser } from "@/context/contextUser";
import { toast } from "react-hot-toast";

export default function Step31() {
  const { updateState, formCarga,  } = contextUser((state) => ({
    updateState: state.updateState,
    formCarga: state.formCarga,
    cargarForm: state.cargarForm,
  }));
  const [form, setForm] = useState({});
  const [isEdit, setIsEdit] = useState(
    !formCarga?.driver2?.formulario1  ? true : false
  );

  const handleChango = (e) => {
    const { name, value } = e.target;
    setForm((form) => (formCarga?.driver2?.formulario1  ?{ ...formCarga?.driver2?.formulario1, [name]: value }:{...form,[name]:value}));
  };

  const clickCargaFormulario = () => {
    if (!isEdit) {
      setIsEdit(true);
      toast.success("puedes editar");
    } else {
      if (!form.producto1 && !form.producto2) {
        toast.error("Complete los campos");
      } else {
        updateState({
          formCarga: {
            ...formCarga,
            driver2: { formulario1: form },
          },
        });
        setIsEdit(false);
        toast.success("Datos Guardados");
      }
    }
  };
  return (
    <>
      <div className=" flex flex-col items-baseline justify-between gap-3 h-full w-full mx-auto text-center">
        <h2 className="uppercase text-primary-200 text-xl">
          DEFINE TU OFERTA COMERCIAL
        </h2>
        <p className="text-primary-100 mb-5 font-semibold text-xl tracking-wide leading-relaxed">
          Describe las características de cada producto/servicio
        </p>
        <div className="flex items-center justify-between gap-2 w-full mx-auto  ">
          <div className="flex w-1/2 flex-auto flex-col items-start text-left ">
            <label htmlFor="producto1" className="text-primary-100">
              Producto/Servicio 1:
            </label>
            <textarea
              onChange={handleChango}
              value={
                !isEdit
                  ? formCarga?.driver2?.formulario1?.producto1
                  : form?.producto1
              }
              name="producto1"
              id="producto"
              cols="20"
              rows="5"
              className={`${
               ! isEdit
                  ? "bg-gray-400/30 duration-300"
                  : "bg-transparent duration-300"
              } border-2 bg-transparent focus:outline-none rounded-lg w-full p-4 text-sm `}
            />
          </div>
          <div className="flex w-1/2 flex-auto flex-col items-start text-left ">
            <label htmlFor="producto2" className="text-primary-100">
              Producto/Servicio 2:
            </label>
            <textarea
              onChange={handleChango}
              value={
                !isEdit
                  ? formCarga?.driver2?.formulario1?.producto2
                  : form?.producto2
              }
              name="producto2"
              id="producto"
              cols="20"
              rows="5"
              className={`${
                !isEdit
                  ? "bg-gray-400/30 duration-300"
                  : "bg-transparent duration-300"
              } border-2 bg-transparent focus:outline-none rounded-lg w-full p-4 text-sm `}
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 w-full">
          <div className="space-x-4">
            <ButtonLeerMas stepN={13}>Anterior</ButtonLeerMas>
            <ButtonLeerMas
              disable={isEdit}
              label={"changeSubPantalla"}
              stepN={3}
            >
              Siguiente
            </ButtonLeerMas>
          </div>
          <button
            onClick={clickCargaFormulario}
            className="bg-primary-600 text-white rounded font-medium text-xs px-4 py-2"
          >
            {isEdit ? "Guardar" : "Editar"}
          </button>
        </div>
      </div>
    </>
  );
}
