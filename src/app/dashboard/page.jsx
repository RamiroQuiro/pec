import React from "react";
import SectionDash from "./component/SectionDash";
import { SVGPlay } from "../componentes/SVGComponent";

export default function page() {
  return (
    <SectionDash>
      <div className="bg-white md:w-[78vw] md:h-[80vh] absolute right-10 top-28 flex flex-col items-start justify-center">
        <div className='rounded-lg w-[90%] h-[87%] border-2 mx-auto shadow-lg relative'>
          <div className="rounded-3xl bg-neutral-700 w-32 h-24 absolute left-[42.5%] top-1/3 ">
<SVGPlay className="fill-white w-10/12 h-5/6 mt-2 m-auto"/>
          </div>
          <video></video>
        </div>
        <div className="flex items-center justify-between gap-3 mt-3 pl-14">
          <button className="bg-primary-textGris disabled:bg-primary-200/40 font- rounded text-white capitalize text-xs px-5 py-3">
            omitir
          </button>
          <button 
          disabled={true}
          className="bg-primary-200 disabled:bg-primary-200/40 font- rounded text-white capitalize text-xs px-5 py-3">
            siguiente
          </button>
        </div>
      </div>
    </SectionDash>
  );
}
