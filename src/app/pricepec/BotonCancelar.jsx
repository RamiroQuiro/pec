"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function BotonCancelar() {
    const router=useRouter()
  return (
    <button
    onClick={()=>{
        router.push('/')
    }}
    className="text-primary-100 font-medium">Cancelar</button>)
}
