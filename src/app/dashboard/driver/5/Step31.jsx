"use client";

import React, { useEffect, useState } from "react";
import ButtonLeerMas from "./ButtonLeerMas";
import { contextUser } from "@/context/contextUser";
import { toast } from "react-hot-toast";

export default function Step31() {
  const [select, setSelect] = useState([
    {periodo:"Mes 1",value:"mes1",state:false,id:0},
    {periodo:"Mes 2",value:"mes2",state:false,id:1},
    {periodo:"Mes 3",value:"mes3",state:false,id:2},
    {periodo:"Mes 4",value:"mes4",state:false,id:3},
    {periodo:"Mes 5",value:"mes5",state:false,id:4},
    {periodo:"Mes 6",value:"mes6",state:false,id:5},
    {periodo:"Mes 7",value:"mes7",state:false,id:6},
    {periodo:"Mes 8",value:"mes8",state:false,id:7},
    {periodo:"Mes 9",value:"mes9",state:false,id:8},
    {periodo:"Mes 10",value:"mes10",state:false,id:9},
    {periodo:"Mes 11",value:"mes11",state:false,id:10},
    {periodo:"Mes 12",value:"mes12",state:false,id:11},
  ]);
  const [form, setForm] = useState({});
  const [newObj, setNewObj] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [seleccionado, setSeleccionado] = useState(1);
  const [isEdit, setIsEdit] = useState(false);
  const { updateState, formCarga, drivers, activarFlyer } = contextUser(
    (state) => ({
      activarFlyer: state.activarFlyer,
      updateState: state.updateState,
      formCarga: state.formCarga,
      drivers: state.drivers,
      setCurrentStep: state.setCurrentStep,
    })
  );






  useEffect(() => {
    if (formCarga?.driver5?.formulario1) {
      setForm(formCarga.driver5.formulario1);
      const data = formCarga?.driver5?.formulario1.periodos
      const array = select.map((element,i) => {
       
        let encontrado = data?.findIndex(
          (elmnt) => elmnt.id == element.id
        );
        if (encontrado != -1) {
          return {
            id:element.id,
            periodo: `Mes ${i+1}`,
            value: data[encontrado].value,
            state: data[encontrado].state,
          };
        }
        return element;
      });

      setSelect(array);
    }
  }, [formCarga]);





  const handleChango = (e) => {
    const { name, value } = e.target;
    setNewObj((form) => ({ ...form, [name]: value }));
  };


  const clickCargaFormulario = () => {
    try {
      const objNews = { ...newObj, state: true ,id:seleccionado};
      const array = formCarga?.driver5?.formulario1?.periodos;
      if (!array) {
        updateState({
          formCarga: {
            ...formCarga,
            driver5: {
              ...formCarga?.driver5,
              formulario1: {
                periodos: [objNews],
              },
            },
          },
        });
      } else {
        const busquedaEdit = array.findIndex(
          (element) => element.value == objNews.value
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
              formulario1: {
                periodos: array,
              },
            },
          },
        });
      }
      setForm({});
      toast.success(
        `Mes ${Number(seleccionado)+1}, Guardado con éxito, selecciona una siguiente accion hasta completar los 12 meses `,
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
  
  const handleSelect = (e) => {
    setSeleccionado(e.target.value);
    setNewObj((form) => ({
      ...form,
      value:` mes${Number(e.target.value)+1}`,
    }));
    const array = formCarga?.driver5?.formulario1?.periodos;
    if (!array)return
    const busquedaEdit = array.findIndex(
      (element) => element.id == e.target.value
    );
    if (form?.periodos?.[busquedaEdit]?.state) {
     setNewObj(form?.periodos?.[busquedaEdit])
      setIsEdit(true);
    }
  };
  return (
    <>
      <div className=" flex flex-col items-baseline justify-between gap-3 h-full w-full mx-auto text-center">
        <h2 className="uppercase text-primary-200 text-xl">Ventas vs tiempo</h2>
        <p className="text-primary-200 text-left">
          {
            " Por favor menciona (en tu moneda, pesos dls, etc) las ventas proyectadas a 12 meses a partir de la fecha de término de este documento:"
          }
        </p>
        <div className="flex items-stretch justify-between gap-2 w-full mx-auto flex-grow ">
          <div className="w-2/3 flex items-start justify-start mt-5">
            <div className="flex w-1/3 px-10 flex-auto flex-col items-start  gap-1">
              <label className="text-primary-100 text-sm font-medium">
                Selecciona y contesta uno a la vez
              </label>
              <select
                onChange={handleSelect}
                name="periodo"
                id="mes"
                className="w-full border-2 py-2.5 px-2 rounded text-sm text-primary-textGris"
              >
                <option disabled selected className="py-2.5">
                  {" "}
                  Selecciona
                </option>
                {select.map((mes, i) => (
                  <option value={mes.id}  key={i}    className={`py-2.5 font-medium ${
                    mes.state && "text-gray-400 line-through"
                  }`}>
                    {" "}
                    {mes.periodo}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex w-1/3 px-10 flex-auto flex-col items-start  gap-1">
              <label className="text-primary-100 text-sm font-medium">
                Selecciona y contesta uno a la vez
              </label>
              <input
                value={newObj.valorProyectado}
                onChange={handleChango}
                name="valorProyectado"
                type="text"
                placeholder="Ingrear monto"
                className="border-2 rounded py-2.5  w-full px-2 focus:outline-none text-sm text-primary-textGris"
              />
            </div>
          </div>
          <div className="w-1/3 flex items-start justify-start mt-5">
            <p className=" px-5 text-sm text-primary-100 italic">
              {
                '"Esta proyeccion puede ser proyectada también por bimestres, trimestres y a plazos largos, el ejercicio es una muestra de como realizarlo."'
              }
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 w-full">
          <div className="space-x-4">
            <ButtonLeerMas stepN={14}>Anterior</ButtonLeerMas>
            {select.every((element) => element.state == true) && (
              <ButtonLeerMas stepN={15}>Siguiente</ButtonLeerMas>
            )}
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
