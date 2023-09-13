import { SVGCheckFill } from '@/app/componentes/SVGComponent';
import React from 'react'
import ButonOk from './ButonOk';

export default function DriverComplet({driverNumber,proxDriver,numeroDriverSiguiente}) {
    return (
        <div className=" flex flex-col items-center justify-center gap-3 h-full w-full mx-auto text-center z-[100] absolute top-0 left-0 bg-white/70 backdrop-blur-sm">
          <div className=" bg-primary-200 mx-auto text-white flex-col items-center justify-normal md:w-3/4 md:h-4/6 rounded shadow-md p-4">
            <h2 className="text-3xl my-10  font-medium">
              Felicidades, haz obtenido tu {driverNumber} entregable
            </h2>
            <p className="text-2xl font-thin px-5">
              Por favor se paciente, estamos generando tu entregable, ya que será de gran utilidad en el marco del desarrollo de tu PEC para próximos Drivers. Continuemos con tu {proxDriver} driver...
            </p>
            <div className="relative w-full md:h-1/2">
              <SVGCheckFill className="w-1/3 mx-auto h-full animate-aparecer delay-75"/>
            </div>
            <div className="w-full flex items-center justify-end">
              <ButonOk driverSiguiente={numeroDriverSiguiente} />
            </div>
          </div>
        </div>
      );
    }