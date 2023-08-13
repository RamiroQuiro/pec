"use client";

import { contextUser } from "@/context/contextUser";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function ButtonLeerMas({ stepN, children, label }) {
  const { data } = useSession();
  const activarFlyer = contextUser((state) => state.activarFlyer);
  const cargarSubPantallas = contextUser((state) => state.cargarSubPantallas);
  const setCurrentStep = contextUser((state) => state.setCurrentStep);
  const { drivers } = contextUser((state) => ({
    drivers: state.drivers,
  }));
  const handleSiguiente = async () => {
    try {
      const res = await axios.post("/api/guardarDatos", {
        drivers,
        email: data.user?.email,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }

    label == "changeSubPantalla"
      ? cargarSubPantallas(stepN)
      : label == "changeStep"
      ? setCurrentStep(stepN)
      : activarFlyer(stepN);
  };
  return (
    <button
      onClick={handleSiguiente}
      className="bg-primary-800 text-white rounded font-medium text-xs px-4 py-2"
    >
      {children}
    </button>
  );
}
