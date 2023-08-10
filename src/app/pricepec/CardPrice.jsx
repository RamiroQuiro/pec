"use client";
import { useEffect, useState } from "react";
import {
  SVGDownload,
  SVGGit,
  SVGInfinity,
  SVGPantalla,
  SVGPremio,
} from "../componentes/SVGComponent";

import axios from "axios";
import Image from "next/image";
import logo from "../../../public/logo.png";
import ButtonPago from "./ButtonPago";
import { useRouter } from "next/navigation";

export default function CardPrice() {
  const [prices, sePrices] = useState(null);
const router=useRouter()
  useEffect(() => {
    const res = async () => {
      const respuesta = await axios.get("/api/list");
      // Manejo de la respuesta de la consulta
      if (respuesta) {
        sePrices(respuesta.data);
      } else {
        sePrices(respuesta.data);
      }
    };
    res();
  }, []);

  return (
    <div className="md:w-[400px] h-[850px] bg-white shadow-lg  absolute right-32 top-20 mt-20 border">
      <div className="flex flex-col items-start justify-center">
        <div className="h-[230px]  w-full p-2">
            <Image
            alt="Logo"
            src={logo}
            width={200}
            height={200}

            className=" mx-auto object-cover object-center"
            />
        </div>
        {prices && (
          <div className="flex flex-col items-start mt-7 justify-center px-7 gap-4 w-full">
            <p className="text-2xl font-black text-[#000028] tracking-wide uppercase mx-auto ">
              {new Intl.NumberFormat("de-DE").format(
                prices[0]?.unit_amount / 100
              )}{" "}
              {prices[0]?.currency}+IVA
            </p>
            <button
      onClick={() =>router.push('/pricepec/checkpaid') }

      className={`"bg-primary-200 animate-pulse duration-300"}  bg-primary-100 hover:bg-primary-200 duration-500 text-white font-bold capitalize w-full flex items-center justify-center py-4`}
    >
     
     

     Comprar Ahora
    </button>
            <span className="text-xs text-center w-full">
              Garantía de reembolso de 10 dias
            </span>
            <div>
              <h3 className="text-lg font-bold my-5 text-[#000028] tracking-wide">
                Tu PEC incluye:
              </h3>
              <ul className="w-full flex flex-col items-start justify-center font- gap-4">
                <li className="w-full flex items-center justify-start  gap-2 hover:gap-4 duration-300">
                  <SVGPantalla className="w-5" />
                  <p>Drivers dinámicos.</p>
                </li>
                <li className="w-full flex items-center justify-start  gap-2 hover:gap-4 duration-300">
                  <SVGInfinity className="w-5" />
                  <p>Acceso de por vida</p>
                </li>
                <li className="w-full flex items-center justify-start  gap-2 hover:gap-4 duration-300">
                  <SVGGit className="w-5" /> <p>Guia de uso de plataforma</p>
                </li>
                <li className="w-full flex items-center justify-start  gap-2 hover:gap-4 duration-300">
                  <SVGDownload className="w-5 h-5" />{" "}
                  <p>Recursos descargables</p>
                </li>
                <li className="w-full flex items-center justify-start  gap-2 hover:gap-4 duration-300">
                  <SVGPremio className="w-5" /> <p>Certificado final</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
