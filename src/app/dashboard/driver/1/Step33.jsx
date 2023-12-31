"use client";
import React, { useEffect, useState } from "react";
import ButtonLeerMas from "./ButtonLeerMas";
import SelectExample from "./SelectExample";
import { contextUser } from "@/context/contextUser";

const select = [
  { label: "Esfuerzo", value: "esfuerzo" },
  { label: "Proactividad", value: "proactividad" },
  { label: "Compromiso", value: "compromiso" },
  { label: "Profesionalismo", value: "profesionalismo" },
  { label: "Ritmo de Trabajo", value: "ritmoTrabajo" },
  { label: "Confiabilidad", value: "confiabilidad" },
  { label: "Sentido de Urgencia", value: "sentidoUrgencia" },
  { label: "Capacidad de Respuesta", value: "capacidadRepuesta" },
  { label: "Trabajo en Equipo", value: "trabajoEquipo" },
  { label: "Honestidad", value: "honestidad" },
  { label: "Honradez", value: "honradez" },
];
export default function Step33() {
  const formCarga = contextUser((state) => state.formCarga);
  const { updateState, drivers } = contextUser((state) => ({
    drivers: state.drivers,
    updateState: state.updateState,
  }));
  const [selected, setSelected] = useState([]);
  const cargarForm = contextUser((state) => state.cargarForm);
  const [form, setForm] = useState(formCarga);
  useEffect(() => {
    setForm((form) => ({
      ...form,
      driver1: {
        ...form.driver1,
        spet33: {
          select: selected,
        },
      },
    }));
    updateState({
      formCarga: {
        ...formCarga,
        driver1: {
          ...formCarga.driver1,
          formulario3: selected,
        },
      },
    });
  }, [selected]);

  return (
    <>
      <div className=" flex flex-col flex-grow items-baseline justify-between gap-3 h-full w-full mx-auto text-center">
        <h2 className="uppercase text-primary-200 text-xl">
          ARMEMOS TU PROPIA CULTURA ORGANIZACIONAL
        </h2>
        <div className="flex flex-col md:flex-row flex-grow items-center justify-between gap-2 md:w-11/12 w-full mx-auto  ">
          <p className="text-primary-100 font-medium text-left md:w-1/2 text-xl">
            Selecciona los 3 Valores más importantes para tu equipo comercial
          </p>
          <div className="md:w-1/3  w-full pl-5 mb-16 md:mb-0">
            <SelectExample
              selected={selected}
              setSelected={setSelected}
              options={select}
              labelSpan={"selecciona 5 como maximo"}
            />
          </div>
        </div>
        <div className="flex items-center justify-normal gap-5">
          <ButtonLeerMas label={"changeSubPantalla"} stepN={3}>
            Anterior
          </ButtonLeerMas>
          <ButtonLeerMas stepN={20}>Siguiente</ButtonLeerMas>
        </div>
      </div>
    </>
  );
}
