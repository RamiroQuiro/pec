"use client"
import { contextUser } from '@/context/contextUser'
import SectionDash from '../../component/SectionDash'
import ContenedorPasos from './ContenedorPasos'

export default function page() {
  const flyerActivo=contextUser((state)=>state.flyerActivo)
  return (
    <SectionDash>
          <div className="bg-white md:w-[78vw] md:h-[85vh] absolute right-10 top-24  flex flex-col items-center justify-center border shadow-md">
           
            <h2 className='text-2xl text-neutral-800 mt-8 font-medium'>Empatía con la Productp</h2>
            
            <ContenedorPasos/>
           
      </div>
    </SectionDash>
  )
}
