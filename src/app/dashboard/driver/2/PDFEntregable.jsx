"use client";

import { Document, Page, View, Text } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";
import CabeceraPDF from "@/app/componentes/CabeceraPDF";
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

export default function PDFEntregable({ data, session, label }) {
  console.log(data);

  return (
    <Document>
      <Page
        style={{
          height: "90vh",
          fontSize: "10",
          paddingTop:'20px'
        }}
        orientation=""
        size={"A4"}
        fixed
      >
        <CabeceraPDF />
        <View
          style={tw(
            "flex flex-col items-start justify-center flex-grow w-11/12  mx-auto rounded-lg overflow-hidden text-[#00699C]"
          )}
        >
          <View
            style={tw(
              "flex flex-row  border-b mb-5 p-5 items-center gap-2 justify-center flex-grow w-full mx-auto rounded-lg overflow-hidden"
            )}
          >
            <Text
              style={tw("font-medium text-xl font-black capitalize  text-[#00699C]")}
            >
              ENTREGABLE DRIVER 2: EMPATÍA CON EL PRODUCTO
            </Text>
           
          </View>
         
          <View
            style={tw(
              "flex flex-col items-start gap-2 justify-center flex-grow w-full my-5 mx-auto rounded-lg"
            )}
          >
            <Text style={tw("font-bold text-lg text-left text-[#00A1A5]")}>
              Tu Misión Comercial
            </Text>
            <View
              style={tw(
                "flex flex-col items-start gap-2 justify-center flex-grow w-11/12 mx-auto rounded-lg "
              )}
            >
              <Text style={tw("font-bold text-left text-[#323639] ")}>
              </Text>
            </View>
          </View>{" "}
          
        </View>{" "}
      </Page>{" "}
    </Document>
  );
}
