import Image from 'next/image'
import React from 'react'
import redirigiendo from "../../../public/redirigiendo.jpg";
export default function Redirigiendo() {
  return (
    <div className='w-screen h-screen overflow-hidden relative'>
        <div className='absolute top-0 left-0 h-full w-full bg-primary-100-30 backdrop-blur-sm'>
            <Image
            alt='redirigiendo'
            src={redirigiendo}
            
            />
        </div>


    </div>
  )
}
