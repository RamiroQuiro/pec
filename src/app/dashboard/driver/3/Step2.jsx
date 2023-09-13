import Image from "next/image";
import step2 from "../../../../../public/step1.png";
import ButtonLeerMas from "./ButtonLeerMas";
import ContenedorStep from "../../component/ContenedorStep1";
import ContenedorTitulosDeStep from "../../component/ContenedorTitulosDeStep";
export default function Step2() {
  return (
    <ContenedorStep>
    <ContenedorTitulosDeStep>
        <h2 className="uppercase text-primary-200 text-xl">
          LO QUE TIENES QUE SABER ACERCA DEL MERCADO
        </h2>
        <p className="text-primary-200  text-xl tracking-wide leading-relaxed">
      Excelente vamos por buen camino, ahora haremos énfasis en lo que debes saber acerca del Mercado.
        </p>
        <p className="text-primary-200 mb-10 font-bold text-xl tracking-wide leading-relaxed">
          Estas listo?, <span className="text-primary-100">Vamos!!!</span>
        </p>
        <div className="flex items-center justify-normal gap-5">

      
        <ButtonLeerMas stepN={3}>Leer mas...</ButtonLeerMas>
        </div>
      </ContenedorTitulosDeStep>
      <div className="w-4/12 h-full relative">
        <Image
          alt="step1"
          src={step2}
          fill
          className=" object-center object-contain absolute -right-3 top-4 w-4/12 h-auto "
        />
      </div>
    </ContenedorStep>
  );
}
