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


const arrayTestimonios=[
  {
    children:'"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum saepe at commodi, ut quas repellat odit similique reprehenderit culpa in veniam provident odio illum itaque esse dicta consequatur dolores delectusAspernatur natus provident doloribus quidem repellendus perferendis autem, deleniti, deserunt mollitia sequi ratione, rem molestiae laudantium minima cum blanditiis. Doloremque voluptatem, dignissimos error cum magni Obcaecati et dolorem voluptatibus"',
    id:1,
    cargo:"Director General",
    nombre:"Erick Brambila"
  },
  {
    children:'"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum saepe at commodi, ut quas repellat odit similique reprehenderit culpa in veniam provident odio illum itaque esse dicta consequatur dolores delectusAspernatur natus provident doloribus quidem repellendus perferendis autem, deleniti, deserunt mollitia sequi ratione, rem molestiae laudantium minima cum blanditiis. Doloremque voluptatem, dignissimos error cum magni Obcaecati et dolorem voluptatibus"',
    id:2,
    cargo:"Director General",
    nombre:"Erick Brambila"
  },
  {
    children:'"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum saepe at commodi, ut quas repellat odit similique reprehenderit culpa in veniam provident odio illum itaque esse dicta consequatur dolores delectusAspernatur natus provident doloribus quidem repellendus perferendis autem, deleniti, deserunt mollitia sequi ratione, rem molestiae laudantium minima cum blanditiis. Doloremque voluptatem, dignissimos error cum magni Obcaecati et dolorem voluptatibus"',
    id:3,
    cargo:"Director General",
    nombre:"Erick Brambila"
  },
]

  return (
    <div className="w-screen relative overflow-x-hidden flex flex-grow mx-auto h-full items-center justify-center">
      <div
        style={{ transform: `translateX(${currentSlideIndex * 100}vw)` }}
        className="flex transition-transform duration-500 w-full h-full items-center justify-center"
      >
        {
          arrayTestimonios.map((test,i)=>(

        <div key={test.id} className="w-screen h-full flex-shrink-0  flex flex-col p-5 gap-5 items-center justify-between">
          <div className=" flex w-1/2 flex-col p-5 gap-5 items-center text-center justify-between">
            <p className="italic p-5">{test.children}</p>
            <span className="text-primary-200 font-medium">{test.cargo}</span>
            <p className="text-primary-textGris font-thin">{test.nombre}</p>
            </div>
        </div>


          ))
        }
     
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
