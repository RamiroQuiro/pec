"use client"

import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function ButtonPago({priceId}) {
const router=useRouter()
    const clickPago=async(priceId)=>{
try{
const res=await axios.post('/api/checkout',{priceId})
if(res.status==200){
    router.push(res.data.url)
}
}catch (error) {
    console.log(error)
}

}
  return (
    <button
        onClick={()=>clickPago(priceId)}      
    className="bg-primary-100 hover:bg-primary-200 duration-500 text-white font-bold capitalize w-full py-4">
      Comprar Ahora
    </button>
  )
}
