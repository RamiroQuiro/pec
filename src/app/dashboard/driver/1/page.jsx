import React from 'react'
import SectionDash from '../../component/SectionDash'
import ContenedorPasos from './ContenedorPasos'

export default function page() {
  return (
    <SectionDash>
          <div className="bg-white md:w-[78vw] md:h-[80vh] absolute right-10 top-28 py-10 flex flex-col items-center justify-center">
            <h2 className='text-2xl text-neutral-800 font-medium'>Empatía con la Empresa</h2>
            
            <ContenedorPasos/>
      </div>
    </SectionDash>
  )
}
