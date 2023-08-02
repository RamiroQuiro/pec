"use client";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import LoadingCss from "../componentes/LoadingCss";

export default function Formulario() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({});
  const registerButton = async (e) => {
    e.preventDefault();
    let res = "";
    try {
      setIsLoading(true)
      if (isRegister) {
        const signupResponse = await axios.post("/api/auth/signup", form);
        res = await signIn("credentials", {
          email: signupResponse.data.email,
          password: form?.password,
          redirect: false,
        });
      }
      // res = await signIn("credentials", {
      //   email: form?.email,
      //   password: form?.password,
      //   redirect: false,
      // });
      if (res?.error) {
        console.log(res)
        toast.error(res?.error)
        setIsLoading(false)
        return setError(res.error);
      }
      if (res?.ok) {
        // router.push("/dashboard");
        toast.success(
          isRegister ? "Revisa tu bandeja de entrada" : "Bienvenido",
          {
            style: {
              backgroundColor: "#00699C",
              color: "white",
              fontSize: "20px",
              padding: "8px",
              height: "100px",
              textAnchor: "1px",
            },
            duration: 3500,
          }
        );
      }
      
    } catch (e) {
      setIsLoading(false)
      setError(e.response.data.message);
      toast.error(e.response.data.message);
    }
    setIsLoading(false)
  };

  const loginButton = () => {};

  const handleChange = (e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  };

  return (
    <>
    {isLoading&& <LoadingCss/>}
      {" "}
      <form
        action=""
        className="flex flex-col gap-5 w-full mx-auto  items-start justify-between font-light"
      >
        {isRegister && (
          <label
            htmlFor="fullName"
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
        <label htmlFor="password" className="w-full  leading-tight">
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
          onClick={registerButton}
          className="w-full py-4 bg-gradient-totr bg-primary-100 via-primary-100 to-primary-200  text-white font-thin hover:bg-primary-200 duration-300"
        >
          {!isRegister ? "Iniciar" : "Registrarse"}
        </button>
      </form>
      <div className="w-full flex items-center justify-between text px-2 py-5">
        <p className="font-extralight animate-aparecer">
          {isRegister ? "¿Ya te has registrado?" : "¿Aún no te has registrado?"}
        </p>
        <button
        disabled={!form.email || !form.password || form?.fullName}
          onClick={() => setIsRegister(!isRegister)}
          className="text-primary-100 hover:text-primary-200  duration-200"
        >
          {isRegister ? "Iniciar Sesion" : "Registrate"}
        </button>
        <Toaster/>
      </div>
    </>
  );
}
