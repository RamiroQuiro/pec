"use client"
import { useSession } from "next-auth/react";
import BotonInicioSesion from "./BotonInicioSesion";

export default function CardPrecioPEC() {
  const {data}=useSession()
  return (
    <div className="flex-auto md:border-r md:border-b-0 border-b pb-10 md:pb-0 border-primary-textGris/40  text-center md:w-[30%] w-full  flex flex-col items-center justify-center px-4 md:text">
      <h3 className="text-xl uppercase font-semibold my-4">Mi PEC</h3>
      <div className="md:px-5 text-center font-medium leading-relaxed flex flex-col items-center justify-evenly flex-grow">
        <p>
          Metodología estructurada conformada por todas las actividades y temas
          involucrados en el área comercial.
        </p>
      </div>
     {!data?.user?.pecPagado&& <div className="text-primary-textGris/90 mt-5">
        <span>Precio Total</span>
        <p className=" text-3xl  font-bold">$15,000.00 MX + IVA</p>
      </div>}
      {/* boton que compruba el regusto y despues el pago del usuario */}
      <BotonInicioSesion label="card"/>
    </div>
  );
}
