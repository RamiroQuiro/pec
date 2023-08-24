import Image from "next/image";
import logo from "../../../public/logo.png";
import BotonCancelar from "./BotonCancelar";
import Pantalla1 from "./Pantalla1";

;

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
  <Pantalla1 arrayItems={arrayItems}/>
    </main>
  );
}
