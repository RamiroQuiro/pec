"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function BotonInicioSesion({ label }) {
  const { data } = useSession();

  const router = useRouter();

  const handleClick = () => {
    router.push(!data?.user
      ? "/login"
      : !data.user.pecPagado
      ? "/pricepec"
      : "/dashboard");
   



  };
  return (
    <button
      onClick={handleClick}
      className={`${label=="card"?"":"animate-pulse"} bg-primary-200 animate  text-white md:mt-10 md:w-8/12 w-10/12 text-lg hover:bg-primary-100 duration-300 py-3`}
    >
      {!data?.user
        ? (label=="card"? "Adquirir mi PEC":"Iniciar Sesión")
        : !data.user.pecPagado
        ? "Adquirir mi PEC"
        : "Ver Mi PEC"}
    </button>
  );
}
