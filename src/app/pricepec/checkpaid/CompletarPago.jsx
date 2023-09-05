"use client";
import React, { useEffect, useState, useCallback } from "react";
import ButtonPago from "../ButtonPago";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function CompletarPago() {
  const [form, setForm] = useState({ cuponID: "" });
  const [prices, setPrices] = useState(null);
  const [discount, setDiscount] = useState(0);
  const [precios, setPrecios] = useState(null);
  const [error, setError] = useState(null);
  const [formattedTotal, setFormattedTotal] = useState(0);
  const [promociones, setPromociones] = useState([]);
  const [promoEncontrado, setPromoEncontrado] = useState(null)
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

  // obtener las promociontes activas
  useEffect(() => {
    const fecthPromos = async () => {
      try {
        const response = await axios.get("/api/promotion");
        let promociones = response?.data?.data;

      
        const newArray = promociones.map((promo) => {
          return {
            nameCode: promo.code,
            code: promo.coupon.id,
            id: promo.id,
            porcentaje: promo.percent_off,
          };
        });
        setPromociones(newArray);
      } catch (error) {
        setError("Ocurrió un error al obtener los precios");
      }
    };
    fecthPromos();
  }, []);

  // Obtener los ID de los precios
  useEffect(() => {
    setPrecios(prices?.map((producto) => producto.prices[0].id));
    const total = prices?.reduce((a, b) => a + Number(b.prices[0].unit_amount),0);
    const formatoPre=total/100
      setFormattedTotal(formatoNum.format(formatoPre));
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



  // calcular con descuentos
  useEffect(() => {
  
      const discountAmount = (formattedTotal * discount) / 100;
      const finalTotal = formattedTotal - discountAmount;
      setFormattedTotal(formatoNum.format(finalTotal));
      console.log(formattedTotal);
  }, [discount]);

  const aplicarDescuento = () => {
    const codigo = form?.cuponID;
    setPromoEncontrado( promociones?.find((promo) => promo.code == codigo))
    if (!promoEncontrado) {
      toast.error("codigo incorrecto");
    }
    if(promoEncontrado){

      toast.success("Descuento aplicado");
      setDiscount(250000);
    }
  };
  return (
    <div className="flex flex-col p-10 items-stretch justify-stretch bg-[#F5F5F5] w-1/2 min-h-full ">
      <div className=" w-full  mb-20 h-5/6 flex-grow ">
        <p className="text-lg font-bold mt-5">Resumen</p>
        {!prices ? (
          <div
            class="inline-block h-8 w-8 animate-spin mx-auto my-10 rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        ) : (
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
          ))
        )}
        <div className="w-full flex items-center justify-between text-sm pb-1 my-2 font-bold">
          <p>Total:</p>
          {prices && <p> {formattedTotal} MXN + IVA</p>}
        </div>
      </div>
      {!prices ? (
        <ButtonPago />
      ) : (
        <ButtonPago priceId={precios} promoId={form.cuponID} />
      )}
      <div className="border-t-2 border-primary-100 my-2 w-full">
        <p className="font-bold tracking-wide text-sm my-2">Promociones</p>
      </div>
      <div className="text-xs w-full flex flex-col gap-2 mt-10">
        {promoEncontrado&& (
            <p>
              X Se ha aplicado{" "}
              <span className="font-bold tracking-wide uppercase">
                {promoEncontrado.nameCode}
              </span>
            </p>
          )}
        <div className="border border-primary-textGris relative flex items-center w-full">
          <input
            type="text"
            onChange={handleChangle}
            className="w-full px-3 py-2 bg-transparent focus:outline"
            placeholder="Introducir el cupón"
          />
          <button
            onClick={aplicarDescuento}
            className="absolute top-0 right-0 bg-primary-100 text-white font-bold hover:bg-primary-200 duration-500 py-2 px-3"
          >
            Aplicar
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}
