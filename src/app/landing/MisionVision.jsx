import React from 'react'

export default function MisionVision() {
  return (
   <section
   id='misionVision'
   className='w-11/12 min-h-[100vh] flex flex-col items-center bg-white  justify-evenly gap-16 py-16  text-primary-textGris'>
       <h2 className='text-5xl text-primary-200  md:font-bold '>Misión y Visión</h2>
    
    <div className='flex flex-col gap-5 items-center justify-center text-center'>
      <h3 className='text-2xl font-medium'>Misión</h3>
      <p className='md:w-8/12'>Disminuir el % de mortandad de los emprendimientos ptencializando su área comercial a través de nuestra herramienta.</p>
    </div>
    <div className='flex flex-col gap-5 items-center justify-center text-center'>
    <h3 className='text-2xl font-medium'>Visión</h3>
    <p className='md:w-8/12'>Ser la herramienta comercial ágil, clara y económiva más reconocida que ayude a los líderes comerciales a potencializar sus ventas a través de una metodología efectiva y creativa de capacitación</p>
    </div>


   </section>
  )
}
