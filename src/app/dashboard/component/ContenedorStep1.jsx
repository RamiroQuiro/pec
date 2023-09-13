import React from 'react'

export default function ContenedorStep({children}) {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between p-6  relative w-full  h-full">
    
        {children}
        </div>
  )
}
