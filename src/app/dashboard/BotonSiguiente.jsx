"use client"

import { contextUser } from "@/context/contextUser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { shallow } from "zustand/shallow";

export default function BotonSiguiente() {
    const router=useRouter()
    const { videoBienvenida} = contextUser((state) => ({
       
        videoBienvenida:state.formCarga.videoBienvenida,
      }),shallow);
const [disabled, setDisabled] = useState(false)
      const handleClick=()=>{
router.push('/dashboard/driver/1')
      }
      useEffect(() => {
        setDisabled(videoBienvenida)
      
      }, [videoBienvenida])
      
  return (
    <button
    onClick={handleClick}
    disabled={!disabled}
    className="bg-primary-200 disabled:bg-primary-200/40 font- rounded text-white capitalize text-xs px-5 py-3"
  >
    siguiente
  </button>
  )
}
