import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import { createTw } from 'react-pdf-tailwind';

const tw = createTw({
    theme: {
      fontFamily: {
        sans: ["Comic Sans"],
      },
      extend: {
        colors: {
          custom: "#bada55",
        },
      },
    },
  });
  
export default function PosicionamientoEAR({array}) {
    console.log(array)
  return (
    <View
    style={tw(
      "flex flex-col items-start gap-2 justify-start mb-5 flex-grow w-full mx-auto rounded-lg "
    )}
  >
    {
        array?.sort((a,b)=>Number(a.position)-Number(b.position))?.map((element)=>(

    <Text
    key={element.id}
      style={tw("font-medium text-sm text-left   text-[#00699C]")}
    >
    {element.position} - {element.children}
    </Text>
        ))
    }
  </View>
  )
}
