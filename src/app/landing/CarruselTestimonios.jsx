"use client";
import Image from "next/image";
import React, { useState } from "react";
import { SVGNextCarrusel } from "./component/SVGComponent";

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

  const arrayTestimonios = [
    {
      children:
        '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum saepe at commodi, ut quas repellat odit similique reprehenderit culpa in veniam provident odio illum itaque esse dicta consequatur dolores delectusAspernatur natus provident doloribus quidem repellendus perferendis autem, deleniti, deserunt mollitia sequi ratione, rem molestiae laudantium minima cum blanditiis. Doloremque voluptatem, dignissimos error cum magni Obcaecati et dolorem voluptatibus"',
      id: 1,
      cargo: "Director General",
      nombre: "Erick Brambila",
    },
    {
      children:
        '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum saepe at commodi, ut quas repellat odit similique reprehenderit culpa in veniam provident odio illum itaque esse dicta consequatur dolores delectusAspernatur natus provident doloribus quidem repellendus perferendis autem, deleniti, deserunt mollitia sequi ratione, rem molestiae laudantium minima cum blanditiis. Doloremque voluptatem, dignissimos error cum magni Obcaecati et dolorem voluptatibus"',
      id: 2,
      cargo: "Director General",
      nombre: "Erick Brambila",
    },
    {
      children:
        '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum saepe at commodi, ut quas repellat odit similique reprehenderit culpa in veniam provident odio illum itaque esse dicta consequatur dolores delectusAspernatur natus provident doloribus quidem repellendus perferendis autem, deleniti, deserunt mollitia sequi ratione, rem molestiae laudantium minima cum blanditiis. Doloremque voluptatem, dignissimos error cum magni Obcaecati et dolorem voluptatibus"',
      id: 3,
      cargo: "Director General",
      nombre: "Erick Brambila",
    },
  ];

  return (
    <div className="w-screen relative overflow-x-hidden flex flex-grow mx-auto h-full items-center justify-center">
      <div
        style={{ transform: `translateX(${currentSlideIndex * 100}vw)` }}
        className="flex transition-transform duration-500 w-full h-full items-center justify-center"
      >
        {arrayTestimonios.map((test, i) => (
          <div
            key={test.id}
            className="w-screen h-full flex-shrink-0  flex flex-col p-5 gap-5 items-center justify-normal"
          >
            <div className="items-stretch justify-normal flex w-full relative">
              <div className=" flex md:w-8/12 flex-col p-5 gap-5 items-center text-center justify-between  mx-auto">
                <p className="italic md:p-5 font-bold text-lg">{test.children}</p>
                <span className="text-primary-200 font-medium">
                  {test.cargo}
                </span>
                <p className="text-primary-textGris font-thin">{test.nombre}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handlePreviousSlide}
        className="absolute md:left-20 left-0 top-1/3 transform  p-2 rounded-xl hover:-translate-x-1 active:scale-90 duration-300 font-black text-primary-textGris/50 "
      >
        <SVGNextCarrusel className="rotate-180 md:w-16 w-10 fill-gray-300  stroke-gray-300" />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute md:right-20 right-0 top-1/3 transform  p-2 rounded-xl hover:translate-x-1 active:scale-90 duration-300 font-black text-primary-textGris/50 "
      >
        <SVGNextCarrusel className=" md:w-16 w-10 fill-gray-300  stroke-gray-300" />
      </button>
    </div>
  );
}
