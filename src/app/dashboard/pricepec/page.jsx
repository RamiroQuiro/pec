import Footer from "@/app/landing/Footer";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import CardPrice from "./CardPrice";
import { SVGCheck } from "@/app/componentes/SVGComponent";
import BotonCancelar from "./BotonCancelar";

const Items = ({ children }) => {
  return (
    <li className="flex text-xs items-center justify-start gap-2 duration-300 px-3">
      <SVGCheck className="w-3 h-3 min-w-3 min-h-3" /> <p> {children}</p>
    </li>
  );
};

export default function PricePEC() {
  const arrayItems = [
    {
      children: "Capacitar y/o reafirmar conocimientos en el area comercial.",
      id: 1,
    },
    {
      children: "Diseñar la planeación CORRECTAMENTE del área comercial.",
      id: 2,
    },
    {
      children: "Estructurar el área comercial de manera eficaz y creativa.",
      id: 3,
    },
    {
      children:
        "Alinear criterios DIRECCIÓN-LIDER, COMERCIAL-FUERZA DE VENTAS para maximizar los resultados.",
      id: 4,
    },
    {
      children:
        "Crear un DOCUMENTO EJECUTIVO guía de capacitación para todo su equipo y red comercial.",
      id: 5,
    },
    {
      children: "Crear un VISIÓN propia del departamento comercial.",
      id: 6,
    },
    {
      children:
        "Eliminar SUPOSICIONES y PERCEPCIONES equivocadas en el sistema comercial.",
      id: 7,
    },
    {
      children: "Toma de decisiones oportunas.",
      id: 8,
    },
    {
      children: "Toma de decisiones oportunas.",
      id: 9,
    },
    {
      children: "Detección de posibles errores en todo el proceso comercial.",
      id: 10,
    },
  ];

  return (
    <main className=" w-screen min-h-screen h-full flex flex-col items-center justify-between text-primary-textGris relative">
      <nav className="w-full absolute z-40 flex items-center justify-between bg-primary-tonoBlanco h-20 px-16 top-0 left-0">
        {/* logo */}
        <div>
          {" "}
          <Image alt="logo" src={logo} width={50} height={50} quality={50} />
        </div>
        <BotonCancelar />
      </nav>
      <header className="w-full  h-[60vh] bg-[#000028] relative flex items-center justify-between">
        <div className="text-white w-[35%] flex flex-col items-start justify-center pt-10 ml-32 ">
          <h1 className="text-3xl font-bold tracking-wide">
            PEC <br />
            PLAN ESTRATEGICO COMERCIAL
          </h1>
          <p className="text-lg leading-tight">
            El PEC es una metodología estructurada que esta conformada por todas
            las actividades y temas involucrados en el área comercial, su misión
            es que un líder comercial, emprendedor o empresario pueda Entender,
            PLANEAR Y EJECUTAR un PLAN que le permita POTENCIALIZAR sus ventas
            disminuyendo el % de riesgo de fracaso.
          </p>
          <p className="text-xs my-3">
            Creado por:{" "}
            <span className="text-primary-700">Hector Ávila Muñoz</span>{" "}
          </p>
          <p className="text-xs my-3 text-white">
            Ultima Actualización : 19/07/2023
          </p>
        </div>
        <CardPrice />
      </header>
      <section className="min-h-screen w-full mx-auto flex flex-col items-start gap-y-5 ml-32 mt-10 ">
        <div className="border  w-[50%]  p-5 bg-white shadow-md">
          <h3 className="text-lg font-bold my-5 text-[#000028] tracking-wide">
            PEC PLAN ESTRATEGICO COMERCIAL
          </h3>
          <div className="flex flex-row text-primary-textGris h-full">
            <ul className="w-1/2 flex flex-col gap-y-3">
              {arrayItems.slice(0, 6).map((item) => (
                <Items key={item.id}>{item.children}</Items>
              ))}
            </ul>
            <ul className="w-1/2 flex flex-col gap-y-3">
              {arrayItems.slice(6, 10).map((item) => (
                <Items key={item.id}>{item.children}</Items>
              ))}
            </ul>
          </div>
        </div>
        <div className="border  w-[50%]  p-5 bg-white shadow-md text-primary-textGris pb-10">
          <p className="p-5 pb-10">El PEC tiene como característica principal que es DINAMICO, es decir que sifrira modificaciones en el camino, pero es una Base Sólida con lineamientos y estrategias clave a seguir.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
