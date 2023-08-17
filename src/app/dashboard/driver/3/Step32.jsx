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
            PERFIL DE TU CLIENTE PRINCIPAL
          </h2>
          <p className="text-primary-200 text-lg tracking-wide leading-relaxed">
            El perfil de mi cliente es:
          </p>
        </div>
        <div className="flex items-stretch my-5 flex-grow h-full justify-between gap-2 w-full mx-auto  ">
          <div className="flex w-2/3  flex-auto flex-col items-start text-left ">
            <textarea
              onChange={handleChango}
              value={
                !isEdit
                  ? formCarga?.driver3?.formulario2?.perfilCliente
                  : form?.perfilCliente
              }
              name="perfilCliente"
              id="producto"
              cols="20"
              rows="5"
              className={`${
                !isEdit
                  ? "bg-gray-400/30 duration-300"
                  : "bg-transparent duration-300"
              } border-2 bg-transparent focus:outline-none rounded-lg h-5/6 w-full p-4 text-sm `}
            />
          </div>
          <div className="flex w-1/3 px-5 flex-auto flex-col items-center  gap-2">
            <p className="text-primary-200 font-medium">Guía tu descripción conforme a estas preguntas:</p>
            <p className="text-primary-textGris text-center font-medium text-sm">
             "¿Como piensa tu cliente?, ¿Que preferencias tiene tu cliente?,¿Que perfil psicologico tiene tu cliente?"
            </p>
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
