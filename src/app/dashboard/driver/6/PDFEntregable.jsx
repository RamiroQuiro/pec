"use client";

import { Document, Page, View, Text, Svg, Path } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";
import CabeceraPDF from "@/app/componentes/CabeceraPDF";
import FooterPDF from "@/app/componentes/FooterPDF";
import PosicionamientoEAR from "./pdf/PosicionamientoEAR";
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
              {
                "ENTREGABLE DRIVER 6: EQUIPO DE ALTO RENDIMIENTO COMERCIAL (EAR)"
              }
            </Text>
          </View>
          <View
            style={tw(
              "flex flex-col items-start gap-2 justify-center flex-grow w-full my-5 mx-auto rounded-lg"
            )}
          >
            <Text style={tw("font-bold text-lg text-left text-[#00699C]")}>
              Para mi empresa la definición de{" "}
              <Text style={tw("font-bold text-lg text-left text-[#F06144]")}>
                ALTO RENDIMIENTO COMERCIAL{" "}
              </Text>{" "}
              es:
            </Text>
            <PosicionamientoEAR array={data?.formulario1} />
            <View
              style={tw(
                "flex flex-col items-start gap-2 mt-2 justify-start mb-10 flex-grow w-full mx-auto rounded-lg "
              )}
            >
              {/* Valor 1 */}
              <Text style={tw("font- text-lg text-left text-[#00699C]")}>
                Los marcos de referencia de mis vendedores serán:
              </Text>
              <Text style={tw("font-medium text-lg text-left text-[#F06144]")}>
                RITMO DE TRABAJO
              </Text>
              <Text style={tw("font- text-lg text-left text-[#00699C]")}>
                Numero de visitas diarias:
              </Text>
              <Text style={tw("font- text-lg text-left text-[#00699C]")}>
                Número de llamadas diarias:
              </Text>
              <Text style={tw("font-bold text-lg text-left text-[#F06144]")}>
                {" "}
                CONFIABILIDAD
              </Text>
              <Text style={tw("font- text-lg text-left text-[#00699C]")}>
                Mi equipo comercial será confiable si:
              </Text>
            </View>{" "}
            <Text
              style={tw("font-thin mt-8 text-lg text-left text-[#F06144]")}
            >
              {" "}
              VISUALIZACIÓN DE MI ORGANIGRAMA VS CRECIMIENTO EN FACTURACIÓN
            </Text>
            <Text style={tw("font- text-lg text-left text-[#00699C]")}>
              Fase 1:
            </Text>
            <Text style={tw("font- text-lg text-left text-[#00699C]")}>
              Los elementos de soporte de mi área comercial serán:
            </Text>
          </View>{" "}
        </View>{" "}
        <FooterPDF />
      </Page>{" "}
    </Document>
  );
}
