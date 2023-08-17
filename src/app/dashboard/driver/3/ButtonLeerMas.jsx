"use client"

import { contextUser } from "@/context/contextUser"

export default function ButtonLeerMas({stepN,children,label,disable}) {
    const activarFlyer=contextUser(state=>state.activarFlyer)
    const cargarSubPantallas=contextUser(state=>state.cargarSubPantallas)
    const setCurrentStep=contextUser((state)=>state.setCurrentStep) 

    const handleSiguiente=()=>{
      label=="changeSubPantalla"?
      cargarSubPantallas(stepN):
       label=="changeStep"?
       setCurrentStep(stepN):
       //por default cambia de flyer
       activarFlyer(stepN)
    }
  return (
    <button
    disabled={disable}
    onClick={handleSiguiente}
    className="bg-primary-800 text-white rounded font-medium text-xs w-24 py-2.5 disabled:bg-primary-800/50">
  {children}
    </button>
  )
}
