import React from "react";
import NavBar from "./component/NavBar";
import Image from "next/image";
import background from "../../../public/headerback.jpg";
export default function Header() {
  return (
    <header className="w-screen h-[80vh] relative">
      <NavBar />
      <div className="w-2/4 py-5 gap-5 bg-white flex flex-col items-center justify-between z-10 absolute -bottom-20 left-1/4 border-t border-primary-200/50">
        <h2 className="text-xl  text-primary-200">
          PEC (Plan Estrategico Comercial)
        </h2>
        <h2 className="text-2xl font-medium text-gray-700">
          POTENCIALIZANDO ÁREAS COMERCIALES
        </h2>
        <button className="bg-primary-200 rounded text-white mt-10  px-4 py-2">
          Iniciar Sesión
        </button>
      </div>{" "}
      <div className="absolute left-0 top-16 w-screen h-full z-0 ">
        {" "}
        <Image
          alt="backgrounHeader"
          src={background}
          className="object-cover "
          fill
          quality={100}
        />
      </div>
    </header>
  );
}
