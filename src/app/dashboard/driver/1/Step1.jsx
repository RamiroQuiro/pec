import Image from "next/image";
import step1 from "../../../../../public/step1.png";
import ButtonLeerMas from "./ButtonLeerMas";
export default function Step1() {

  return (
    <div className="flex md:flex-row flex-col items-center justify-between p-6  relative w-full  h-full">
      <div className=" flex flex-col md:items-baseline justify-between gap-3 h-full md:w-8/12">
        <h2 className="uppercase text-primary-200 text-xl">Objetivo</h2>
        <p className="text-primary-textGris text-sm tracking-wide leading-relaxed">
          En este Driver estableceremos la relación e importancia que existe con
          entre la{" "}
          <span className="text-primary-100 font-medium">
            {" "}
            Cultura Organizacional
          </span>{" "}
          en la empresa y el{" "}
          <span className="text-primary-100 font-medium">Área Comercial.</span>
          Tradicionalmente los libros, los estudiosos del tema, tratan de dar su
          propia personalidad a éste tema, sin embargo existen comunes
          denominadores en los que coinciden todos, mismos que mencionaremos,
          pero lo mas importante y que poco valor se les, es como esta
          cultura...afecta o beneficia directamente al área comercial, de ahí su
          importancia...
        </p>
        <ButtonLeerMas stepN={1}>leer mas...</ButtonLeerMas>
      </div>
      <div className="w-4/12 h-full relative">
        <Image
          alt="step1"
          src={step1}
          fill
          className=" object-center object-contain absolute -right-3 top-4 w-4/12 h-auto "
        />
      </div>
    </div>
  );
}
