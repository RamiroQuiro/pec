"use client";

import React, { useEffect, useState } from "react";
import ButtonLeerMas from "./ButtonLeerMas";
import { contextUser } from "@/context/contextUser";
import { toast } from "react-hot-toast";

export default function Step34() {
  const {
    updateState,
    formCarga,
    activarFlyer,
    drivers,
  } = contextUser((state) => ({
    updateState: state.updateState,
    drivers: state.drivers,
    formCarga: state.formCarga,
    cargarSubPantallas: state.cargarSubPantallas,
    cargarForm: state.cargarForm,
    activarFlyer: state.activarFlyer,
  }));
  const [form, setForm] = useState({});
  const [newObj, setNewObj] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [seleccionado, setSeleccionado] = useState(1);
  const [isEdit, setIsEdit] = useState(false);
  const [select, setSelect] = useState([
    { label: "Accion 1", value: "1", state: false },
    { label: "Accion 2", value: "2", state: false },
    { label: "Accion 3", value: "3", state: false },
    { label: "Accion 4", value: "4", state: false },
    { label: "Accion 5", value: "5", state: false },
  ]);
  const handleChango = (e) => {
    const { name, value } = e.target;
    setNewObj((form) => ({ ...form, [name]: value }));
  };

  const clickCargaFormulario = () => {
    try {
      const objNews = { ...newObj, state: true };
      const array = formCarga?.driver5?.formulario4?.acciones;
      if (!array) {
        updateState({
          formCarga: {
            ...formCarga,
            driver5: {
              ...formCarga?.driver5,
              formulario4: {
                acciones: [objNews],
              },
            },
          },
        });
      } else {
        const busquedaEdit = array.findIndex(
          (element) => element.accion == objNews.accion
        );
        if (busquedaEdit !== -1) {
          array[busquedaEdit] = objNews;
        } else {
          array.push(objNews);
        }
        updateState({
          formCarga: {
            ...formCarga,
            driver5: {
              ...formCarga?.driver5,
              formulario4: {
                acciones: array,
              },
            },
          },
      
        });
      }
      setForm({});
      toast.success(
        `Acción ${objNews.accion}, Guardado con éxito, selecciona una siguiente accion hasta completar las 5 `,
        {
          position: "top-center",
          style: {
            backgroundColor: "#00699C",
            color: "white",
            fontSize: "20px",
            padding: "15px",
            height: "250px",
            textAnchor: "1px",
          },
          duration: 5000,
          className:
            "text-4xl text-white font-bold text-center rounded w-4/6 h-2/12",
        }
      );
      setIsEdit(false)
    } catch (error) {
      // Manejo de errores adecuado aquí
    }
  };
  // boton siguiente
  const handleSiguiente=()=>{
    activarFlyer(22)
    updateState({
      drivers:{...drivers, driver5: {...drivers.driver5, step3: true } }
    })
  }
  const handleSelect = (e) => {
    setSeleccionado(e.target.value);
    setNewObj((form) => ({
      ...form,
      accion: e.target.value,
    }));

    if (form?.acciones?.[e.target.value - 1]?.state) {
      setIsEdit(true);
    }
  };

  useEffect(() => {
    setIsLoading(false);
    if (formCarga?.driver5?.formulario4) {
      setForm(formCarga.driver5.formulario4);
      const data = formCarga?.driver5?.formulario4?.acciones;
      const array = select.map((element) => {
        let encontrado = data.findIndex(
          (elmnt) => elmnt.accion == element.value
        );
        if (encontrado != -1) {
          return {
            label: `Accion ${data[encontrado].accion}`,
            value: data[encontrado].accion,
            state: data[encontrado].state,
          };
        }
        return element;
      });

      setSelect(array);
    }
    setIsLoading(true);
  }, [formCarga, isLoading]);
  return (
    <>
      <div className=" flex flex-col items-baseline justify-between gap-1 h-full w-full mx-auto text-center">
        <div className="flex flex-col items-start justify-normal gap-3 text-left">
          <h2 className="uppercase text-primary-200 text-xl">
            ventas vs tiempo
          </h2>
          <p className="text-primary-200 text-lg tracking-wide leading-relaxed">
            A continuación haras un desglose de 5 principales acciones que
            habras de hacer para lograr cada una de tus ESTATEGIAS MADRE:
          </p>
        </div>
        {/* formularios */}
        {/* formularios */}
        {!isLoading ? (
          <div>Cargando</div>
        ) : (
          <div className="flex items-stretch my-5 flex-grow h-full justify-between gap-2 w-full mx-auto  ">
            <div className="flex w-1/3  flex-auto flex-col items-start text-left ">
              <p className="text-sm text-primary-100 font-semibold">
                Estrategia Madre 3
              </p>
              <select
                onChange={handleSelect}
                name="acciones"
                id="acciones"
                className="w-full border-2 py-2.5 px-2 rounded text-sm text-primary-textGris"
              >
                <option disabled selected className="py-2.5">
                  {" "}
                  Selecciona
                </option>
                {select?.map((puntaje, i) => (
                  <option
                    value={puntaje.value}
                    key={i}
                    // disabled={puntaje.state}
                    className={`py-2.5 font-medium ${
                      puntaje.state && "text-gray-400 line-through"
                    }`}
                  >
                    {" "}
                    {puntaje.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex w-2/3 px-5 flex-auto flex-col items-center  gap-2">
              <input
                type="text"
                onChange={handleChango}
                value={
                  isEdit?
                  form?.acciones &&
                  form.acciones[
                    form?.acciones?.findIndex(
                      (element) => element.accion == seleccionado
                    ) 
                  ]?.nameAccion
                  :
                  newObj?.nameAccion
                }
                name="nameAccion"
                placeholder="Accion"
                className="border w-full py-2.5 px-2 text-sm rounded text-primary-textGris focus:outline-none"
              />
              <div className="flex items-center justify-between w-full gap-2">
                <input
                  type="date"
                  value={
                    isEdit?
                    form?.acciones &&
                    form.acciones[
                      form?.acciones?.findIndex(
                        (element) => element.accion == seleccionado
                      ) 
                    ]?.fechaInicio
                    :
                    newObj?.fechaInicio
                  }
                  onChange={handleChango}
                  id="fechaInicio"
                  className="border py-2 rounded w-1/2 text-primary-textGris text-sm px-3"
                />
                <input
                  type="date"
                  name="fechaSalida"
                  onChange={handleChango}
                  value={
                    isEdit?
                    form?.acciones &&
                    form.acciones[
                      form?.acciones?.findIndex(
                        (element) => element.accion == seleccionado
                      ) 
                    ]?.fechaSalida
                    :
                    newObj?.fechaSalida
                  }
                  id="fechaSalida"
                  className="border py-2 rounded w-1/2 text-primary-textGris text-sm px-3"
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between gap-5 w-full">
          <div className="space-x-4">
            <ButtonLeerMas stepN={21}>Anterior</ButtonLeerMas>
            {select.every((element) => element.state == true) && (
              <button
              onClick={handleSiguiente}
              className="bg-primary-800 text-white rounded font-medium text-xs w-24 py-2.5 disabled:bg-primary-800/50">
                Siguiente
              </button>
            )}
          </div>
          <button
            onClick={isEdit?()=>setIsEdit(!isEdit):clickCargaFormulario}
            className="bg-primary-600 text-white rounded font-medium text-xs w-24 py-2.5"
          >
            {isEdit ? "Editar" : "Guardar"}
          </button>
        </div>
      </div>
    </>
  );
}
