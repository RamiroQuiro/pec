"use client"
import { useRouter } from 'next/navigation'

export default function BotonInicioSesion() {
    const router=useRouter()
  return (
    <button
        onClick={()=>{
router.push('/dashboard')
        }}
        className="bg-primary-200 animate animate-pulse text-white md:mt-10 w-1/2 text-lg hover:bg-primary-100 duration-300 py-3">
          Iniciar Sesión
        </button>
  )
}
