"use client";

import React, { useEffect, useState } from "react";
import ButtonLeerMas from "./ButtonLeerMas";
import { contextUser } from "@/context/contextUser";
import { toast } from "react-hot-toast";

const select=[
  {label:"Accion 1",value:"accion1", state:false},
  {label:"Accion 2",value:"accion2", state:false},
  {label:"Accion 3",value:"accion3", state:false},
  {label:"Accion 4",value:"accion4", state:false},
  {label:"Accion 5",value:"accion5", state:false},

]
export default function Step33() {
  const { updateState, formCarga ,activarFlyer,cargarSubPantallas,drivers} = contextUser((state) => ({
    updateState: state.updateState,
    setCurrentStep:state.setCurrentStep,
    formCarga: state.formCarga,
    drivers: state.drivers,
    cargarSubPantallas:state.cargarSubPantallas,
    cargarForm: state.cargarForm,
    activarFlyer:state.activarFlyer
  }));
  const [form, setForm] = useState({});
  const [isEdit, setIsEdit] = useState(
    !formCarga?.driver5?.formulario3 ? false : true
  );
  const [selected, setSelected] = useState([]);
  const handleChango = (e) => {
    const { name, value } = e.target;
    setForm((form) =>
      formCarga?.driver5?.formulario3
        ? { ...formCarga?.driver5?.formulario3, [name]: value }
        : { ...form, [name]: value }
    );
  };

  const clickCargaFormulario = () => {
    if (!isEdit) {
      setIsEdit(true);
      toast.success("puedes editar");
    } else {
      if (!form.accion || !form.fechaInicio || !form.fechaSalida) {
        toast.error("Complete los campos");
      } else {
        updateState({
          formCarga: {
            ...formCarga,
            driver5: {
              ...formCarga.driver5,
              formulario2: form,
            },
          },
        });
        activarFlyer(22);
        updateState({drivers:{...drivers,driver5: { ...drivers.driver5, step3: true }} });
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
          <p className="text-sm text-primary-100 font-semibold">Estrategia Madre 2</p>
          <select
                onChange={handleChango}
                name="mes"
                id="mes"
                className="w-full border-2 py-2.5 px-2 rounded text-sm text-primary-textGris"
              >
                <option disabled selected className="py-2.5">
                  {" "}
                  Selecciona
                </option>
                {select.map((puntaje, i) => (
                  <option value={puntaje.value} key={i} className="py-2.5">
                    {" "}
                    {puntaje.label}
                  </option>
                ))}
              </select>
          </div>
          <div className="flex w-2/3 px-5 flex-auto flex-col items-center  gap-2">
            <input type="text" onChange={handleChango} name="accion" placeholder="Accion" className="border w-full py-2.5 px-2 text-sm rounded text-primary-textGris focus:outline-none"/>
            <div className="flex items-center justify-between w-full gap-2">
              <input type="date" name="fechaInicio" onChange={handleChango} id="fechaInicio"  className="border py-2 rounded w-1/2 text-primary-textGris text-sm px-3"/>
              <input type="date" name="fechaSalida" onChange={handleChango} id="fechaSalida"   className="border py-2 rounded w-1/2 text-primary-textGris text-sm px-3"/>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 w-full">
          <div className="space-x-4">
            <ButtonLeerMas label={"changeSubPantalla"} stepN={3}>
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
