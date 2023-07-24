import Image from "next/image";
import step2 from "../../../../../public/confundido.png";
import ButtonLeerMas from "./ButtonLeerMas";
export default function Step2() {
  return (
    <div className="flex items-center justify-between p-6  relative w-full  h-full">
      <div className=" flex flex-col items-baseline justify-between gap-3 h-full w-8/12">
        <h2 className="uppercase text-primary-200 text-xl">
          LO QUE TIENES QUE SABER SOBRE CULTURA ORGANIZACIONAL
        </h2>
        <p className="text-primary-textGris text-sm tracking-wide leading-relaxed">
          a) ¿Que es la Cultura Organizacional de una Empresa?: Es el el estilo
          de vida de la organización, en la cual, a través de creencias,
          costumbres y normas, un grupo de colaboradores actual y se rigen por
          las mismas. b) ¿Que incluye la Cultura Organizacional de una Empresa?:
          La Misión, Vision, Valores y Código de Ética entre otras
          complementarias.
        </p>
        <ButtonLeerMas />
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