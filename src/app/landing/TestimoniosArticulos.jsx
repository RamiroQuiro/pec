import React from 'react'
import CarruselTestimonios from './CarruselTestimonios'

export default function TestimoniosArticulos() {
  return (
    <section className='min-h-screen my-10 relative w-full bg-primary-500 text-primary-textGris mx-auto'>

        <div className=' mx-auto w-10/12 flex items-center justify-center text-center'>
        <h2 className='text-4xl  font-medium my-10'>TESTIMONIOS Y ARTÍCULOS</h2>
        </div>
        <CarruselTestimonios/>
    </section>
  )
}
