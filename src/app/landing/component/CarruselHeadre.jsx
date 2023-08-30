"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function CarruselHeadre({ imagenes }) {
  const [curretImg, setCurretImg] = useState(0);
  const cantidad = imagenes?.length;

  const changeImage = () => {
    setTimeout(() => {
      if (curretImg == 2) {
        setCurretImg(curretImg-1);
      } else {
        setCurretImg(curretImg + 1);
      }
    }, 2000);
  };

  changeImage();
  if (!Array.isArray(imagenes) || cantidad == 0) return;
  else
    return (
      <div className="absolute left-0 top-16 w-full flex items-center justify-normal h-full z-0 overflow-x-hidden">
        {" "}
        {imagenes?.map((img, i) => (
          <div
          key={i}
          className="absolute left-0 top-0 w-full h-full transition-transform duration-1000"
          style={{
            transform: `translateX(${(i - curretImg) * 100}%)`,
          }}
        >
          {curretImg == i && (
              <Image
                alt="backgrounHeader"
                src={img.src}
                className="object-cover w-screen animate-[aparacer_.5s]"
                fill
                quality={100}
              />
            )}
          </div>
        ))}
      </div>
    );
}
