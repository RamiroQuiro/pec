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
              ENTREGABLE DRIVER 5: VISIÓN COMERCIAL (VC)
            </Text>
          </View>
          <View
            style={tw(
              "flex flex-col items-start gap-2 justify-center flex-grow w-full my-5 mx-auto rounded-lg"
            )}
          >
            <Text style={tw("font-medium text-lg text-left text-[#00699C]")}>
            GRFICO DE LA VISIÓN COMERCIAL
            </Text>
            <View
              style={tw(
                "flex flex-row items-start gap-2 justify-start mb-5 flex-grow w-11/12 mx-auto rounded-lg "
              )}
            >
              <Text
                style={tw("font-medium text-xl text-left   text-[#00699C]")}
              >
                {data?.formulario1?.filosofiaPersonal}
              </Text>
            </View>
        
            <View
              style={tw(
                "flex flex-col items-start gap-2 mt-16 justify-start mb-10 flex-grow w-full mx-auto rounded-lg "
              )}
            >
              {/* Valor 1 */}
              <Text style={tw("font-bold text-lg text-left text-[#00699C]")}>
              En un solo gráfico está plasmada toda la <Text style={tw("font-bold text-lg text-left text-[#F06144]")}>VISIÓN COMERCIAL</Text> de tu empresa, ésta es diferente a la <Text style={tw("font-bold text-lg text-left text-[#F06144]")}> VISIÓN GENERAL</Text> de la empresa, finalmente el área comercial es evaluada por resultados (números) pero su actuar tiene que tener bases sólidas como la filosofía, los valores, etc para poder construir un equipo a <Text style={tw("font-bold text-lg text-left text-[#F06144]")}>PERPETUIDAD</Text> y no solo de una temporada.

              </Text>
         
          </View>{" "}
          </View>{" "}
        </View>{" "}
        <FooterPDF />
      </Page>{" "}
    </Document>
  );
}
