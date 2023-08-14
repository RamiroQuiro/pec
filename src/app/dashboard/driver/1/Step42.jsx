"use client";
import ButtonLeerMas from "./ButtonLeerMas";
import step1 from "../../../../../public/step1.png";
import Image from "next/image";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { contextUser } from "@/context/contextUser";
import { useSession } from "next-auth/react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFEntregable from "./PDFEntregable";
import { useState } from "react";
import LoadingCss from "@/app/componentes/LoadingCss";
import { useRouter } from "next/navigation";
import { shallow } from "zustand/shallow";
export default function Step42() {
  const { data } = useSession();
  const { formCarga, updateState, activeStep } = contextUser(
    (state) => ({
      formCarga: state.formCarga,
      activeStep: state.activeStep,
      updateState:state.updateState
    }),
    shallow
  );
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleGuardar = async () => {
    setIsLoading(true);
    activeStep({
      driver1: { step1: true, step2: true, step3: true, step4: true },
    });
    try {
      const mandamosMail = await axios.post("/api/sendemail", {
        body: formCarga,
        mail: data?.user.email,
      });

      if (mandamosMail.status) {
        setIsLoading(false);
        toast.success("Exitos, Revisa tu Bandeja de Entrada", {
          style: {
            backgroundColor: "#00699C",
            color: "white",
            fontSize: "16px",
            padding: "8px",
            height: "100px",
            textAnchor: "1px",
          },
          duration: 3500,
        });
        router.push("/dashboard");
      }
      updateState({currentStep:1})
  
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  return (
    <>
      {isLoading && <LoadingCss />}
      <div className=" flex flex-col items-start justify-between gap-3 h-full w-8/12 text-center">
        <div className="text-left space-y-5">
          <h2 className="uppercase text-primary-200 text-xl">
            FELICIDADES!, HAZ COMPLETADO TU PRIMER DRIVER, PERO AUN QUEDA MUCHO
            POR HACER, CONTINUEMOS CON TU SEGUNDO DRIVER.
          </h2>
          <p className="uppercase text-primary-100 text- font-medium">
            ¿ESTAS LISTO?, VAMOS PARA ALLÁ!!!!
          </p>
        </div>
        <div className="flex items-center justify-normal gap-5">
          <ButtonLeerMas stepN={24}>Anterior</ButtonLeerMas>
          <PDFDownloadLink
            document={<PDFEntregable data={formCarga} session={data} />}
            fileName="PEC.pdf"
          >
            <button
              onClick={handleGuardar}
              className="bg-primary-100 text-white rounded font-medium text-xs px-4 py-2"
            >
              Guardar
            </button>
          </PDFDownloadLink>
        </div>
      </div>
      <div className="w-4/12  mx-auto h-full relative">
        <Image
          alt="step4"
          src={step1}
          fill
          className=" object-center object-contain absolute -right-3 top-4 w-full ml-14 h-auto mx-auto "
        />
      </div>
      <Toaster />
    </>
  );
}
