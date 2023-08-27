import { Text, View,Image } from '@react-pdf/renderer'
// import  Image  from "@react-pdf/image";
import { createTw } from "react-pdf-tailwind";
import logo from "../../../public/logo.png";
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
})


console.log(window.location.origin)

export default function CabeceraPDF() {
  return (
    <View style={tw(
        "whitespace-nowrap flex flex-row items-center gap-2 border-b border-b-2 justify-between flex-row w-11/12 mb-2 mx-auto h-1/6"
      )}>
        <View>
          <Image
       
       
          src={window.location.origin+'/logo.png'}
          />
      </View>
      <Text
      style={tw(
        "text-sm font-extraligth w-8/12 text-gray-800 "
      )}
      >
        Desarrollo Web con experiencia en la creación de sitios web y
        aplicaciones atractivas y funcionales. Especializado en React,
        Node.js y TailwindCSS.{" "}
      </Text>
    </View>
  )
}