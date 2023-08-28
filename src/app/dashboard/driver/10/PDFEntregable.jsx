"use client";

import { Document, Page, View, Text, Svg, Path } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";
import CabeceraPDF from "@/app/componentes/CabeceraPDF";
import FooterPDF from "@/app/componentes/FooterPDF";
import Trimestrs from "./pdf/Trimestrs";
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
  let arrayValor=[]
  if (!data.formulario2) {
    null
  }else  {arrayValor=Object.values(data.formulario2)}
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
          {/* contenedor Titulo del Entregable */}
          <View
            style={tw(
              "flex flex-row  border-b mb-5 p-5 items-center justify-center flex-grow w-full mx-auto rounded-lg overflow-hidden"
            )}
          >
            {/* titulo del entregable */}
            <Text
              style={tw(
                "font-medium text-xl font-black capitalize  text-[#00699C]"
              )}
            >
              ENTREGABLE DEL DRIVER 10: VALOR AGREGADO
            </Text>
          </View>
          <View
            style={tw(
              "flex flex-col items-start gap-2 justify-center flex-grow w-full my-5 mx-auto rounded-lg"
            )}
          >
            <Text style={tw("font-bold text-lg text-left text-[#00699C]")}>
              {
                "La línea del tiempo (períodos) en los que implementaré mis valores agregados son:"
              }
            </Text>
            <Text style={tw("font-bold text-lg text-left text-[#00699C]")}>
              {data?.formulario1?.caracteristicas}
            </Text>
          </View>
          <View
            style={tw(
              "flex flex-col items-start gap-2 justify-center flex-grow w-full my-5 mx-auto rounded-lg"
            )}
          >
            <Text style={tw("font-bold text-lg text-left text-[#00699C]")}>
              {
                "El momento en el que se encuentra mi producto/servicio o proyecto es: "
              }
            </Text>
            <View
              style={tw(
                "flex flex-row items-start gap-2 justify-evenly flex-grow w-full my-5 mx-auto rounded-lg"
              )}
            >
              {
                arrayValor?.map((trimestre,i)=>(
                  <Trimestrs trimestre={trimestre}i={i+1} key={i}/>
                ))
              }
          
            </View>
          </View>
        </View>{" "}
        <FooterPDF />
      </Page>{" "}
    </Document>
  );
}
