import Image from "next/image";
import step1 from "../../../../../public/step1.png";
import ButtonLeerMas from "./ButtonLeerMas";
export default function Step1() {

  return (
    <div className="flex items-center justify-between p-6  relative w-full  h-full">
      <div className=" flex flex-col items-baseline justify-between gap-3 h-full w-8/12">
      <div className="flex flex-col items-start justify-normal gap-5">
        <h2 className="uppercase text-primary-200 text-xl">Objetivo</h2>
        <p className="text-primary-200  text-xl tracking-wide leading-relaxed">
          Comencemos a explorar tu septimo Driver, ahora haremos énfasis en tu Player Project Life.
        </p>
        <p className="text-primary-200 mb-10 font-bold text-xl tracking-wide leading-relaxed">
          Estas listo?, <span className="text-primary-100">Vamos!!!</span>
        </p>
      </div>
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
