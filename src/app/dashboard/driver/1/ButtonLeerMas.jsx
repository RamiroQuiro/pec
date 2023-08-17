"use client";

import { contextUser } from "@/context/contextUser";

export default function ButtonLeerMas({ stepN, children, label }) {
  const activarFlyer = contextUser((state) => state.activarFlyer);
  const cargarSubPantallas = contextUser((state) => state.cargarSubPantallas);
  const setCurrentStep = contextUser((state) => state.setCurrentStep);
 
  const handleSiguiente =  () => {


    label == "changeSubPantalla"
      ? cargarSubPantallas(stepN)
      : label == "changeStep"
      ? setCurrentStep(stepN)
      : activarFlyer(stepN);
  };
  return (
    <button
      onClick={handleSiguiente}
      className="bg-primary-800 text-white rounded font-medium text-xs px-4 py-2"
    >
      {children}
    </button>
  );
}
