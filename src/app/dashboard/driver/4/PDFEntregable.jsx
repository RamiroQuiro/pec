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
              ENTREGABLE DRIVER 4: EMPATÍA CON EL LIDER
            </Text>
          </View>
          <View
            style={tw(
              "flex flex-col items-start gap-2 justify-center flex-grow w-full my-5 mx-auto rounded-lg"
            )}
          >
            <Text style={tw("font-bold text-lg text-left text-[#00A1A5]")}>
              Mi filosofia personal como lider es:
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
            <Text style={tw("font-bold text-lg text-left text-[#00A1A5]")}>
              Mis valores esenciales como lider son:
            </Text>
            <View
              style={tw(
                "flex flex-col items-start gap-2 justify-start mb-10 flex-grow w-11/12 mx-auto rounded-lg "
              )}
            >
              {/* Valor 1 */}
              <Text style={tw("font-bold text-lg text-left  text-[#F06144]")}>
                VALOR 1:
              </Text>
              <Text style={tw("font-bold text-lg text-left text-[#00A1A5]")}>
                Para mi quiere decir:
              </Text>
              <Text
                style={tw("font-medium text-xl text-left   text-[#00699C]")}
              >
                {data?.formulario1?.valoresEsenciales}
              </Text>
              {/* Valor 2 */}
              <Text style={tw("font-bold text-lg text-left  text-[#F06144]")}>
                VALOR 2:
              </Text>
              <Text style={tw("font-bold text-lg text-left text-[#00A1A5]")}>
                Para mi quiere decir:
              </Text>
              <Text
                style={tw("font-medium text-xl text-left   text-[#00699C]")}
              >
                {data?.formulario1?.valoresEsenciales}
              </Text>
            </View>
            {/* item3 */}
            <Text style={tw("font-bold text-lg text-left text-[#00A1A5]")}>
              Me gusta que mi equipo se comporte:
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
                {data?.formulario1?.equipoTrabajo}
              </Text>
            </View>
            {/* item4 */}
            <Text style={tw("font-bold text-lg text-left text-[#00A1A5]")}>
             Tengo que trabajar en las siguientes características de mi liderazgo: {data?.formulario1?.puntajeLider}
            </Text>
          </View>{" "}
        </View>{" "}
        <FooterPDF />
      </Page>{" "}
    </Document>
  );
}
