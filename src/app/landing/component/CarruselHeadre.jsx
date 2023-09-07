"use client";
import { animate, motion, progress, useScroll } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function CarruselHeadre({ imagenes }) {

  const [curretImg, setCurretImg] = useState(0);
  const cantidad = imagenes?.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurretImg((curretImg + 1) % cantidad);
    }, 8000);
    return () => clearInterval(interval);
  }, [curretImg]);


  if (!Array.isArray(imagenes) || cantidad == 0) return;
  else
    return (
      <motion.div
        initial={{
          scale: 1.5,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="absolute head left-0 top-16 w-full  flex items-center justify-normal h-full z-0 overflow-x-hidden"
      >
        {" "}
        {imagenes?.map((img, i) => (
          <div
            key={i}
            className={`${
              curretImg == i
                ? "opacity-100 fixed backdrop-blur-sm backdrop-grayscale bg-blend-overlay"
                : "opacity-50 contrast-100  backdrop-grayscale-0 bg-blend-lighten"
            } absolute left-0 top-0 w-full h-full  duration-1000`}
          >
            {curretImg == i && (
              <Image
                alt="backgrounHeader"
                src={img.src}
                className="object-cover object-center w-screen animate-[aparacer_.5s] "
                fill
                quality={100}
              />
            )}
          </div>
        ))}
      </motion.div>
    );
}
