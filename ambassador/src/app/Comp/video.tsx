"use client";

import React, { useEffect, useRef } from 'react';

const VideoPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error playing the video:", error);
      });
    }
  }, []);

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black mb-4">Featured Video</h1>
        <video
          ref={videoRef}
          className="w-full h-auto rounded-lg shadow-md"
          src="/video/message.mp4"
          autoPlay
          loop
          muted
          controls
          preload="auto"
          onLoadedMetadata={() => console.log("Video loaded")}
          onError={(e) => console.error("Video error:", e)}
        />
      </div>
    </section>
  );
};

export default VideoPage;