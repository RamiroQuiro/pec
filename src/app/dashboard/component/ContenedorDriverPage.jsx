import React from 'react'
import SectionDash from './SectionDash'

export default function ContenedorDriverPage({children}) {
  return (
    <SectionDash>
    
    <div className="bg-white mt-20 md:mt-0 md:w-[78vw] w-full md:min-h-[85vh] md:h-[95vh] h-auto md:absolute right-10 top-24  flex flex-col items-center justify-center border shadow-md">{children}
        </div></SectionDash>
  )
}
