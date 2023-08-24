"use client";
import React, { useEffect, useState, useCallback } from "react";
import ButtonPago from "../ButtonPago";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function CompletarPago() {
  const [form, setForm] = useState({ cuponID: "" });
  const [prices, setPrices] = useState(null);
  const [discount, setDiscount] = useState(0)
  const [precios, setPrecios] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Obtener la lista de precios desde la API
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get("/api/list");
        setPrices(response.data.filter((prod) => prod.active));
      } catch (error) {
        setError("Ocurrió un error al obtener los precios");
      }
    };
    fetchPrices();
  }, []);

  // Obtener los ID de los precios
  useEffect(() => {
    setPrecios(prices?.map((producto) => producto.prices[0].id));
  }, [prices]);

  // Manejar el cambio en el campo del cupón
  const handleChangle = useCallback((e) => {
    setForm((form) => ({
      ...form,
      cuponID: e.target.value,
    }));
  }, []);

  const formatoNum = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  });
  const total = prices?.reduce(
    (a, b) => a + Number(b.prices[0].unit_amount),
    0
  )-discount;
  const formattedTotal = formatoNum.format(total / 100);
console.log(prices)

const aplicarDescuento=()=>{
  const codigo=form?.cuponID
  if(codigo=='mqHuW7hj'){
    setDiscount(250000)
  }else{
    toast.error('codigo incorrecto')
  }

}
  return (
    <div className="flex flex-col p-10 items-center justify-stretch bg-[#F5F5F5] w-1/2 h-full ">
      {!prices ? (
        <div className=" w-full my-10 mb-20 bg-gray-300 animate-pulse"></div>
      ) : (
        <div className=" w-full my-10 mb-20">
          <p className="text-lg font-bold mt-5">Resumen</p>
          {
          !prices?<div
          class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status">
          <span
            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span
          >
        </div>:
          prices?.map((product) => (
            <div
              key={product.id}
              className="w-full  flex items-center justify-between text-xs pb-1 px-2 my-2"
            >
              <p>{product.name}</p>
              <p className="uppercase">
                {new Intl.NumberFormat("es-MX", {
                  style: "currency",
                  currency: "MXN",
                }).format(product.prices[0]?.unit_amount / 100)}
                {"  "}
                {product.prices[0]?.currency}
              </p>
            </div>
          ))}
          <div className="w-full flex items-center justify-between text-sm pb-1 my-2 font-bold">
            <p>Total:</p>
            {prices && <p> {formattedTotal } MXN + IVA</p>}
          </div>
        </div>
      )}
      {!prices ? (
        <ButtonPago />
      ) : (
        <ButtonPago priceId={precios} promoId={form.cuponID} />
      )}
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
            onChange={handleChangle}
            className="w-full px-3 py-2 bg-transparent focus:outline"
            placeholder="Introducir el cupón"
          />
          <button onClick={aplicarDescuento}className="absolute top-0 right-0 bg-primary-100 text-white font-bold hover:bg-primary-200 duration-500 py-2 px-3">
            Aplicar
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}
