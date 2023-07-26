"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

export default function Formulario() {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState(null)
  const [form, setForm] = useState({});
  const loginButon = async (e) => {
    e.preventDefault();
try {
      const res = await axios.post("/api/auth/signup", form);
  
      toast.success(!isRegister ? "Usuario Registrado con Éxito" : "Bienvenido", {
        style: {
          backgroundColor: "#00699C",
          color: "white",
          fontSize: "20px",
          padding: "8px",
          height: "100px",
          textAnchor: "1px",
        },
        duration: 3500,
      });
      console.log(res)
} catch (e) {
  setError(e.response.data.message)
  toast.error(error)
}
  };



  const handleChange = (e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {" "}
      <form
        action=""
        className="flex flex-col gap-5 w-full mx-auto  items-start justify-between font-light"
      >
        {!isRegister && (
          <label
            htmlFor="nameUser"
            className="w-full leading-tight animate-aparecer"
          >
            <p>Usuario</p>
            <input
              onChange={handleChange}
              value={form?.fullName}
              type="text"
              name="fullName"
              id="fullName"
              placeholder="MoGames"
              required
              className="w-full bg-transparent text-primary-100 placeholder:text-primary-100/80 border-b text-sm pt-3 pb-0.5 focus:outline-none"
            />
          </label>
        )}
        <label htmlFor="email" className="w-full  leading-tight">
          <p>Email</p>
          <input
            onChange={handleChange}
            value={form?.email}
            type="email"
            name="email"
            id="email"
            placeholder="usuariogames@dominio.com"
            required
            className="w-full bg-transparent text-primary-100 placeholder:text-primary-100/80 border-b text-sm pt-3 pb-0.5 focus:outline-none"
          />
        </label>
        <label htmlFor="email" className="w-full  leading-tight">
          <p>Contraseña</p>
          <input
            onChange={handleChange}
            value={form?.password}
            type="password"
            name="password"
            id="password"
            placeholder="*********"
            required
            className="w-full bg-transparent text-primary-100 placeholder:text-primary-100/80 border-b text-sm pt-3 pb-0.5 focus:outline-none"
          />
        </label>
        <button
          onClick={loginButon}
          className="w-full py-4 bg-gradient-totr bg-primary-100 via-primary-100 to-primary-200  text-white font-thin hover:bg-primary-200 duration-300"
        >
          {isRegister ? "Iniciar" : "Registrarse"}
        </button>
      </form>
      <div className="w-full flex items-center justify-between text px-2 py-5">
        <p className="font-extralight animate-aparecer">
          {isRegister ? "¿Ya te has registrado?" : "¿Aún no te has registrado?"}
        </p>
        <button
          onClick={() => setIsRegister(!isRegister)}
          className="text-primary-100 hover:text-primary-200  duration-200"
        >
          {isRegister ? "Iniciar Sesion" : "Registrate"}
        </button>
      </div>
    </>
  );
}
