"use client";
import { useRouter } from "next/navigation";
import React from "react";
import SectionDash from "../dashboard/component/SectionDash";
import { SVGCheck } from "../componentes/SVGComponent";

export default function Verificado() {
  const router = useRouter();

  const redireccionando = () => {
 setTimeout(() => {
      router.push("/login");
    }, 1000);
    
  };
  redireccionando()
  return (
    <SectionDash>
      <div className="rounded-xl bg-green-500/70 backdrop-blur-sm gap-5 shadow-lg flex items-center justify-between py-3 px-5 ">
        <p className="font-medium text-lg text-primary-textGris animate-pulse">
          Usuario Verificado
        </p>
        <div>
          <SVGCheck className="w-8 h-8" />
        </div>
      </div>
    </SectionDash>
  );
}
