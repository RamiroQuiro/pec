"use client"
import { useRouter } from 'next/navigation'

export default function BotonInicioSesion() {
    const router=useRouter()
  return (
    <button
        onClick={()=>{
router.push('/dashboard')
        }}
        className="bg-primary-200 rounded text-white md:mt-10 w-52 hover:bg-primary-100 duration-300 py-2">
          Iniciar Sesión
        </button>
  )
}
