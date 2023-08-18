"use client";

import React, { useEffect, useState } from "react";
import ButtonLeerMas from "./ButtonLeerMas";
import { contextUser } from "@/context/contextUser";
import { toast } from "react-hot-toast";

export default function Step32() {
  const { updateState, formCarga ,activarFlyer} = contextUser((state) => ({
    updateState: state.updateState,
    formCarga: state.formCarga,
    cargarForm: state.cargarForm,
    activarFlyer:state.activarFlyer
  }));
  const [form, setForm] = useState({});
  const [isEdit, setIsEdit] = useState(
    !formCarga?.driver2?.formulario1 ? true : false
  );
  const handleChango = (e) => {
    const { name, value } = e.target;
    setForm((form) =>
      formCarga?.driver3?.formulario1
        ? { ...formCarga?.driver3?.formulario1, [name]: value }
        : { ...form, [name]: value }
    );
  };

  const clickCargaFormulario = () => {
    if (!isEdit) {
      setIsEdit(true);
      toast.success("puedes editar");
    } else {
      if (!form.perfilCliente) {
        toast.error("Complete los campos");
      } else {
        updateState({
          formCarga: {
            ...formCarga,
            driver3: {
              ...formCarga.driver3,
              formulario2: form,
            },
          },
        });
        activarFlyer(9)
        setIsEdit(false);
        toast.success("Datos Guardados");
      }
    }
  };
  return (
    <>
      <div className=" flex flex-col items-baseline justify-between gap-1 h-full w-full mx-auto text-center">
        <div className="flex flex-col items-start justify-normal gap-3 text-left">
          <h2 className="uppercase text-primary-200 text-xl">
           ventas vs tiempo
          </h2>
          <p className="text-primary-200 text-lg tracking-wide leading-relaxed">
            A continuación haras un desglose de 5 principales acciones que habras de hacer para lograr cada una de tus ESTATEGIAS MADRE:
          </p>
        </div>
        {/* formularios */}
        <div className="flex items-stretch my-5 flex-grow h-full justify-between gap-2 w-full mx-auto  ">
          <div className="flex w-1/3  flex-auto flex-col items-start text-left ">
            <label htmlFor="acciones w-full">Estrategia Madre1</label>
           <select name="acciones" id="acciones" className="w-full py-2.5 rounded border border-primary-textGris"><option value="accion1"></option></select>
          </div>
          <div className="flex w-2/3 px-5 flex-auto flex-col items-center  gap-2">
            <input type="text" placeholder="Accion" className="border py-2.5"/>
            <div>
              <input type="date" name="fechaInicio" id="fechaInicio" /><input type="date" name="fechaSalida" id="fechaSalida" placeholder="fechaInicio" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 w-full">
          <div className="space-x-4">
            <ButtonLeerMas label={"changeSubPantalla"} stepN={2}>
              Anterior
            </ButtonLeerMas>
          </div>
          <button
            onClick={clickCargaFormulario}
            className="bg-primary-600 text-white rounded font-medium text-xs w-24 py-2.5"
          >
            {!isEdit ? "Guardar" : "Editar"}
          </button>
        </div>
      </div>
    </>
  );
}
