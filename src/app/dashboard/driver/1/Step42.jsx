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
import PreviewPDF from "@/app/componentes/PreviewPDF";
export default function Step42() {
  const { data } = useSession();
  const formCarga = contextUser((state) => state.formCarga);
  const setCurrentStep=contextUser((state)=>state.setCurrentStep) 
  
const DownloadLink = () => {
  console.log("descargand")
 return  <PDFDownloadLink document={<PDFEntregable data={formCarga}/>} fileName="PEC.pdf"></PDFDownloadLink>
};
  const handleGuardar = async () => {
    try {
      /*const mandamosMail = await axios.post("/api/sendemail", {
        body: formCarga,
        mail: data?.user.email,
      })*/
      // setCurrentStep(5)
      DownloadLink()
      toast.success('Exitos, Revisa tu Bandeja de Entrada')
    } catch (error) {
      console.log(error);
    }
    
  };
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
          <PDFDownloadLink document={<PDFEntregable data={formCarga} session={data} />} fileName="PEC.pdf">  
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
      <Toaster/>
    </>
  );
}
