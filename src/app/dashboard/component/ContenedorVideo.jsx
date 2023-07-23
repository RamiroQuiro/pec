"use client";
import { SVGPlay, SVGPause, SVGStop,SVGAudio,SVGAgrandarVideo } from "@/app/componentes/SVGComponent";
import React, { useState } from "react";

export default function ContenedorVideo() {
  const [isPlay, setIsPlay] = useState(false);

  const handlePlay = () => {
    setIsPlay((state) => !state);
  };
  return (
    <div className="rounded-lg w-[90%] h-[87%] border-2 mx-auto shadow-lg relative">
      <div className="rounded-3xl bg-neutral-700 w-32 h-24 absolute left-[42.5%] top-1/3 cursor-pointer ">
        <SVGPlay className="fill-white w-10/12 h-5/6 mt-2 m-auto" />
      </div>
      <video></video>
      <div className="w-full flex items-center justify-between absolute bottom-3 gap-2 left-0 px-8">
        <div
          onClick={handlePlay}
          className="duration-300 flex w-1/12 cursor-pointer items-center justify-center"
        >
          {!isPlay ? (
            <SVGPlay className="fill-primary-100 w-12 h-12 animate-[aparecer_.5s]" />
          ) : (
            <SVGPause className="fill-primary-100 w-12 h-12 animate-[aparecer_.5s]" />
          )}
        </div>
        <div
          onClick={handlePlay}
          className="duration-300 flex w-1/12 cursor-pointer items-center justify-center"
        >
            <SVGStop className="fill-primary-textGris w-12 h-12 animate-[aparecer_.5s]" />
        </div>
        <div
          onClick={handlePlay}
          className="duration-300 flex w-8/12 cursor-pointer bg-primary-textGris rounded h-6 items-center justify-center"
        >
            
        </div>
        <div
          onClick={handlePlay}
          className="duration-300 flex w-1/12 flex-grow cursor-pointer items-center justify-center"
        >
            <SVGAudio className="fill-primary-textGris w-8 h-8 animate-[aparecer_.5s]" />
        </div>
        <div
          onClick={handlePlay}
          className="duration-300 flex w-1/12 cursor-pointer items-center justify-center"
        >
            <SVGAgrandarVideo className="fill-primary-textGris w-8 h-8 animate-[aparecer_.5s]" />
        </div>
      </div>
    </div>
  );
}
