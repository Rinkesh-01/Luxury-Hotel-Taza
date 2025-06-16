import React, { useState } from "react";

function Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleClose = () => {
    setIsPlaying(false);
  };

  return (
    <div className="main-video">
 <div className="main-video-inner">
        <div className="video-wrapper">
          <img
            src="./img/video-banner.jpg"
            alt="Video Thumbnail"
            className={`video-thumbnail ${isPlaying ? "fade" : ""}`}
          />
          {!isPlaying && (
            <button className="play-button" data-aos="flip-left" onClick={handlePlay}>
              &#9658;
            </button>
          )}
          {isPlaying && (
            <div className="video-overlay">
              <button className="close-button" onClick={handleClose}>
                &times;
              </button>
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/199169842?h=58b48468dd&autoplay=1&muted=1"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
      </div>
     
  );
}

export default Video;
