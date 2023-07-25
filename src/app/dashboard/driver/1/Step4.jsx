import { contextUser } from '@/context/contextUser'
import React from 'react'
import Step41 from './Step41'
import Step42 from './Step42'

export default function Step4() {
  
const subPantallas=contextUser(state=>state.subPantallas)
  return (
    <div className="flex items-center justify-between p-6  relative w-full  h-full">
       {subPantallas==41 ? (
        <Step41/>
       ):
       subPantallas==42?
       ( <Step42/>)
       :<></>
       }
    </div>
  )
}
