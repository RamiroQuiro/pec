import React from 'react'

export default function ContenedorTitulosDeStep({children}) {
  return (
    <div className=" flex flex-col md:items-baseline justify-between gap-3 h-full md:w-8/12">{children}</div>
  )
}
