import ButtonLeerMas from './ButtonLeerMas'
import step1 from "../../../../../public/step1.png";
import Image from 'next/image'
export default function Step42() {
  return (
    <>
      <div className=" flex flex-col items-start justify-between gap-3 h-full w-8/12 text-center">
        <div className='text-left space-y-5'>
          <h2 className="uppercase text-primary-200 text-xl">
          FELICIDADES!, HAZ COMPLETADO TU PRIMER DRIVER, PERO AUN QUEDA MUCHO POR HACER, CONTINUEMOS CON TU SEGUNDO DRIVER.
        </h2>
        <p className="uppercase text-primary-100 text- font-medium">
        ¿ESTAS LISTO?, VAMOS PARA ALLÁ!!!!
        </p>
        </div>
        <div className="flex items-center justify-normal gap-5">
        
          <ButtonLeerMas stepN={24}>Anterior</ButtonLeerMas>
          <ButtonLeerMas stepN={22}>Guardar</ButtonLeerMas>
        </div>
      </div>
      <div className="w-4/12  mx-auto h-full relative">
        <Image
          alt="step4"
          src={step1}
          fill
          className=" object-center object-contain absolute -right-3 top-4 w-full ml-14 h-auto mx-auto "
        />
      </div>
      </>
  )
}
