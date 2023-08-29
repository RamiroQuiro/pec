"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingCss from "../componentes/LoadingCss";
import { contextUser } from "@/context/contextUser";
import { useRouter } from "next/navigation";

export default function ComprobarPago({ children }) {
  const router = useRouter();
  const { data } = useSession();
  const [comprobantePago, setComprobantePago] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const { cargarUserData, updateState } = contextUser((state) => ({
    cargarUserData: state.cargarUserData,
    updateState: state.updateState,
  }));

  useEffect(() => {
    if (!data) return;

    cargarUserData({ email: data.user?.email, fullName: data.user?.fullName });

    const res = async () => {
      const respuesta = await axios.post("/api/esta", {
        email: data?.user?.email,
      });

      // Manejo de la respuesta de la consulta
      if (respuesta.data.success) {
        const formCarga = respuesta.data.formCarga;
        const drivers = respuesta.data.drivers;
        updateState({
          formCarga,
          drivers,
        });
        setComprobantePago(true);
      } else {
        setComprobantePago(false);
      }
      setIsLoading(false);
    };
    res();
  }, [data]);

  if (comprobantePago) {
    return <>{children}</>;
  }
  if (!comprobantePago) {
    return router.push("/pricepec");
  } else return <LoadingCss />;
}
