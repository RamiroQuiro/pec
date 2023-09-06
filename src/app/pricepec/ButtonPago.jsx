"use client";

import { contextUser } from "@/context/contextUser";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function ButtonPago({ priceId,promoId }) {
const {email,fullName}=contextUser((state)=>state.userData)

  const [isLoading, setIsLoading] = useState(false)
  const cargarComprobante=contextUser(state=>state.cargarComprobante)
  const router = useRouter();
  const clickPago = async (obj) => {
    if (!email) {
      router.push('/login')
      toast.error('Ingrese su usuario')
    }
    setIsLoading(true)
    try {
      const res = await axios.post("/api/checkout", obj);
      if (res.status == 200) {
        cargarComprobante(res.data.id)
        router.push(res.data.url);
      }
    } catch (error) {
      setIsLoading(false)
      console.log(error);
    }
    setIsLoading(false)
  };
  return (
    <button
      onClick={() => clickPago({priceIds:priceId,email,promoId})}

      className={`${isLoading&&"bg-primary-200 animate-pulse duration-300"}  bg-primary-100 hover:bg-primary-200 duration-500 text-white font-bold capitalize w-full flex items-center justify-center py-3`}
    >
      {
        isLoading&&
        <><svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      
      </svg></>
      }

     {isLoading? "Procesando...":"Completar Pago"}
    </button>
  );
}