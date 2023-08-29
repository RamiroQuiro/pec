"use client"
import { contextUser } from '@/context/contextUser';
import Image from "next/image";

import { shallow } from "zustand/shallow";
import { useEffect, useState } from 'react';




const Flyer=({flyers,flyerActivo})=>{
  if (flyers.length === 0) {
    // Display loading indicator or placeholder image
    return (
     <LoadingCss/>
    );
  } else {
    // Display Image component
  return (
    <div className="h-[100%] w-auto animate-[aparecer_.5s]">
      <Image
        alt={flyers[flyerActivo - 1]?.title}
        src={flyers[flyerActivo - 1]?.img}
        fill
        quality={100}
        className="object- object-center h-[100%] animate-[aparecer_.5s]"
      />
    </div>
  );
  
}



export default function RenderFlyer() {
  const [diapositivas, setDiapositivas] = useState([])
  const flyerActivo = contextUser((state) => state.flyerActivo, shallow);
  useEffect(() => {
    const diapos=[]
    const importDiapos=async()=>{
        for (let i = 2; i <= 15; i++) {
          const diapositiva= await import(`../../../../../public/driver3/Diapositiva${i}.webp`);
          diapos.push(diapositiva.default)          
        }
        setDiapositivas(diapos);
    }
    importDiapos();
  }, [])
  
  const flyers = [];
  for (let index = 1; index <= 14; index++) {
    flyers.push({
      id: index,
      title: `Flyer ${index}`,
      open: false,
      img: diapositivas[index - 1],
    });
  }
  console.log(flyerActivo)
  return <Flyer flyers={flyers} flyerActivo={flyerActivo} />;
}
