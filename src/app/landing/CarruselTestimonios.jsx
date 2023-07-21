"use client"
import React, { useState } from 'react'



export default function CarruselTestimonios() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(2)

    const handleNextSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) );
      };
    
      const handlePreviousSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + 3) );
      };
    
  return (
      <div className='w-auto relative overflow-x-hidden flex  mx-auto h-full items-center '> 
    <div 
   style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
    className='flex transition-transform duration-500 h-full'>
        <div className="w-screen h-full bg-red-500 flex-shrink-0">uno</div>
        <div className="w-screen h-full bg-blue-500 flex-shrink-0">dos</div>
        <div className="w-screen h-full bg-green-500 flex-shrink-0">tres</div>
      </div>
      <button
        onClick={handlePreviousSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        Anterior
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        Siguiente
      </button>
    </div>
  )
}
