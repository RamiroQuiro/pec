import React from "react";
import ButonOk from "./ButonOk";
import { SVGCheckFill } from "@/app/componentes/SVGComponent";

export default function page() {
  return (
    <div className=" flex flex-col items-center justify-center gap-3 h-full w-full mx-auto text-center z-[100] absolute top-0 left-0 bg-white/70 backdrop-blur-sm">
      <div className=" bg-primary-200 mx-auto text-white flex-col items-center justify-normal w-3/4 h-4/6 rounded shadow-md p-4">
        <h2 className="text-3xl my-10  font-medium">
          Felicidades, haz finalizado tu PEC
        </h2>
        <p className="text-2xl font-thin px-5">
          Estamos generando tu entregable, recibirás un correo con todos tus
          entregables ejecutivos. Agradecemos tu tiempo y dedicación para
          contestar tu PEC, por tanto te pedimos como último paso contestar una
          breve encuesta de satisfacción. Gracias
        </p>
        <div className="relative w-full h-1/2">
          <SVGCheckFill className="w-1/3 mx-auto h-full animate-aparecer delay-75"/>
        </div>
        <div className="w-full flex items-center justify-end">
          <ButonOk />
        </div>
      </div>
    </div>
  );
}
