"use client"

import { contextUser } from "@/context/contextUser";
import { useRouter } from "next/navigation";

export default function BotonSiguiente() {
    const router=useRouter()
    const { videoBienvenida} = contextUser((state) => ({
       
        videoBienvenida:state.fromCarga.videoBienvenida,
      }));

      const handleClick=()=>{
router.push('/dashboard/driver/1')
      }
  return (
    <button
    onClick={handleClick}
    disabled={videoBienvenida}
    className="bg-primary-200 disabled:bg-primary-200/40 font- rounded text-white capitalize text-xs px-5 py-3"
  >
    siguiente
  </button>
  )
}
