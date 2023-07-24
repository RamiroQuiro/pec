"use client"

import { contextUser } from "@/context/contextUser"

export default function ButtonLeerMas() {
    const activarFlyer=contextUser(state=>state.activarFlyer)


    const handleSiguiente=()=>{
        activarFlyer(1)
    }
  return (
    <button
    onClick={handleSiguiente}
    className="bg-primary-800 text-white rounded font-medium text-sm px-3 py-1.5">
      Leer mas...
    </button>
  )
}
