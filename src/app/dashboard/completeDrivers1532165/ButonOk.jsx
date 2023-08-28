"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function ButonOk() {
    const router=useRouter()
  return (
    <button className=' w-24 text-lg py-2 font-black capitalize text-white rounded bg-primary-100 '
    onClick={()=>{
        router.push('/dashboard')
    }}
    >
        Ok</button>
  )
}
