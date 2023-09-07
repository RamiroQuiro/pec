"use client";

import { motion } from "framer-motion";
import BotonInicioSesion from "./component/BotonInicioSesion";

export default function Titulos() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 100 }}
      animate={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{ duration: 0.5, delay: 1, ease: "easeIn" }}
      className="md:w-2/4 w-full   mx-auto py-10 gap-5 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-between z-10 absolute -bottom-0 md:-bottom-28 md:left-1/4  border-t border-primary-200/50"
    >
      <motion.h2
        initial={{ opacity: 0, translateY: 100 }}
        animate={{
          opacity: 1,
          translateY: 0,
        }}
        className="text-xl  text-primary-200 TextoHeader"
      >
        {"  PEC (Plan Estrategico Comercial)"}
      </motion.h2>
      <h2 className="md:text-2xl font-medium text-gray-700">
        POTENCIALIZANDO ÁREAS COMERCIALES
      </h2>
      <BotonInicioSesion />
    </motion.div>
  );
}
