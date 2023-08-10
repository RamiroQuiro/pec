"use client"
import React, { useEffect, useState } from "react";
import ButtonPago from "../ButtonPago";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function CompletarPago() {
    const [form, setForm] = useState({cuponID:""})
    const [prices, sePrices] = useState(null);
    const router=useRouter()
      useEffect(() => {
        const res = async () => {
          const respuesta = await axios.get("/api/list");
          console.log(respuesta)
          // Manejo de la respuesta de la consulta
          if (respuesta) {
            sePrices(respuesta.data);
          } else {
            sePrices(respuesta.data);
          }
        };
        res();
      }, []);
      const handleChangle=(e)=>{
        setForm(form=>({
            ...form,cuponID:e.traget.value
        }))
      }
  return (
    <div className="flex flex-col p-10 items-center justify-stretch bg-[#F5F5F5] w-1/2 h-full ">
    {!prices?  <div className=" w-full my-10 mb-20 bg-gray-300 animate-pulse"></div>:<div className=" w-full my-10 mb-20">
        <p className="text-lg font-bold mt-5">Resumen</p>
        <div className="w-full border-primary-textGris border-b-2 flex items-center justify-between text-xs pb-1 px-2 my-2">
          <p>Precio Original</p>
          <p>{new Intl.NumberFormat("de-DE").format(
                prices[0]?.unit_amount / 100
              )}{" "}
              {prices[0]?.currency}+IVA</p>
        </div>
        <div className="w-full flex items-center justify-between text-sm pb-1 my-2 font-bold">
          <p>Total:</p>
          <p>$15,000.00 MX + IVA</p>
        </div>
      </div>}
      {!prices? <ButtonPago/>: <ButtonPago  priceId={prices.map(price=>price.id)} promoId={form.cuponID} />}
      <div className="border-t-2 border-primary-100 my-2 w-full">
        <p className="font-bold tracking-wide text-sm my-2">Promociones</p>
      </div>
      <div className="text-xs w-full flex flex-col gap-2 mt-10">
        <p>
          X Se ha aplicado{" "}
          <span className="font-bold tracking-wide uppercase">KEEPLAYOUT</span>
        </p>
        <div className="border border-primary-textGris relative flex items-center w-full">
          <input
            type="text"
            onChange={(e)=>{
setForm({cuponID:e.target.value})
            }}
            className="w-full px-3 py-2 bg-transparent focus:outline"
            placeholder="Introducir el cupón"
          />
          <button
          className="absolute top-0 right-0 bg-primary-100 text-white font-bold hover:bg-primary-200 duration-500 py-2 px-3">
            Aplicar
          </button>
        </div>
      </div>
    </div>
  );
}
