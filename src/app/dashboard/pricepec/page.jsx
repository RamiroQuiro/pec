

import Footer from "@/app/landing/Footer";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import CardPrice from "./CardPrice";
import { SVGCheck } from "@/app/componentes/SVGComponent";
import BotonCancelar from "./BotonCancelar";


export default  function PricePEC() {

  return (
    <main className=" w-screen min-h-screen h-full flex flex-col items-center justify-between text-primary-textGris relative">
      <nav className="w-full absolute z-40 flex items-center justify-between bg-primary-tonoBlanco h-20 px-16 top-0 left-0">
        {/* logo */}
        <div>  <Image alt="logo"
        src={logo}
        width={50}
        height={50}
        quality={50}
        /></div>
       <BotonCancelar/>
      </nav>
      <header className="w-full  h-[60vh] bg-[#000028] relative flex items-center justify-between">
        <div className="text-white w-[35%] flex flex-col items-start justify-center pt-10 ml-32 ">
          <h1 className="text-3xl font-bold tracking-wide">
            PLAN ESTRATEGICO COMERCIAL | 10 DRIVERS + PRODUCTO FINAL
          </h1>
          <h3 className="text-lg leading-tight">
            Plan Estratégico Comercial Basado en un Tablero Dinámico de 10
            Drivers + Guía Estratégica Comercial
          </h3>
          <p className="text-xs my-3">
            Creado por:{" "}
            <span className="text-primary-700">Hector Ávila Muñoz</span>{" "}
          </p>
          <p className="text-xs my-3 text-white">
            Ultima Actualización : 19/07/2023
          </p>
        </div>
       <CardPrice/>
      </header>
      <section className="min-h-screen w-full mx-auto flex- items-center ml-32 mt-10 ">
        <div className="border shadow-sm w-1/2 p-3">
        <h3 className="text-lg font-bold my-5 text-[#000028] tracking-wide">Lo que aprenderás</h3>
          <div className="w-full flex items-start justify-normal">
            <ul className="flex flex-wrap text-xs gap-y-7 gap-x-3 w-1/2">
              <li className="flex items-center justify-start gap-2 hover:gap-3 duration-300"><SVGCheck className="w-5 h-5"/> <p> Diseñar y desarrollar un plan estratégico a la medida</p></li>
              <li className="flex items-center justify-start gap-2 hover:gap-3 duration-300"><SVGCheck className="w-5 h-5"/> <p> Diseñar y desarrollar un plan estratégico a la medida</p></li>
              <li className="flex items-center justify-start gap-2 hover:gap-3 duration-300"><SVGCheck className="w-5 h-5"/> <p> Diseñar y desarrollar un plan estratégico a la medida</p></li>
              <li className="flex items-center justify-start gap-2 hover:gap-3 duration-300"><SVGCheck className="w-5 h-5"/> <p> Diseñar y desarrollar un plan estratégico a la medida</p></li>
              <li className="flex items-center justify-start gap-2 hover:gap-3 duration-300"><SVGCheck className="w-5 h-5"/> <p> Diseñar y desarrollar un plan estratégico a la medida</p></li>
              <li className="flex items-center justify-start gap-2 hover:gap-3 duration-300"><SVGCheck className="w-5 h-5"/> <p> Diseñar y desarrollar un plan estratégico a la medida</p></li>
              
            </ul>
            <ul className="flex flex-wrap text-xs gap-y-7 gap-x-3 w-1/2">
              <li className="flex items-center justify-start gap-2 hover:gap-3 duration-300"><SVGCheck className="w-5 h-5"/> <p> Diseñar y desarrollar un plan estratégico a la medida</p></li>
              <li className="flex items-center justify-start gap-2 hover:gap-3 duration-300"><SVGCheck className="w-5 h-5"/> <p> Diseñar y desarrollar un plan estratégico a la medida</p></li>
             
              
            </ul>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
