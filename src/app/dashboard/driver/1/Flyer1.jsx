import Image from "next/image";
import diapo1 from "../../../../../public/Diapositiva2.jpg";
import diapo2 from "../../../../../public/Diapositiva3.jpg";
import { SvgNextVideo } from "@/app/componentes/SVGComponent";
import { contextUser } from "@/context/contextUser";

export default function Flyer1() {
const flyerActivo=contextUser(state=>state.flyerActivo)
const activarFlyer=contextUser(state=>state.activarFlyer)
const flyer=[
    {
id:1,
title:"Flyer 1",
open:false,
img:diapo1
},
    {
id:2,
title:"Flyer 2",
open:false,
img:diapo2
},
]

const handleNextFlyer=()=>{
    activarFlyer(flyerActivo+1)
}
const handlePreviusFlyer=()=>{
    
    activarFlyer(flyerActivo-1)
}
console.log(flyerActivo)
  return (
    <div className="w-full h-full flex relative">
      {
flyerActivo==1?
      <div
      className="w-full -translate-x-">
        <Image
          alt={flyer[0]?.title}
          src={flyer[0]?.img}
          fill
          quality={100}
          className="object-contain"
        />
      </div>
:
flyerActivo==2&&
<div
className="w-full -translate-x-">
  <Image
    alt={flyer[1]?.title}
    src={flyer[1]?.img}
    fill
    quality={100}
    className="object-contain"
  />
</div>
      }
  
      <div className="w-full absolute bottom-20 left-3 z-30 flex items-center gap-3">
        <SvgNextVideo onClick={handlePreviusFlyer} className="w-14 h-14 fill-primary-tonoBlanco rotate-180 cursor-pointer"/>
        <SvgNextVideo onClick={handleNextFlyer} className="w-14 h-14 fill-primary-tonoBlanco cursor-pointer"/>
      </div>
    </div>
  );
}
