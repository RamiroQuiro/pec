import { SVGPlay } from '@/app/componentes/SVGComponent'
import React from 'react'

export default function ContenedorVideo() {
  return (
    <div className="rounded-lg w-[90%] h-[87%] border-2 mx-auto shadow-lg relative">
          <div className="rounded-3xl bg-neutral-700 w-32 h-24 absolute left-[42.5%] top-1/3 ">
            <SVGPlay className="fill-white w-10/12 h-5/6 mt-2 m-auto" />
          </div>
          <video></video>
        </div>
  )
}
