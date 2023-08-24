import { SVGCheckFill } from '@/app/componentes/SVGComponent'
import React from 'react'

export default function ConfirmacionExitosa({
    numero,proximoDriver,onclick
}) {
  return (
    <div className="bg-gray-300/50 backdrop-blur-sm absolute w-screen h-full rounded-lg shadow-md z-50 animate-[aparecer_.5s] flex items-center">
    <div className="bg-primary-200  text-white w-4/6 h-4/6 flex flex-col items-center justify-center rounded-lg shadow-md m-auto animate-[aparecer_1s]">
    <div className=" w-full px-5 mx-auto">
      <h2 className="text-xl my-5  text-center ">Felicidades, has obtenido tu {numero} entregable</h2>
      <p className="px-10 text-lg font-thin text-center">
        Por favor se paciente estamos generando tu entregable, ya que será
        de gran utilidad en el marco del desarrollo de tu PEC para
        próximos Drivers. Contimuemos con tu {proximoDriver} driver...
      </p>
      
    </div>
    <SVGCheckFill />
    <div className="w-full relative my-3 flex items-end justify-end px-10">
        <button
        onClick={onclick}
        className=" py-2 px-10  font-bold bg-primary-100  ">Ok

        </button>
      </div>
  </div>
  </div>)
}
