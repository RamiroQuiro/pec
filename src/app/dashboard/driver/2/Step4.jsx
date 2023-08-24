import { contextUser } from '@/context/contextUser'
import Image from 'next/image'
import step1 from "../../../../../public/step1.png";
import ButtonLeerMas from './ButtonLeerMas';
export default function Step4() {
  
const subPantallas=contextUser(state=>state.subPantallas)
  return (
    <div className="flex items-center justify-between p-6  relative w-full  h-full">
       <div className=" flex flex-col items-baseline justify-between gap-3 h-full w-8/12">
        <h2 className="uppercase text-primary-200 text-xl">
         REFERENCIAS Y LECTURAS ACERCA DEL TEMA
        </h2>
        <p className="text-primary-100 mb-5 text-left font-semibold text-xl ">
          Conoce más acerca de referencias y temas de lectura...
        </p> <ButtonLeerMas stepN={20}>ir</ButtonLeerMas>
        </div>
     
      <div className="w-5/12  mx-auto h-full relative">
        <Image
          alt="step4"
          src={step1}
          fill
          className=" object-center object-contain absolute ring-0 pr-10 top-4 w-full ml-14 h-auto mx-auto "
        />
      </div>
    </div>
  )
}
