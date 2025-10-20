"use client";
import React, { useEffect, useRef } from "react";

export default function QRVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const play = async () => {
      try {
        await videoRef.current?.play();
      } catch {}
    };
    // Some mobile browsers require a user gesture; muted + autoplay usually works.
    play();
  }, []);

  return (
    <div className="w-full h-[100dvh] sm:h-screen bg-black flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        src="/video-for-qr/video.mp4"
        autoPlay
        muted
        playsInline
        controls={false}
        loop
        className="w-full h-full object-contain"
      />
    </div>
  );
}