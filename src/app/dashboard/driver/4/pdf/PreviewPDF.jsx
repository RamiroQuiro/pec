"use client";
import { contextUser } from "@/context/contextUser";
import { PDFViewer } from "@react-pdf/renderer";
import { useSession } from "next-auth/react";
import PDFEntregable from "../PDFEntregable";

export default function PreviewPDF() {
  const { data } = useSession();
  const formCarga = contextUser((state) => state.formCarga);
  console.log( formCarga);



    return (
      <PDFViewer className="w-full rounded-lg mt-32  h-[90vh] " width={"90%"}>

        <PDFEntregable data={formCarga?.driver4} session={data} />
      </PDFViewer>

    );
}
