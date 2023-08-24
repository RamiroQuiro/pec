"use client";

import { Document, Page, View, Text, Image } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";
import CabeceraPDF from "@/app/componentes/CabeceraPDF";
import ComponentePDFRenderSelecciones from "@/app/componentes/ComponentePDFRenderSelecciones";
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
  const { driver1 } = data;
  console.log(data);

  return (
    <Document>
      <Page
        style={{
          height: "90vh",
          fontSize: "10",
        }}
        orientation=""
        size={"A4"}
        fixed
      >
        <CabeceraPDF />
        <View
          style={tw(
            "flex flex-col items-start justify-center flex-grow w-11/12  mx-auto rounded-lg overflow-hidden"
          )}
        >
          <View
            style={tw(
              "flex flex-row  border-b mb-5 p-5 items-center gap-2 justify-center flex-grow w-full mx-auto rounded-lg overflow-hidden"
            )}
          >
            <Text
              style={tw("font-medium text font-black capitalize text-gray-700")}
            >
              {session?.user?.fullName} |
            </Text>
            <Text style={tw("font-medium text font-bold text-gray-700")}>
              {session?.user?.email}
            </Text>
          </View>
          <ComponentePDFRenderSelecciones
            key={1}
            array={driver1?.spet31?.slect1}
            title={"¿Para que esta hecho tu Área Comercial?"}
          />
          <ComponentePDFRenderSelecciones
            key={2}
            array={driver1?.spet31?.slect2}
            title={"¿A quien esta dirigida tu Misión Comercial?"}
          />
          <ComponentePDFRenderSelecciones
            key={3}
            array={driver1?.spet31?.slect3}
            title={"¿Que es importante para tu Área Comercial?"}
          />
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
                {driver1?.misionComercial}
              </Text>
            </View>
          </View>{" "}
          <ComponentePDFRenderSelecciones
            key={4}
            array={driver1?.spet33?.select}
            title={"3 Valores más importantes para tu equipo comercial"}
          />
        </View>{" "}
      </Page>{" "}
    </Document>
  );
}
