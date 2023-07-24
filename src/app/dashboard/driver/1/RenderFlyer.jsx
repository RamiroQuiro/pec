"use client"
import { contextUser } from '@/context/contextUser';
import Image from "next/image";
import diapo1 from "../../../../../public/Diapositiva2.jpg";
import diapo2 from "../../../../../public/Diapositiva3.jpg";
import { shallow } from "zustand/shallow";

export default function RenderFlyer() {
    const flyer = [
        {
          id: 1,
          title: "Flyer 1",
          open: false,
          img: diapo1,
        },
        {
          id: 2,
          title: "Flyer 2",
          open: false,
          img: diapo2,
        },
      ];
const flyerActivo=contextUser((state)=>state.flyerActivo,shallow)
  

    switch (flyerActivo) {
        case 1:
            return <div className=" h-[100%] w-auto">
            <Image
              alt={flyer[0]?.title}
              src={flyer[0]?.img}
              fill
              quality={100}
              className="object- object-center h-[100%] "
            />
          </div>
            break;
        case 2:
            return  <div className=" h-[100%] w-auto">
            <Image
              alt={flyer[1]?.title}
              src={flyer[1]?.img}
              fill
              quality={100}
              className="object- h-[100%] "
            />
          </div>
            break;
    
        default:
            break;
    }
}
