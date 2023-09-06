"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  SVGPlay,
  SVGPause,
  SVGStop,
  SVGAudio,
  SVGAgrandarVideo,
  SvgNextVideo,
  SVGMuted,
} from "@/app/componentes/SVGComponent";
import { contextUser } from "@/context/contextUser";
import { useRouter } from "next/navigation";
import { shallow } from "zustand/shallow";
export default function ContenedorVideo() {
  const router = useRouter();
  const { formCarga, updateState, videoBienvenida } = contextUser((state) => ({
    formCarga: state.formCarga,
    videoBienvenida: state.formCarga.videoBienvenida,
    updateState: state.updateState,
  }),shallow);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  const handleMuteUnmute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleTimeUpdate = () => {
    setProgress(
      (videoRef.current.currentTime / videoRef.current.duration) * 100
    );
  };
  useEffect(() => {
    if (videoBienvenida) return;

    if (progress > 10) {
      updateState({
        formCarga: { ...formCarga, videoBienvenida: true },
      });
    }
  }, [progress]);

  const handleNextStep = () => {
    if(videoBienvenida){
      router.push("/dashboard/driver/1");
    }
  };
  return (
    <div className="rounded-lg w-[90%] h-[87%] border-2 mx-auto shadow-lg relative">
      {!isPlaying && (
        <div
          onClick={handlePlayPause}
          className="rounded-3xl bg-neutral-700 w-32 h-24 z-50 absolute left-[42.5%] top-1/3 cursor-pointer animate-[aparecer_.5s]"
        >
          <SVGPlay
            onClick={handlePlayPause}
            className="fill-white w-10/12 h-5/6 mt-2 m-auto"
          />
        </div>
      )}
      <video
        ref={videoRef}
        width="1000"
        height="240"
        onTimeUpdate={handleTimeUpdate}
        muted
        className={`rounded-lg overflow-hidden object-cover object-center w-full `}
      >
        <source src="/videoBienvenida.mp4" type="video/mp4" />
      </video>

      {/* controles del video */}
      <div className="w-full flex items-center justify-between absolute bottom-0 gap-2 left-0 px-8">
        <div
          onClick={handlePlayPause}
          className="duration-300 flex w-1/12 cursor-pointer items-center justify-center"
        >
          {!isPlaying ? (
            <SVGPlay className="fill-primary-100 w-12 h-12 animate-[aparecer_.5s] hover:scale-110 duration-300" />
          ) : (
            <SVGPause className="fill-primary-100 w-12 h-12 animate-[aparecer_.5s] hover:scale-110 duration-300" />
          )}
        </div>
        <div
          onClick={handleStop}
          className="duration-300 flex w-1/12 cursor-pointer items-center justify-center"
        >
          <SVGStop className="fill-primary-tonoBlanco w-12 h-12 animate-[aparecer_.5s] hover:scale-110 duration-300" />
        </div>
        <div className="duration-300 flex w-8/12 cursor-pointer relative bg-primary-tonoBlanco rounded h-4 overflow-hidden justify-start  items-start">
          <div
            style={{
              width: progress + "%",
            }}
            className={` bg-primary-100 h-full`}
          ></div>
        </div>
        <div
          onClick={handleMuteUnmute}
          className="duration-300 flex w-1/12 flex-grow cursor-pointer items-center justify-center"
        >
          {isMuted ? (
            <SVGAudio className="fill-primary-tonoBlanco w-8 h-8 animate-[aparecer_.5s] hover:scale-110 duration-300" />
          ) : (
            <SVGMuted className="fill-primary-tonoBlanco w-8 h-8 animate-[aparecer_.5s] hover:scale-110 duration-300" />
          )}
        </div>
        <div
          onClick={handleFullscreen}
          className="duration-300 flex w-1/12 cursor-pointer items-center justify-center"
        >
          <SVGAgrandarVideo className="fill-primary-tonoBlanco w-8 h-8 animate-[aparecer_.5s] hover:scale-110 duration-300" />
        </div>
        <div
          onClick={handleNextStep}
          className="duration-300 flex w-1/12 cursor-pointer items-center justify-center  group"
        >
          <SvgNextVideo className="fill-primary-tonoBlanco w-8 h-8 animate-[aparecer_.5s] hover:scale-110 duration-300" />
          {!videoBienvenida && (
            <div className="bg-primary-200 text-white animate-[aparecer_.5s] rounded p-5 absolute top-14 right-0 group-hover:flex hidden items-center justify-normal text-xs font-thin w-56">
              <p className="text-center">Vea el video para poder pasar de paso</p>{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
