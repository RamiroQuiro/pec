"use client";
import ButtonLeerMas from "./ButtonLeerMas";
import step1 from "../../../../../public/step1.png";
import Image from "next/image";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { contextUser } from "@/context/contextUser";
import { useSession } from "next-auth/react";
import { PDFDownloadLink, pdf } from "@react-pdf/renderer";
import PDFEntregable from "./PDFEntregable";
import { useState } from "react";
import LoadingCss from "@/app/componentes/LoadingCss";
import { useRouter } from "next/navigation";
import { shallow } from "zustand/shallow";
import ConfirmacionExitosa from "../../component/ConfirmacionExitosa";
export default function Step42() {
  const { data } = useSession();
  const { formCarga, updateState, activeStep ,drivers} = contextUser(
    (state) => ({
      drivers:state.drivers,
      formCarga: state.formCarga,
      activeStep: state.activeStep,
      updateState:state.updateState
    }),
    shallow
  );
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
const [isSucces, setIsSucces] = useState(false)
  const handleGuardar = async () => {
    setIsLoading(true);
    try {
      const pdfData = await pdf(<PDFEntregable data={formCarga} session={data} />).toBlob();
      console.log(pdfData)
      const arrayBuffer= await pdfData.arrayBuffer()
      const buffer=Buffer.from(arrayBuffer)
      const base64 = buffer.toString('base64');
      console.log(buffer)
      updateState({drivers:{...drivers, driver1: {...drivers.driver1, step1: true } }})
      const mandamonMail= await axios.post('/api/sendemail', {
        body: formCarga,
        mail: data?.user.email,
        pdfData:base64
      })
      console.log(mandamonMail)
      setIsLoading(false)
      setIsSucces(true)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      
    }
   
  };
  if (isSucces) {
    return <ConfirmacionExitosa
    numero={"primer"}
    proximoDriver={"segundo"}
    onclick={()=>setIsSucces(false)}
    />
  }
  return (
    <>
   
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
