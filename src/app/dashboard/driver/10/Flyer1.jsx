"use client";
import {
  DownloadCloud,
  SVGDiskette,
  SvgNextVideo,
  UploadCloud,
} from "@/app/componentes/SVGComponent";
import { contextUser } from "@/context/contextUser";
import RenderFlyer from "./RenderFlyer";
import { shallow } from "zustand/shallow";
import PDFEntregable1 from "../1/PDFEntregable";
import PDFEntregable2 from "../2/PDFEntregable";
import PDFEntregable3 from "../3/PDFEntregable";
import PDFEntregable4 from "../4/PDFEntregable";
import PDFEntregable5 from "../5/PDFEntregable";
import PDFEntregable6 from "../6/PDFEntregable";
import PDFEntregable7 from "../7/PDFEntregable";
import PDFEntregable8 from "../8/PDFEntregable";
import PDFEntregable9 from "../9/PDFEntregable";
import PDFEntregable10 from "../10/PDFEntregable";
import { useSession } from "next-auth/react";
import { pdf } from "@react-pdf/renderer";
import axios from "axios";
import { useState } from "react";
export default function Flyer1() {
  const { data } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const {
    setCurrentStep,
    activarFlyer,
    activeStep,
    cargarSubPantallas,
    flyerActivo,
    updateState,
    drivers,
    formCarga,
  } = contextUser(
    (state) => ({
      formCarga: state.formCarga,
      drivers: state.drivers,
      updateState: state.updateState,
      setCurrentStep: state.setCurrentStep,
      flyerActivo: state.flyerActivo,
      activarFlyer: state.activarFlyer,
      activeStep: state.activeStep,
      cargarSubPantallas: state.cargarSubPantallas,
    }),
    shallow
  );

  const handleNextFlyer = () => {
    if (flyerActivo == 9) {
      activarFlyer(0);
      setCurrentStep(3);
      cargarSubPantallas(2);
    } else if (flyerActivo == 21) {
      activarFlyer(0);
      setCurrentStep(3);
      cargarSubPantallas(3);
    } else {
      activarFlyer(flyerActivo + 1);
    }
  };
  const handlePreviusFlyer = () => {
    activarFlyer(flyerActivo - 1);
  };
  const handleNextStep = async () => {
    activarFlyer(0);
    if (flyerActivo == 2) {
      setCurrentStep(2);
      updateState({
        drivers: { ...drivers, driver10: { ...drivers.driver10, step1: true } },
      });
    }
    if (flyerActivo == 8) {
      setCurrentStep(3);
      cargarSubPantallas(0);
      updateState({
        drivers: { ...drivers, driver10: { ...drivers.driver10, step2: true } },
      });
    } else if (flyerActivo == 12) {
      try {
        // Crear un array de componentes PDF
        const pdfComponents = [
          <PDFEntregable1 key={1} data={formCarga?.driver1} session={data} />,
          <PDFEntregable2 key={2} data={formCarga?.driver2} session={data} />,
          <PDFEntregable3 key={3} data={formCarga?.driver3} session={data} />,
          <PDFEntregable4 key={4} data={formCarga?.driver4} session={data} />,
          <PDFEntregable5 key={5} data={formCarga?.driver5} session={data} />,
          <PDFEntregable6 key={6} data={formCarga?.driver6} session={data} />,
          <PDFEntregable7 key={7} data={formCarga?.driver7} session={data} />,
          <PDFEntregable8 key={8} data={formCarga?.driver8} session={data} />,
          <PDFEntregable9 key={9} data={formCarga?.driver9} session={data} />,
          <PDFEntregable10
            key={10}
            data={formCarga?.driver10}
            session={data}
          />,
        ];
        // Convertir los componentes PDF a blobs y luego a base64
        const buffearPdfs = await Promise.all(
          pdfComponents.map(async (component, index) => {
            const blob = await pdf(component).toBlob();
            const arrayBufr = await blob.arrayBuffer();
            const buffer = Buffer.from(arrayBufr);
            const base64 = buffer.toString("base64");
            return base64;
          })
        );

        updateState({
          drivers: {
            ...drivers,
            driver10: { ...drivers.driver10, step4: true },
          },
        });
        const mandamonMail = await axios.post("/api/sendemail", {
          body: formCarga,
          mail: data?.user.email,
          entregables: buffearPdfs,
        });
        console.log(mandamonMail);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
  };
  return (
    <div className="w-full h-full flex relative">
      <RenderFlyer />

      <div className="w-full absolute bottom-20 left-3 z-30 flex items-center justify-between px-10 gap-3">
        <SvgNextVideo
          onClick={handlePreviusFlyer}
          className="w-14 h-14 fill-primary-tonoBlanco rotate-180 cursor-pointer  "
        />
        {flyerActivo == 2 || flyerActivo == 8 || flyerActivo == 12 ? (
          <SVGDiskette
            onClick={handleNextStep}
            className="w-14 h-14 fill-primary-tonoBlanco cursor-pointer "
          />
        ) : (
          <SvgNextVideo
            onClick={handleNextFlyer}
            className="w-14 h-14 fill-primary-tonoBlanco cursor-pointer "
          />
        )}
      </div>
    </div>
  );
}
