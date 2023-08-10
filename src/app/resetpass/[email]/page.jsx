"use client";
import SectionDash from "@/app/dashboard/component/SectionDash";
import BotonCancelar from "@/app/dashboard/pricepec/BotonCancelar";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import logo from "../../../../public/logo.png";
import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { getTokenData } from "@/libs/jwt";

export default function Resetpass() {
  const path = usePathname();
  const router=useRouter()
  const handleChange = (e) => {
    const { target } = e;
    setForm((form) => ({
      ...form,
      [target.name]: target.value,
    }));
  };
  const email = path.split("/")[path.split.length];
  const [form, setForm] = useState({ email });
  const restablecer = async () => {
    try {
      const res = await axios.post("/api/auth/resetpass", form);
console.log(res)
      if (res.data.success) {
        toast.success(res.data.message, {
          duration: 5000,
        })
      router.push('/login')
      }
      if (!res.data.success) {
        toast.error(res.data.message, {
          duration: 5000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <Toaster/>
    <SectionDash>
      <nav className="w-full absolute z-40 flex items-center justify-between bg-primary-tonoBlanco h-20 px-16 top-0 left-0">
        {/* logo */}
        <div>
          {" "}
          <Image alt="logo" src={logo} width={50} height={50} quality={50} />
        </div>
        <BotonCancelar />
      </nav>
      <div className="w-1/3 bg-white   h-full pt-5 flex flex-col justify-between border shadow-md rounded-lg">
        <h2 className="text-3xl mx-auto text-primary-textGris font-light">
          Restablecer Contraseña
        </h2>
        <form className="flex flex-col gap-5 w-full mx-auto  items-start justify-between font-light p-10">
          <label htmlFor="email" className="w-full  leading-tight">
            <p>Email</p>
            <input
              value={email}
              type="email"
              name="email"
              id="email"
              required
              className="w-full bg-transparent text-primary-100 placeholder:text-primary-100/80 border-b text-sm pt-3 pb-0.5 focus:outline-none"
            />
          </label>
          <label htmlFor="password" className="w-full  leading-tight">
            <p>Nueva Contraseña</p>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              id="password"
              required
              className="w-full bg-transparent text-primary-100 placeholder:text-primary-100/80 border-b text-sm pt-3 pb-0.5 focus:outline-none"
            />
          </label>
          <label htmlFor="passwordValidate" className="w-full  leading-tight">
            <p>Confirmar Contraseña</p>
            <input
              onChange={handleChange}
              type="password"
              name="passwordValidate"
              id="passwordValidate"
              required
              className="w-full bg-transparent text-primary-100 placeholder:text-primary-100/80 border-b text-sm pt-3 pb-0.5 focus:outline-none"
            />
          </label>
        </form>
        <button
          onClick={restablecer}
          className="w-full py-4 bg-gradient-totr bg-primary-100 via-primary-100 to-primary-200  text-white font-thin hover:bg-primary-200 duration-300"
        >
          Restablecer
        </button>
      </div>
    </SectionDash></>
  );
}
