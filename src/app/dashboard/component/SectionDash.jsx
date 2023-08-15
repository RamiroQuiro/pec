import React from 'react'
import { Toaster } from 'react-hot-toast'

export default function SectionDash({children}) {
  return (
    <section className='flex items-center justify-center min-h-screen w-screen relative  mb-10 pb-10'><Toaster/>{children}</section>
  )
}
