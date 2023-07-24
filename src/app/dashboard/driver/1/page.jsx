"use client"
import SectionDash from '../../component/SectionDash'
import ContenedorPasos from './ContenedorPasos'
import { contextUser } from '@/context/contextUser'
import RenderFlyer from './RenderFlyer'
import Flyer1 from './Flyer1'

export default function page() {
  const flyerActivo=contextUser((state)=>state.flyerActivo)
  return (
    <SectionDash>
          <div className="bg-white md:w-[78vw] md:h-[85vh] absolute right-10 top-24 py-10 flex flex-col items-center justify-center border shadow-md">
            {
              flyerActivo>0?
              <Flyer1/>
              :
              <>
            <h2 className='text-2xl text-neutral-800 font-medium'>Empatía con la Empresa</h2>
            
            <ContenedorPasos/>
            </>
            }
      </div>
    </SectionDash>
  )
}
