import Image from "next/image";
import step2 from "../../../../../public/step1.png";
import ButtonLeerMas from "./ButtonLeerMas";
export default function Step2() {
  return (
    <div className="flex items-center justify-between p-6  relative w-full  h-full">
      <div className=" flex flex-col items-baseline justify-between gap-3 h-full w-8/12">
        <h2 className="uppercase text-primary-200 text-xl">
          LO QUE TIENES QUE SABER ACERCA DE ESTRUCTURAR EQUIPOS COMERCIALES
        </h2>
        <p className="text-primary-200  text-xl tracking-wide leading-relaxed">
          Excelente vamos por buen camino, ahora haremos énfasis en lo que debes
          saber acerca de Estructurar Equipos Comerciales
        </p>
        <p className="text-primary-200 mb-10 font-bold text-xl tracking-wide leading-relaxed">
          Estas listo?, <span className="text-primary-100">Vamos!!!</span>
        </p>
        <div className="flex items-center justify-normal gap-5">
          <ButtonLeerMas stepN={2}>Anterior</ButtonLeerMas>
          <ButtonLeerMas stepN={3}>Leer mas...</ButtonLeerMas>
        </div>
      </div>
      <div className="w-4/12 h-full relative">
        <Image
          alt="step1"
          src={step2}
          fill
          className=" object-center object-contain absolute -right-3 top-4 w-4/12 h-auto "
        />
      </div>
    </div>
  );
}
