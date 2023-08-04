"use client";

import { contextUser } from "@/context/contextUser";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ButtonPago({ priceId }) {
  const {data,status}=useSession()

  const cargarComprobante=contextUser(state=>state.cargarComprobante)
  const router = useRouter();
  const clickPago = async (obj) => {
    try {
      const res = await axios.post("/api/checkout", obj);
      if (res.status == 200) {
        cargarComprobante(res.data.id)
        router.push(res.data.url);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      onClick={() => clickPago({priceId,email:data?.user?.email})}
      className="bg-primary-100 hover:bg-primary-200 duration-500 text-white font-bold capitalize w-full py-4"
    >
      Comprar Ahora
    </button>
  );
}
