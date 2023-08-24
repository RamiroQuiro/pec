"use client"
import { useRouter } from 'next/navigation'
import SVGLogin from './SVGComponent'

export default function LinkLogin() {
    const router=useRouter()
  return (
    <div
    onClick={()=>{router.push("/login")}}
    className="w- flex flex-col items-center cursor-pointer justify-center text-sm">
    <SVGLogin className="w-10" />
    <span  className="w-fll">Iniciar Sesion</span>
  </div>
  )
}
