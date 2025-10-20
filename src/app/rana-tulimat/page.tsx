"use client";
import React, { useRef } from "react";

export default function QRVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div className="w-full h-[100dvh] sm:h-screen bg-black flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        src="/video-for-qr/video.mp4"
        controls
        playsInline
        preload="auto"
        loop
        className="w-full h-full object-contain"
      />
    </div>
  );
}