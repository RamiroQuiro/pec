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
              ENTREGABLE DRIVER 2: EMPATÍA CON EL PRODUCTO
            </Text>
          </View>
          <View
            style={tw(
              "flex flex-col items-start gap-2 justify-center flex-grow w-full my-5 mx-auto rounded-lg"
            )}
          >
            <Text style={tw("font-bold text-lg text-left text-[#00A1A5]")}>
              1.- La oferta comercial de mi empresa es:
            </Text>
            <View
              style={tw(
                "flex flex-row items-start gap-2 justify-start flex-grow w-11/12 mx-auto rounded-lg "
              )}
            >
              <Text
                style={tw(
                  "font-medium text-xl text-left font-black capitalize  text-[#00699C]"
                )}
              >
                - {data?.formulario1?.producto1} -
              </Text>
              <Text
                style={tw(
                  "font-medium text-xl text-left font-black capitalize  text-[#00699C]"
                )}
              >
                - {data?.formulario1?.producto2} -
              </Text>
            </View>
            <View
              style={tw(
                "flex flex-col items-start gap-2 justify-center mb-10 flex-grow w-11/12 mx-auto rounded-lg "
              )}
            >
              <Text style={tw("font-bold text-left text-[#00699C] ")}>
                PRODUCTO/SERVICIO 1 Precio:
              </Text>
              <Text style={tw("font-bold text-left text-[#00699C] ")}>
                CARACTERISTICAS:
              </Text>
            </View>
            <View
              style={tw(
                "flex flex-col items-start gap-2 justify-center mb-10 flex-grow w-11/12 mx-auto rounded-lg "
              )}
            >
              <Text style={tw("font-bold text-left text-[#00699C] ")}>
                PRODUCTO/SERVICIO 2 Precio:
              </Text>
              <Text style={tw("font-bold text-left text-[#00699C] ")}>
                CARACTERISTICAS:
              </Text>
            </View>

            {/* //segundo items */}

            <Text style={tw("font-bold text-lg text-left text-[#00A1A5]")}>
              {"2.- CONTRATIPOS (Competencia Directa):"}
            </Text>
            <View
              style={tw(
                "flex flex-col items-start gap-2 justify-center mb-10 flex-grow w-11/12 mx-auto rounded-lg "
              )}
            >
              <Text style={tw("font-bold text-left text-[#00699C] ")}>
                PRODUCTO/SERVICIO 1 Marca:
              </Text>
              <Text style={tw("font-bold text-left text-[#00699C] ")}>
                PRECIO: CARACTERISTICAS:
              </Text>
            </View>
            {/* //TERCER items */}
            <Text style={tw("font-bold text-lg text-left text-[#00A1A5] ")}>
              {"3.- Matriz del análisis de mi competencia"}
            </Text>
            {/* //CUARTO items */}
            <Text style={tw("font-bold text-lg text-left text-[#00A1A5] ")}>
              {
                "4.- Evaluación de conocimiento de producto para mi equipo comercial"
              }
            </Text>
            <Text style={tw("font-bold text-left text-[#00699C] ")}>
              Anexar formato del usuario
            </Text>
            {/* //QUINTO items */}
            <Text
              style={tw("font-bold text-lg text-left text-[#00A1A5] mt-10 ")}
            >
              {"5.- Grafico Visual de ubicación de mi marca:"}
            </Text>
          </View>{" "}
        </View>{" "}
       <FooterPDF/>
      </Page>{" "}
    </Document>
  );
}
