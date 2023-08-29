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
export default function Trimestrs({trimestre,i}) {
  return (
    <View
    style={tw(
      "flex flex-col items-center gap-2 justify-center bg-[#cccccc] flex-grow w-full p-2 my-5 mx-auto rounded-lg"
    )}
  >
    <Text style={tw("font-bold text-lg text-left text-[#00699C]")}>
     { i}° Trimestre
    </Text>
    <Text style={tw("font-bold text-lg border rounded-lg p-2 m-auto w-10/12 mx-auto border-[#cecece] bg-white text-center text-[#00A1A5]")}>
      {trimestre} dias
    </Text>
  </View>)
}
