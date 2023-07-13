import React from "react";
import Section1 from "../componentes/Section1";
import Image from "next/image";
import bglogin from "../../../public/bglogin.png";
import logo from "../../../public/logo.png";
import Formulario from "./Formulario";
import { Toaster } from "react-hot-toast";

export default function page() {
  return (
    <Section1>
        <Toaster/>
      <div className="md:w-9/12 md:h-[90vh] bg-primary-500 border flex flex-col w-full md:flex-row items-stretch justify-between">
        <div className="md:w-[45%] flex flex-col items-center justify-between py-10">
          <div className="flex flex-col items-center gap-2 h-1/3">
            <div className="relative w-full h-[175px] ">
              <Image
                src={logo}
                alt="bg-login"
                fill
                quality={75}
                className="object-contain"
              />
            </div>
            <h2 className="text-3xl font-light">Iniciar Sesión</h2>
          </div>
          <div className="w-10/12   h-full pt-5 flex flex-col justify-between">
           <Formulario/>
          </div>
        </div>
        <div className="md:w-[55%] w-full h-full">
          <div className="relative w-full h-full ">
            <Image
              src={bglogin}
              alt="bg-login"
              fill
              quality={75}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Section1>
  );
}
