"use client"

import { contextUser } from "@/context/contextUser"

export default function ButtonLeerMas({stepN,children,label}) {
    const activarFlyer=contextUser(state=>state.activarFlyer)
    const setCurrentStep=contextUser((state)=>state.setCurrentStep) 

    const handleSiguiente=()=>{
       label=="changeStep"?
       setCurrentStep(stepN):
       activarFlyer(stepN)
    }
  return (
    <button
    onClick={handleSiguiente}
    className="bg-primary-800 text-white rounded font-medium text-xs px-3 py-1.5">
  {children}
    </button>
  )
}
