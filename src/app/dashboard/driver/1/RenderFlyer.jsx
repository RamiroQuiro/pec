"use client"
import { contextUser } from '@/context/contextUser';
import Image from "next/image";

import { shallow } from "zustand/shallow";
import { useEffect, useState } from 'react';




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
  const [diapositivas, setDiapositivas] = useState([])
  useEffect(() => {
    const diapos=[]
    const importDiapos=async()=>{
        for (let i = 2; i < 24; i++) {
          const diapositiva= await import(`../../../../../public/Diapositiva${i}.jpg`);
          console.log(diapositiva)
          diapos.push(diapositiva.default)          
        }
        setDiapositivas(diapos);
        console.log(diapos)
    }
    importDiapos();
  }, [])
  console.log(diapositivas)

  const flyers = [];
  for (let index = 1; index <= 24; index++) {
    flyers.push({
      id: index,
      title: `Flyer ${index}`,
      open: false,
      img: diapositivas[index - 1],
    });
  }
  const flyerActivo = contextUser((state) => state.flyerActivo, shallow);
  return <Flyer flyers={flyers} flyerActivo={flyerActivo} />;
}
