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
  console.log(data);
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
              "flex flex-row  border-b mb-5 p-5 items-center gap-4 justify-center flex-grow w-full mx-auto rounded-lg overflow-hidden"
            )}
          >
            {/* titulo del entregable */}
            <Text
              style={tw(
                "font-medium text-xl font-black capitalize  text-[#00699C]"
              )}
            >
              {"ENTREGABLE DEL DRIVER 8:  SISTEMA DE VENTAS INTELIGENTE (SVI)"}
            </Text>
          </View>
        
          <View
            style={tw(
              "flex flex-col items-start gap-2 justify-center flex-grow w-full my-5 mx-auto rounded-lg"
            )}
          >
            <Text style={tw("font-bold text-lg text-left text-[#00699C]")}>
              {
                "Mi proceso de ventas es: (poner diagrama de flujo, viene del inciso (SISTEMA) "
              }
            </Text>
          </View>{" "}
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
            <Text style={tw("font-bold text-lg text-left text-[#00699C]")}>
              {data?.formulario1?.cicloDeVida}
            </Text>
          </View>{" "}
          <View
            style={tw(
              "flex flex-col items-start gap-2 justify-center flex-grow w-full my-5 mx-auto rounded-lg"
            )}
          >
            <Text style={tw("font-bold text-lg text-left text-[#00699C]")}>
              {"Los ELEMENTOS de apoyo que daré a mi fuerza comercial son:"}
            </Text>
            <Text style={tw("font-bold text-lg text-left text-[#00699C]")}>
              {data?.formulario1?.elementoApoyo}
            </Text>
          </View>{" "}
          <View
            style={tw(
              "flex flex-col items-start gap-2 justify-center flex-grow w-full my-5 mx-auto rounded-lg"
            )}
          >
            <Text style={tw("font-bold text-lg text-left text-[#00699C]")}>
              {"El presupuesto que asignaré para mi campaña comercial será:"}
            </Text>
            <Text style={tw("font-bold text-lg text-left text-[#00699C]")}>
              {data?.formulario4?.valorAsignado}
            </Text>
          </View>{" "}
          <View
            style={tw(
              "flex flex-col items-start gap-2 justify-center flex-grow w-full my-5 mx-auto rounded-lg"
            )}
          >
            <Text style={tw("font-bold text-lg text-left text-[#00699C]")}>
              {"El período que durará mi campaña será:"}
            </Text>
            <Text style={tw("font-bold text-lg text-left text-[#00699C]")}>
              {data?.formulario4?.diasProyectados} Dias
            </Text>
          </View>{" "}
        </View>{" "}
        <FooterPDF />
      </Page>{" "}
    </Document>
  );
}
