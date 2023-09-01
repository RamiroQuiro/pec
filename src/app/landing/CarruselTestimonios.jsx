"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function CarruselTestimonios() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
  const [diseable, setDiseable] = useState(false);
  const handleNextSlide = () => {
    if (currentSlideIndex == -1) return;
    setCurrentSlideIndex((prevIndex) => (prevIndex - 1) % 3);
  };

  const handlePreviousSlide = () => {
    if (currentSlideIndex == 1) return;

    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % 3);
  };
  return (
    <div className="w-screen relative overflow-x-hidden flex flex-grow mx-auto h-full items-center justify-center">
      <div
        style={{ transform: `translateX(${currentSlideIndex * 100}vw)` }}
        className="flex transition-transform duration-500 w-full h-full items-center justify-center"
      >
        <div className="w-screen h-full flex-shrink-0  flex flex-col p-5 gap-5 items-center justify-between">
          <div className="relative w-32 h-32 rounded-full p-2 overflow-hidden">
            <Image fill alt="testomiino" src="/logo.png" className="object-cover object-center " />
          </div>
          <p className="italic text-lg font-thin text-center md:p-3 px-10">
            {' "Estoy realmente conforme con el men este 1"'}
          </p>
        </div>
        <div className="w-screen h-full  flex-shrink-0  flex flex-col p-10 items-center justify-between ">
          <div className="relative w-24 h-24 rounded-full p-2 overflow-hidden">
            <Image fill alt="testomiino" src="/logo.png" />
          </div>
          <p className="italic text-lg font-thin text-center p-3">
            {"Estoy realmente conforme con el men este 2"}
          </p>
        </div>
        <div className="w-screen h-full   flex-shrink-0  flex flex-col p-10 items-center justify-between">
          <div className="relative w-24 h-24 rounded-full p-2 overflow-hidden">
            <Image fill alt="testomiino" src="/logo.png" />
          </div>
          <p className="italic text-lg font-thin text-center p-3">
            {"Estoy realmente conforme con el men este 3"}
          </p>
        </div>
      </div>
      <button
        onClick={handlePreviousSlide}
        className="absolute left-5 top-1/2 transform  bg-white p-2 rounded-xl hover:-translate-y-1 duration-300 shadow-md font-black text-primary-textGris/50 text-2xl"
      >
        {"←"}
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-6 top-1/2 transform  bg-white p-2 rounded-xl hover:-translate-y-1 shadow-md duration-300 font-black text-primary-textGris/50 text-2xl"
      >
        {"→"}
      </button>
    </div>
  );
}
