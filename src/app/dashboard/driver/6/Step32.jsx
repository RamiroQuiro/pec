"use client";

import React, { useEffect, useState } from "react";
import ButtonLeerMas from "./ButtonLeerMas";
import { contextUser } from "@/context/contextUser";
import { toast } from "react-hot-toast";
import InputsNumeros from "./InputsNumeros";

const array = [
  {
    id: 1,
    children: "Alto Agrado de Satifaccion de Clientes",
    position: "",
  },
  {
    id: 2,
    children:
      "Cumplimiento y Metas Comerciales",
    position: "",
  },
  {
    id: 3,
    children:
      "Excelencia en el seguimiento de procesos comerciales",
    position: "",
  },
  {
    id: 4,
    children: "Reconocimiento en tu segmento por empresa innovadora",
    position: "",
  },
  
];

export default function Step32() {
  const { updateState, formCarga, drivers, activarFlyer} = contextUser(
    (state) => ({
      activarFlyer: state.activarFlyer,
      updateState: state.updateState,
      formCarga: state.formCarga,
      drivers: state.drivers,
      setCurrentStep: state.setCurrentStep,
    })
  );
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  //onChange
  const handleChango = (e) => {
    const { name, value, id } = e.target;
    const findIndice = array.findIndex((element) => element.id == id);
    // Comprobar si el valor ya existe en otro objeto del array
    const isState = array.some(
      (element) => element.position == value && element.id != id
    );
    // Si el valor no existe, asignarlo al objeto correspondiente
    if (!isState) {
      array[findIndice].position = value;
      setForm(array);
    } else {
      // Si el valor existe, mostrar un mensaje de error o hacer otra acción
      toast.error("El valor ya está utilizado, no se tomara este valor", {
        style: {
          textAlign: "left",
        },
      });
    }
  };

  const clickCargaFormulario = () => {
    if (!isEdit) {
      setIsEdit(true);
      toast.success("puedes editar");
    } else {
      const isComplet = form.some((element) => element.position == "");
      if (isComplet) {
        toast.error("Complete los campos");
      } else {
        updateState({
          formCarga: {
            ...formCarga,
            driver6: { ...formCarga.driver6, formulario2: form },
          },
        });
        setIsEdit(false);

        activarFlyer(16);

        toast.success("Datos Guardados");
      }
    }
  };
  useEffect(() => {
    setIsLoading(false);
    if (!formCarga?.driver6?.formulario2) return;
    if (formCarga?.driver6?.formulario2) {
      setForm(formCarga.driver6.formulario2);
      setIsEdit(true);

      setIsLoading(true);
    }
  }, [formCarga, isLoading]);
  console.log(form);

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
        <div className="flex md:flex-row flex-col items-stretch justify-between py-2 gap-x-8 gap-y-5 w-full mx-auto flex-grow flex-wrap">
          {array?.map((element, i) => {
            return (
              <InputsNumeros
                key={element.id}
                id={element.id}
                value={form[i]?.position}
                onChange={handleChango}
              >
                {element.children}
              </InputsNumeros>
            );
          })}
        </div>
        <div className="flex items-center justify-between gap-5 w-full">
          <div className="space-x-4">
            <ButtonLeerMas label={"changeSubPantalla"} stepN={2}>Anterior</ButtonLeerMas>
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
