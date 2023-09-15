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
  const [preciosId, setPreciosId] = useState(null);
  const [error, setError] = useState(null);
  const [formattedTotal, setFormattedTotal] = useState(0);
  const [promociones, setPromociones] = useState([]);
  const [promoEncontrado, setPromoEncontrado] = useState(null);
  const router = useRouter();

  // Obtener la lista de preciosId desde la API
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get("/api/list");
        setPrices(response.data.filter((prod) => prod.active));
      } catch (error) {
        setError("Ocurrió un error al obtener los preciosId");
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
          console.log(promo.coupon.percent_off);
          return {
            nameCode: promo.code,
            code: promo.coupon.id,
            id: promo.id,
            porcentaje: promo.coupon.percent_off || 0,
          };
        });
        setPromociones(newArray);
      } catch (error) {
        setError("Ocurrió un error al obtener los preciosId");
      }
    };
    fecthPromos();
  }, []);

  // Obtener los ID de los preciosId
  useEffect(() => {
    setPreciosId(prices?.map((producto) => producto.prices[0].id));
    const total = prices?.reduce(
      (a, b) => a + Number(b.prices[0].unit_amount),
      0
    );
    const formatoPre = total / 100;
    setFormattedTotal(formatoNum.format(formatoPre));
    console.log(preciosId);
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
    const total = prices?.reduce(
      (a, b) => a + Number(b.prices[0].unit_amount),
      0
    );
    const discountAmount = ((total / 100) * discount) / 100;
    const finalTotal = total / 100 - discountAmount;
    setFormattedTotal(formatoNum.format(finalTotal));
  }, [discount, promoEncontrado, formatoNum]);

  const aplicarDescuento = () => {
    const codigo = form?.cuponID;
    const objeFind = promociones?.find((promo) => promo.code == codigo);
    if (!objeFind) {
      toast.error("codigo incorrecto");
    }
    if (objeFind) {
      setPromoEncontrado(objeFind);
      setDiscount(objeFind.porcentaje);
      toast.success(`Descuento aplicado por el %${objeFind.porcentaje}`, {
        duration: 10000,
      });
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
          <>
            <div className="w-full  flex items-center justify-between text-xs pb-1 px-2 my-2">
              <p>Precio Regular </p>
              <p className="uppercase">: $ 17,500 MXN + iva</p>
            </div>
            <div className="w-full  flex items-center justify-between text-xs pb-1 px-2 my-2">
              <p>{`Subsidio Fundación Kreativium (50%)`} </p>
              <p classNmnxame="uppercase">$8,750 MXN</p>
            </div>
            <div className="w-full  flex items-center justify-between text-xs pb-1 px-2 my-2">
              <p>Bono adicional de descuento  </p>
              <p classNmnxame="uppercase">$2,000 MXN</p>
            </div>
            {prices?.map((product) => (
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
          </>
        )}
        <div className="w-full flex items-center justify-between text-sm pb-1 my-2 font-bold">
          <p>Total:</p>
          {prices && <p> {formattedTotal} MXN + IVA</p>}
        </div>
      </div>
      {!prices ? (
        <ButtonPago />
      ) : (
        <ButtonPago priceId={preciosId} promoId={form.cuponID} />
      )}
      <div className="border-t-2 border-primary-100 my-2 w-full">
        <p className="font-bold tracking-wide text-sm my-2">Promociones</p>
      </div>
      <div className="text-xs w-full flex flex-col gap-2 mt-10">
        {promoEncontrado && (
          <p className=" text-green-600">
            ☻ Se ha aplicado{" "}
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
