import React from 'react'

export default function MisionVision() {
  return (
   <section className='w-11/12 h-[75vh] flex flex-col items-center justify-between py-14 mb-16 text-gray-800'>
       <h2 className='text-3xl  font-medium my-14'>Misión y Visión</h2>
    
    <div className='flex flex-col gap-5 items-center justify-center text-center'>
      <h3 className='text-2xl font-medium'>Misión</h3>
      <p className='w-8/12'>Disminuir el % de mortandad de los emprendimientos ptencializando su área comercial a través de nuestra herramienta.</p>
    </div>
    <div className='flex flex-col gap-5 items-center justify-center text-center'>
    <h3 className='text-2xl font-medium'>Visión</h3>
    <p className='w-8/12'>Ser la herramienta comercial ágil, clara y económiva más reconocida que ayude a los líderes comerciales a potencializar sus ventas a través de una metodología efectiva y creativa de capacitación</p>
    </div>


   </section>
  )
}
