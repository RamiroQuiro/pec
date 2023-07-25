import React from 'react'
import ButtonLeerMas from './ButtonLeerMas'
import Image from 'next/image'
import step4 from "../../../../../public/step3.png";
export default function Step4() {
  return (
    <div className="flex items-center justify-between p-6  relative w-full  h-full">
      <div className=" flex flex-col items-baseline justify-between gap-3 h-full w-8/12 text-center">
        <h2 className="uppercase text-primary-200 text-xl">
          LISTO!, BIENVENIDO AL PASO 3 "ARMEMOS TU PROPIA CULTURA
          ORGANIZACIONAL" PERO CON UNA GRAN DIFERENCIA: ENFOCADA AL ÁREA
          COMERCIAL
          <span className="text-primary-100 font-semibold">
            {" "}
            ¿ESTAS LISTO?, VAMOS!!!!
          </span>
        </h2>
        <p className="text-primary-textGris font-semibold uppercase tracking-wide leading-relaxed text-xl w-full">
          ¿Estas Listo?,
          <span className="text-primary-100 "> Vamos!!!</span>
        </p>
        <div className="flex items-center justify-normal gap-5">
          <ButtonLeerMas label={"changeStep"} stepN={1}>
            Anterior
          </ButtonLeerMas>
          <ButtonLeerMas stepN={16}>Ir...</ButtonLeerMas>
        </div>
      </div>
      <div className="w-4/12  mx-auto h-full relative">
        <Image
          alt="step4"
          src={step4}
          fill
          className=" object-center object-contain absolute -right-3 top-4 w-full ml-14 h-auto mx-auto "
        />
      </div>
    </div>
  )
}
