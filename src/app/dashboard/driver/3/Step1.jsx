import Image from "next/image";
import step1 from "../../../../../public/step1.png";
import ButtonLeerMas from "./ButtonLeerMas";
import ContenedorTitulosDeStep from "../../component/ContenedorTitulosDeStep";
import ContenedorStep from "../../component/ContenedorStep1";
export default function Step1() {

  return (
   <ContenedorStep>
      <ContenedorTitulosDeStep>
        <h2 className="uppercase text-primary-200 text-xl">Objetivo</h2>
        <p className="text-primary-200  text-xl tracking-wide leading-relaxed">
          Comencemos a explorar tu tercer Driver, ahora haremos énfasis en la Empatía con el Mercado.
        </p>
        <p className="text-primary-200 mb-10 font-bold text-xl tracking-wide leading-relaxed">
          Estas listo?, <span className="text-primary-100">Vamos!!!</span>
        </p>
        <ButtonLeerMas stepN={1}>leer mas...</ButtonLeerMas>
      </ContenedorTitulosDeStep>
      <div className="w-4/12 h-full relative">
        <Image
          alt="step1"
          src={step1}
          fill
          className=" object-center object-contain absolute -right-3 top-4 w-4/12 h-auto "
        />
      </div>
    </ContenedorStep>
  );
}
