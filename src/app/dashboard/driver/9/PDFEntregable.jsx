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
              "flex flex-row  border-b mb-5 p-5 items-center justify-center flex-grow w-full mx-auto rounded-lg overflow-hidden"
            )}
          >
            {/* titulo del entregable */}
            <Text
              style={tw(
                "font-medium text-lg font-black capitalize  text-[#00699C]"
              )}
            >
              {"ENTREGABLE DRIVER 9: METODOLOGÍA DE SEGUIMIENTO EFECTIVO (MSE)"}
            </Text>
          </View>
          <View
            style={tw(
              "flex flex-col items-start gap-2 justify-center flex-grow w-full my-2 mx-auto rounded-lg"
            )}
          >
            <Text style={tw("font-bold text-lg text-left text-[#00699C]")}>
              {
                "     La herramienta que mi empresa usará para el seguimiento comercial será:"
              }
            </Text>
            <Text
              style={tw("font- uppercase text-lg text-left text-[#F06144]")}
            >
              {"CRM"}
            </Text>
            <Text
              style={tw("font- uppercase text-lg text-left text-[#F06144]")}
            >
              {"excell"}
            </Text>
          </View>{" "}
          <View
            style={tw(
              "flex flex-col items-start gap-2 justify-center flex-grow w-full my-5 mx-auto rounded-lg"
            )}
          >
            <Text style={tw("font-bold text-lg text-left uppercase text-[#F06144]")}>
              {
                "Mi líder comercial dará seguimiento a: "
              }
            </Text>
            <View style={tw("border-b border-b-2 border-[#00699C] py-2 w-1/2")}></View>
            <View style={tw("border-b border-b-2  border-[#00699C] py-2 w-1/2")}></View>
            <View style={tw("border-b border-b-2  border-[#00699C] py-2 w-1/2")}></View>
          </View>{" "}
          <View
            style={tw(
              "flex flex-col items-start gap-2 justify-center flex-grow w-full my-5 mx-auto rounded-lg"
            )}
          >
            <Text style={tw("font-bold text-lg text-left uppercase text-[#F06144]")}>
              {
                "MI FUERZA COMERCIAL DARÁ SEGUIMIENTO A:"
              }
            </Text>
            <View style={tw("border-b border-b-2 border-[#00699C] py-2 w-1/2")}></View>
            <View style={tw("border-b border-b-2  border-[#00699C] py-2 w-1/2")}></View>
            <View style={tw("border-b border-b-2  border-[#00699C] py-2 w-1/2")}></View>
          </View>{" "}
          <View
            style={tw(
              "flex flex-col items-start gap-2 justify-center flex-grow w-full my-5 mx-auto rounded-lg"
            )}
          >
            <Text style={tw("font-bold text-lg text-left uppercase text-[#F06144]")}>
              {
                "MI AREA DE ATENCIÓN A CLIENTES DARÁ SEGUIMIENTO A:                "
              }
            </Text>
            <View style={tw("border-b border-b-2 border-[#00699C] py-2 w-1/2")}></View>
            <View style={tw("border-b border-b-2  border-[#00699C] py-2 w-1/2")}></View>
            <View style={tw("border-b border-b-2  border-[#00699C] py-2 w-1/2")}></View>
          </View>{" "}
          <View
            style={tw(
              "flex flex-row  b mb-5 p-5 items-center gap-4 justify-center flex-grow w-full mx-auto rounded-lg overflow-hidden"
            )}
          >
            {/* titulo del entregable */}
            <Text
              style={tw(
                "font-medium text-base font-black capitalize  text-[#00699C]"
              )}
            >
              {"Los puntos identificados en mi proceso comercial están plasmados en el siguiente diagrama de flujo:"}
            </Text>
          </View>
        </View>{" "}
        <FooterPDF />
      </Page>{" "}
    </Document>
  );
}
