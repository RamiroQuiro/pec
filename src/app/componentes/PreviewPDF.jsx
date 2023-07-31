"use client";
import { contextUser } from "@/context/contextUser";
import PDFEntregable from "../dashboard/driver/1/PDFEntregable";
import { PDFViewer } from "@react-pdf/renderer";
import { useSession } from "next-auth/react";

export default function PreviewPDF() {
  const { data } = useSession();
  const formCarga = contextUser((state) => state.formCarga);
  
  return (
    <PDFViewer className="w-full rounded-lg  h-[90vh] " width={"90%"}>
      <PDFEntregable data={formCarga} session={data} />
    </PDFViewer>
  );
}
