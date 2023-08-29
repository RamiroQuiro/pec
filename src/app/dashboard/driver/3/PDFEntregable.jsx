"use client";

import { Document, Page, View, Text, Svg, Path } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";
import CabeceraPDF from "@/app/componentes/CabeceraPDF";
import FooterPDF from "@/app/componentes/FooterPDF";
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


  return (
    <Document>
      <Page
        style={{
          height: "90vh",
          fontSize: "10",
          paddingTop: "20px",
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
          {/* Titulo del Entregable */}
          <View
            style={tw(
              "flex flex-row  border-b mb-5 p-5 items-center gap-4 justify-center flex-grow w-full mx-auto rounded-lg overflow-hidden"
            )}
          >
            <Text
              style={tw(
                "font-medium text-xl font-black capitalize  text-[#00699C]"
              )}
            >
              ENTREGABLE DRIVER 3: EMPATÍA CON EL MERCADO
            </Text>
          </View>
          <View
            style={tw(
              "flex flex-col items-start gap-2 justify-center flex-grow w-full my-5 mx-auto rounded-lg"
            )}
          >
            <Text style={tw("font-bold text-lg text-left text-[#00A1A5]")}>
              1.- Mi mercado meta es:
            </Text>
            <View
              style={tw(
                "flex flex-row items-start gap-2 justify-start mb-10 flex-grow w-11/12 mx-auto rounded-lg "
              )}
            >
              <Text
                style={tw(
                  "font-medium text-xl text-left font-black capitalize  text-[#00699C]"
                )}
              >
                {data?.formulario1?.mercadoMetaNatural} 
              </Text>
              
            </View>
            <Text style={tw("font-bold text-lg text-left text-[#00A1A5]")}>
              2.- El perfil de mi cliente es:
            </Text>
            <View
              style={tw(
                "flex flex-row items-start gap-2 justify-start mb-10 flex-grow w-11/12 mx-auto rounded-lg "
              )}
            >
              <Text
                style={tw(
                  "font-medium text-xl text-left font-black capitalize  text-[#00699C]"
                )}
              >
                {data?.formulario2?.perfilCliente} 
              </Text>
              
            </View>
            <Text style={tw("font-bold text-lg text-left text-[#00A1A5]")}>
              3.- <Text style={tw("font-bold text-lg text-left text-[#F06144]")}>Mi MAPPING</Text> de oportunidades es:
            </Text>
            <View
              style={tw(
                "flex flex-row items-start gap-2 justify-start mb-10 flex-grow w-11/12 mx-auto rounded-lg "
              )}
            >
              <Text
                style={tw(
                  "font-medium text-xl text-left font-black capitalize  text-[#00699C]"
                )}
              >
                {data?.formulario1?.mercadoMetaNatural} 
              </Text>
              
            </View>
        
          </View>{" "}
        </View>{" "}
       <FooterPDF/>
      </Page>{" "}
    </Document>
  );
}
