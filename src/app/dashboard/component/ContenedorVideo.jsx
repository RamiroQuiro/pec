"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  SVGPlay,
  SVGPause,
  SVGStop,
  SVGAudio,
  SVGAgrandarVideo,
} from "@/app/componentes/SVGComponent";
export default function ContenedorVideo() {
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
    setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
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
        className={`rounded-lg overflow-hidden`}
      >
        <source src="/videoBienvenida.mp4" type="video/mp4" />
      </video>

      <div className="w-full flex items-center justify-between absolute bottom-0 gap-2 left-0 px-8">
        <div
          onClick={handlePlayPause}
          className="duration-300 flex w-1/12 cursor-pointer items-center justify-center"
        >
          {!isPlaying ? (
            <SVGPlay className="fill-primary-100 w-12 h-12 animate-[aparecer_.5s]" />
          ) : (
            <SVGPause className="fill-primary-100 w-12 h-12 animate-[aparecer_.5s]" />
          )}
        </div>
        <div
          onClick={handleStop}
          className="duration-300 flex w-1/12 cursor-pointer items-center justify-center"
        >
          <SVGStop className="fill-primary-tonoBlanco w-12 h-12 animate-[aparecer_.5s]" />
        </div>
        <div
          
          className="duration-300 flex w-8/12 cursor-pointer relative bg-primary-tonoBlanco rounded h-4 overflow-hidden justify-start  items-start"
        >
          <div
          style={{
            width:progress+"%"
          }}
          className={` bg-primary-100 h-full`}> 

          </div>
        </div>
        <div
          onClick={handleMuteUnmute}
          className="duration-300 flex w-1/12 flex-grow cursor-pointer items-center justify-center"
        >
          <SVGAudio className="fill-primary-tonoBlanco w-8 h-8 animate-[aparecer_.5s]" />
        </div>
        <div
          onClick={handleFullscreen}
          className="duration-300 flex w-1/12 cursor-pointer items-center justify-center"
        >
          <SVGAgrandarVideo className="fill-primary-tonoBlanco w-8 h-8 animate-[aparecer_.5s]" />
        </div>
      </div>
    </div>
  );
}
