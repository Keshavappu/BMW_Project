// src/components/VideoBackground.js
import React from "react";
import asset from "./asset/bmw.mp4"


const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src={asset} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
