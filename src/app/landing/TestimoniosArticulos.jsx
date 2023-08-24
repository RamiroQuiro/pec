import React from 'react'
import CarruselTestimonios from './CarruselTestimonios'

export default function TestimoniosArticulos() {
  return (
    <section className='h-screen relative w-full bg-primary-500 text-gray-800 mx-auto'>

        <div className=' mx-auto w-10/12 flex items-center justify-center text-center'>
        <h2 className='text-3xl  font-medium my-14'>TESTIMONIOS Y ARTÍCULOS</h2>
        </div>
        <CarruselTestimonios/>
    </section>
  )
}
