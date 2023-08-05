"use client";

import { useSession } from "next-auth/react";
import PricePEC from "./pricepec/page";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingCss from "../componentes/LoadingCss";

export default function ComprobarPago({ children }) {

  const { data } = useSession();
  const [comprobantePago, setComprobantePago] = useState(true);
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    const res = async () => {
      const respuesta = await axios.post("/api/esta", {
        email: data?.user?.email,
      });
      // Manejo de la respuesta de la consulta
      if (respuesta.data.success) {
        setComprobantePago(true);
      } else {
        setComprobantePago(false);
      }
      setIsLoading(false)
    };
    res();
  }, [data]);

  {
    isLoading&&
    <LoadingCss/>

  }
  if (comprobantePago) {
    return <>{children}</>;
  } if (!comprobantePago) {
   return <PricePEC />;}
    else 
    
    return <LoadingCss/>
}

