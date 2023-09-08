"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function BotonInicioSesion() {
  const {data}=useSession()

    const router=useRouter()
  return (
    <button
        onClick={()=>{
router.push('/dashboard')
        }}
        className="bg-primary-200 animate animate-pulse text-white md:mt-10 md:w-1/2 w-10/12 text-lg hover:bg-primary-100 duration-300 py-3">
          {
          !data?.user?
          "Iniciar Sesión":
          !data.user.pecPagado?
          "Adquirir mi PEC"
          :
          "Ver Mi PEC"
          }
        </button>
  )
}
