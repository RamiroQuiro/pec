"use client"
import { useRouter } from 'next/navigation'
import {SVGLogin} from './SVGComponent'

export default function LinkLogin() {
    const router=useRouter()
  return (
    <div
    onClick={()=>{router.push("/login")}}
    className=" flex-col items-center my-5 text-center cursor-pointer justify-center text-sm md:flex ">
    <SVGLogin  className="w-10 mx-auto" />
    <span  className="w-fll md:block ">Iniciar Sesion</span>
  </div>
  )
}
