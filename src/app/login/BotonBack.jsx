"use client"
import { useRouter } from 'next/navigation'
import { SvgBack } from '../componentes/SVGComponent'

export default function BotonBack() {
    const router=useRouter()
    const handleBack=()=>{
        router.push('/')
    }
  return (
    <div
    onClick={handleBack}
    className="absolute top-2 left-2 w-8 h-8 bg-primary-textGris/50  rounded hover:bg-primary-textGris/30 cursor-pointer active:-translate-x-0.5 active:scale-95 duration-300">
          <div className="relative group">
            <span className="text-xs bg-primary-200/80 group-hover:block hidden animate-[aparecer_.5s]  rounded p-1 text-white -translate-y-full absolute -left-1 -top-1">
              volver
            </span>
            <SvgBack className="fill-white" />
          </div>
        </div>
  )
}
