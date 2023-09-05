"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import logo from "../../../../public/logo.png";

export default function LogoPecSidebar() {
    const router=useRouter()
  return (
    <div className="h-20 flex w-full items-center justify-evenly px-5 mt-5">
    <h2 className="text-lg font-medium text-gray-700 uppercase">
      Mi Pec
    </h2>
    <Image onClick={()=>{
        router.push('/')
    }} alt="Logo" src={logo} width={50} height={50} quality={50} className='cursor-pointer'/>
  </div>
  )
}
