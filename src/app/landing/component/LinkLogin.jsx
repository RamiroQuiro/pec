"use client"
import {SVGLogin} from './SVGComponent'

export default function LinkLogin({onClick}) {
 
  return (
    <div
    onClick={onClick}
    className=" flex-col items-center my- text-center cursor-pointer justify-center text-sm md:flex ">
    <SVGLogin  className="w-10 mx-auto" />
    <span  className="w-fll md:block ">Iniciar Sesion</span>
  </div>
  )
}
