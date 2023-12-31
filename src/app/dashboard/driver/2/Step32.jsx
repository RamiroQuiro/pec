"use client";

import React, { useEffect, useState } from "react";
import ButtonLeerMas from "./ButtonLeerMas";
import { contextUser } from "@/context/contextUser";
import { toast } from "react-hot-toast";

export default function Step32() {
  const { updateState, formCarga,  } = contextUser((state) => ({
    updateState: state.updateState,
    formCarga: state.formCarga,
    cargarForm: state.cargarForm,
  }));
  const [form, setForm] = useState(
    formCarga?.driver2?.formulario2? formCarga?.driver2?.formulario2 : {}
  );
  const [isEdit, setIsEdit] = useState(
    !formCarga?.driver2?.formulario1  ? true : false
  );
  const handleChango = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({...form,[name]:value}));
  };

  const clickCargaFormulario = () => {
    if (!isEdit) {
      setIsEdit(true);
      toast.success("puedes editar");
    } else {
      if (!form.producto1 && !form.competencia) {
        toast.error("Complete los campos");
      } else {
      updateState({
        formCarga:{
          ...formCarga,
        driver2:{
          ...formCarga.driver2,
          formulario2:form
        }}
      });
      setIsEdit(false);
        toast.success("Datos Guardados");
      }
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 w-full mx-auto flex-grow ">
        
            <div className="flex w-full md:w-1/2 flex-auto flex-col items-start text-left ">
              <label htmlFor="producto1" className="text-primary-100">
                Producto/Servicio 1:
              </label>
              <textarea
                 value={
                  !isEdit
                    ? formCarga?.driver2?.formulario2?.producto1
                    : form?.producto1
                }
                onChange={handleChango}
                name="producto1"
                id="producto1"
                cols="20"
                rows="5"
                className={`${
                  ! isEdit
                  ? "bg-gray-400/30 duration-300"
                  : "bg-transparent duration-300"
              } border-2 bg-transparent focus:outline-none rounded-lg w-full p-4 text-sm `}
              />
            </div>
            <div className="flex w-full md:w-1/2 flex-auto flex-col items-start text-left ">
              <label htmlFor="competencia" className="text-primary-100">
                Competencia:
              </label>
              <textarea
                
                onChange={handleChango}
                name="competencia"
                id="competencia"
                cols="20"
                rows="5"
                value={
                  !isEdit
                    ? formCarga?.driver2?.formulario2?.competencia
                    : form?.competencia
                }
                className={`${
                  ! isEdit
                  ? "bg-gray-400/30 duration-300"
                  : "bg-transparent duration-300"
              } border-2 bg-transparent focus:outline-none rounded-lg w-full p-4 text-sm `}
              />
            </div>
        
        </div>
        <div className="flex items-center justify-between gap-5 w-full md:mt-0 mt-5">
          <div className="space-x-4 ">
            <ButtonLeerMas label={"changeSubPantalla"} stepN={2}>Anterior</ButtonLeerMas>
            <ButtonLeerMas disable={isEdit} label={"changeSubPantalla"} stepN={4}>
              Siguiente
            </ButtonLeerMas>
          </div>
          <button
            onClick={clickCargaFormulario}
            className="bg-primary-600 text-white rounded font-medium text-xs px-4 py-2"
          >     {isEdit ? "Guardar" : "Editar"}
          </button>
        </div>
      </div>
    </>
  );
}
