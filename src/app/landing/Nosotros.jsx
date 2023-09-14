import Image from "next/image";
import nosotros from "../../../public/nosotros.jpg";

export default function Nosotros() {
  return (
    <section id="nosotros" className="min-h-screen flex items-center justify-normal  relative w-full ">
      <div className=" z-10 bg-white/70 backdrop-blur-sm w-full h-full  items-center justify-normal flex md:absolute relative py-10 top-0 left-0 ">
        <div className="flex flex-col items-center justify-evenly text-gray-800 w-10/12 mx-auto h-full">
          <h2 className="text-3xl  font-medium my-14">NOSOTROS</h2>
          <p className="md:text-center text-justify font-semibold">
       KREATIVIUM es cun concepto de INTELICENCIA COMERCIAL fundada por el LEA Héctor Avila Muñoz, egresado de la Universidad Iberoamericana y con mas de 30 años de experiencia en el área comercial. KV tiene como propósito el impulso a las empresas potencializando su área de ventas y disminuyendo el porcentaje de riesgo de fracaso por medio de herramientas creativas, de vanguardia y formación comercial.
          </p>
          <a 
          href="http://www.kreativium.mx"
          target="_blank"
          className=" border-primary-200 border text-primary-200  capitalize px-3 py-2 text-lg mt-20 hover:bg-primary-200 hover:border-white hover:text-white duration-300">
            Mas Información
          </a>
        </div>
      </div>
      <div className="absolute left-0 top-0 w-screen h-full z-0  ">
        {" "}
        <Image
          alt="backgrounNosotros"
          src={nosotros}
          className="object-cover saturate-50"
          fill
          quality={100}
        />
      </div>
    </section>
  );
}
