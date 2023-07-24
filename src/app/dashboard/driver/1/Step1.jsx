import Image from "next/image";
import  step1 from "../../../../../public/step1.png";
export default function Step1() {
  return (
    <div className="flex items-center justify-between p-6 relative w-full h-full">
      <div className=" flex flex-col items-baseline justify-between h-full w-8/12">
        <h2 className="uppercase text-primary-200 text-xl">Objetivo</h2>
        <p className="text-primary-textGris text-sm">
          En este Driver estableceremos la relación e importancia que existe con
          entre la Cultura Organizacional en la empresa y el Área Comercial.
          Tradicionalmente los libros, los estudiosos del tema, tratan de dar su
          propia personalidad a éste tema, sin embargo existen comunes
          denominadores en los que coinciden todos, mismos que mencionaremos,
          pero lo mas importante y que poco valor se les, es como esta
          cultura...afecta o beneficia directamente al área comercial, de ahí su
          importancia...
        </p>
        <button className="bg-primary-800 text-white rounded font-medium text-sm px-3 py-1.5">
          Leer mas...
        </button>
      </div>
      <div className="w-4/12 h-full relative">
        <Image
        alt="step1"
src={step1}
fill
className=" object-center object-contain absolute right-0 top-4 w-4/12 h-auto "

        /></div>
    </div>
  );
}
