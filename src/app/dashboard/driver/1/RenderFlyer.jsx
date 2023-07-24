"use client"
import { contextUser } from '@/context/contextUser';
import Image from "next/image";
import diapo1 from "../../../../../public/Diapositiva2.jpg";
import diapo2 from "../../../../../public/Diapositiva3.jpg";
import diapo3 from "../../../../../public/Diapositiva4.jpg";
import diapo4 from "../../../../../public/Diapositiva5.jpg";
import diapo5 from "../../../../../public/Diapositiva6.jpg";
import diapo6 from "../../../../../public/Diapositiva7.jpg";
import diapo7 from "../../../../../public/Diapositiva8.jpg";
import diapo8 from "../../../../../public/Diapositiva9.jpg";
import diapo9 from "../../../../../public/Diapositiva10.jpg";
import diapo10 from "../../../../../public/Diapositiva11.jpg";
import diapo11 from "../../../../../public/Diapositiva12.jpg";
import diapo12 from "../../../../../public/Diapositiva13.jpg";
import diapo13 from "../../../../../public/Diapositiva14.jpg";
import diapo14 from "../../../../../public/Diapositiva15.jpg";
import diapo15 from "../../../../../public/Diapositiva16.jpg";
import { shallow } from "zustand/shallow";

const diapositivas=[diapo1,diapo2,diapo3,diapo4,diapo5,diapo6,diapo7,diapo8,diapo9,diapo10,diapo11,diapo12,diapo13,diapo14,diapo15]


const Flyer=({flyers,flyerActivo})=>{
  return (
    <div className="h-[100%] w-auto">
      <Image
        alt={flyers[flyerActivo - 1]?.title}
        src={flyers[flyerActivo - 1]?.img}
        fill
        quality={100}
        className="object- object-center h-[100%]"
      />
    </div>
  );
  
}
export default function RenderFlyer() {


    const flyers = [];

      for (let index = 1; index <= 15; index++) {
        flyers.push({
          id: index,
          title: `Flyer ${index}`,
          open: false,
          img: diapositivas[index-1],
        },)
        
      }
const flyerActivo=contextUser((state)=>state.flyerActivo,shallow)
  

    switch (flyerActivo) {
        case 1:
            return <Flyer flyers={flyers}flyerActivo={flyerActivo} />
            break;
        case 2:
            return <Flyer flyers={flyers}flyerActivo={flyerActivo} />
            break;
        case 3:
            return <Flyer flyers={flyers}flyerActivo={flyerActivo} />
            break;
        case 4:
            return <Flyer flyers={flyers}flyerActivo={flyerActivo} />
            break;
        case 5:
            return <Flyer flyers={flyers}flyerActivo={flyerActivo} />
            break;
        case 6:
            return <Flyer flyers={flyers}flyerActivo={flyerActivo} />
            break;
        case 7:
            return <Flyer flyers={flyers}flyerActivo={flyerActivo} />
            break;
        case 8:
            return <Flyer flyers={flyers}flyerActivo={flyerActivo} />
            break;
        case 9:
            return <Flyer flyers={flyers}flyerActivo={flyerActivo} />
            break;
        case 10:
            return <Flyer flyers={flyers}flyerActivo={flyerActivo} />
            break;
        case 11:
            return <Flyer flyers={flyers}flyerActivo={flyerActivo} />
            break
        case 12:
            return <Flyer flyers={flyers}flyerActivo={flyerActivo} />
            break;
        case 13:
            return <Flyer flyers={flyers}flyerActivo={flyerActivo} />
            break;
        case 14:
            return <Flyer flyers={flyers}flyerActivo={flyerActivo} />
            break;
        case 15:
            return <Flyer flyers={flyers}flyerActivo={flyerActivo} />
            break;
       
    
        default:
            break;
    }
}
