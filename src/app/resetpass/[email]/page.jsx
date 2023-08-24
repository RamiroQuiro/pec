"use client";
import SectionDash from "@/app/dashboard/component/SectionDash";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import logo from "../../../../public/logo.png";
import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import BotonCancelar from "@/app/pricepec/BotonCancelar";

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
  const [isLoading, setIsLoading] = useState(false)
  const email = path.split("/")[path.split.length];
  const [form, setForm] = useState({ email });
  const restablecer = async () => {
    setIsLoading(true)
    try {
      const res = await axios.post("/api/auth/resetpass", form);
      console.log(res)
      if (res.data.success) {
        toast.success(res.data.message, {
          duration: 5000,
        })
        router.push('/login')
        setIsLoading(false)
      }
      if (!res.data.success) {
        toast.error(res.data.message, {
          duration: 5000,
        });
        setIsLoading(false)
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      setIsLoading(false)
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

      className={`${isLoading&&"bg-primary-200 animate-pulse duration-300"}  bg-primary-100 hover:bg-primary-200 duration-500 text-white font-bold capitalize w-full flex items-center justify-center py-4`}
    >
      {
        isLoading&&
        <><svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      
      </svg></>
      }

     {isLoading? "Procesando...":"Restablecer"}
    </button>
    
      </div>
    </SectionDash></>
  );
}
