"use client";
import { motion } from "framer-motion";
import BotonAdquirirPEC from "./component/BotonAdquirirPEC";
import CardPrecioPEC from "./component/CardPrecioPEC";
import CardTestimonios from "./component/CardTestimonios";



export default function CardInfoBajoHeader() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        translateX: 100,
      }}
      animate={{
        opacity: 1,
        translateX: 0,
      }}
      transition={{ duration: 0.5, delay: 1, ease: "easeIn" }}
      className="md:min-h-screen w-11/12 z-10 container   flex items-center justify-center py-44 text-primary-textGris mt-12"
    >
      <div className="h-4/6 m-auto w-full container flex md:flex-row flex-col md:items-stretch justify-center flex-wrap text-primary-textGris">
        <div className="flex-auto md:border-r  border-primary-textGris/40 md:w-[30%] w-full flex flex-col items-stretch justify-stretch mb-20 md:m-0   md:px-4 text-sm ">
          <h3 className="text-xl uppercase mx-auto font-semibold my-4">
            Bienvenidos
          </h3>
          <div className=" rounded border mt-10">
            <video
              src="/landing.mp4"
              controls
              muted
              className="rounded shadow-md"
            ></video>
          </div>
        </div>
        <CardPrecioPEC />
       <CardTestimonios/>
      </div>
    </motion.section>
  );
}
