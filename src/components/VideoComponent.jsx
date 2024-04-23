import React from 'react';
import VideoBg from '..//Assets/videoBg.mp4';

function VideoComponent() {
  return (
    <div className="main">
      <video src={VideoBg} autoplay loop muted />
    </div>
  );
}

export default VideoComponent;
