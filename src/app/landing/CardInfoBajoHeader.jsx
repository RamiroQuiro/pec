"use client";
import { motion } from "framer-motion";
import BotonAdquirirPEC from "./component/BotonAdquirirPEC";

const TarjetaInfomativa = ({ h3, children }) => {
  return (
    <div className="flex-auto md:border-r md:border-b-0 border-b pb-10 md:pb-0 border-primary-textGris/40  text-center md:w-[30%] w-full  flex flex-col items-center justify-center px-4 md:text-sm">
      <h3 className="text-xl uppercase font-semibold my-4">{h3}</h3>
      <div className="md:px-5 text-center font-medium leading-relaxed flex flex-col items-center justify-evenly flex-grow">
        {children}
      </div>
    </div>
  );
};

export default function CardInfoBajoHeader() {
  return (
    <motion.section className="md:h-screen w-11/12 z-10 container  flex items-center justify-center py-24 text-primary-textGris mt-12">
      <div className="h-4/6 m-auto w-full container flex md:flex-row flex-col md:items-stretch justify-center flex-wrap text-primary-textGris">
        <div className="flex-auto md:border-r  border-primary-textGris/40 md:w-[30%] w-full flex flex-col items-center justify-center mb-20 md:m-0  md:px-4 text-sm py-4">
          <h3 className="text-xl uppercase font-semibold my-4">Bienvenidos</h3>
          <div className=" rounded border">
            <video
              src="/landing.mp4"
              controls
              muted
              className="rounded shadow-md"
            ></video>
          </div>
        </div>
        <TarjetaInfomativa className="text-center" h3={"Mi PEC"}>
          <p>
            Metodología estructurada conformada por todas las actividades y
            temas involucrados en el área comercial.
          </p>
          <div className="text-primary-textGris/90 mt-5">
            <span>Precio Total</span>
            <p className=" text-3xl  font-bold">$15,000.00 MX + IVA</p>
          </div>
        {/* boton que compruba el regusto y despues el pago del usuario */}
        <BotonAdquirirPEC/>
        </TarjetaInfomativa>
        <TarjetaInfomativa h3={"Ver mi PEC"}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            repudiandae fugiat unde repellendus debitis amet id eius est
            voluptate iure, labore delectus distinctio dolorem officiis
            molestias harum sunt cum blanditiis. Laboriosam quod ratione, iste
            eos aliquid expedita et a tempore facilis iure reiciendis
            consequuntur sapiente voluptatem. Beatae sapiente accusantium
            obcaecati tempora, quos illum mollitia veritatis debitis, impedit
            totam itaque sed!
          </p>
          <button className=" border-primary-200 border text-primary-200   capitalize px-3 py-2 text-lg mt-16 hover:bg-primary-200 hover:border-white hover:text-white duration-300">
            Mas Información
          </button>
        </TarjetaInfomativa>
      </div>
    </motion.section>
  );
}
