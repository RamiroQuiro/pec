"use client";
import { contextUser } from "@/context/contextUser";
import { useEffect, useState } from "react";
import PricePEC from "./pricepec/page";

async function verifyPayment(sessionId) {
  // Recupera el objeto de sesión
  const session = await stripe.checkout.sessions.retrieve(sessionId);

  // Verifica el estado del pago
  if (session.payment_status === "paid") {
    // El pago fue exitoso
    // Aquí puedes habilitar al usuario en la siguiente pantalla de tu app
  } else {
    // El pago no fue exitoso
    // Aquí puedes manejar el error o pedir al usuario que intente de nuevo
  }
}

export default function ComprobarPago({ children }) {
  const comprobantePago = contextUser((state) => state.comprobantePago);
const [isPaid, setIsPaid] = useState(false)
  useEffect(() => {
    const comprobar = async () => {
      const res = await verifyPayment(comprobantePago);
      return res
    };
    let respuesta=comprobar()
if(respuesta){
setIsPaid(true)
}
  }, []);


  if(isPaid){
    return <>{children}</>;

  }else
  return <PricePEC/>
}
