"use client"
import { useRouter } from 'next/navigation'
import {SVGLogin} from './SVGComponent'

export default function LinkLogin() {
    const router=useRouter()
  return (
    <div
    onClick={()=>{router.push("/login")}}
    className=" flex-col items-center cursor-pointer justify-center text-sm md:flex hidden">
    <SVGLogin  className="w-10" />
    <span  className="w-fll md:block hidden">Iniciar Sesion</span>
  </div>
  )
}
