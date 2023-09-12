import React from 'react'
import SectionDash from './component/SectionDash'
import ContenedorVideo from './component/ContenedorVideo'
import BotonSiguiente from './BotonSiguiente'
import { Toaster } from 'react-hot-toast'

export default function Dashboard() {
  return (
    <SectionDash>
    <div className="bg-white md:w-[78vw] w-full h-screen  md:h-[85vh] md:absolute right-10 top-24 flex flex-col items-start justify-center">
      <ContenedorVideo />
      {/* <div className="flex items-center justify-between gap-3 mt-3 pl-14">
        <button className="bg-primary-textGris disabled:bg-primary-200/40 font- rounded text-white capitalize text-xs px-5 py-3">
          omitir
        </button>
        <BotonSiguiente />
      </div> */}
    </div>
    <Toaster />
  </SectionDash>
  )
}
