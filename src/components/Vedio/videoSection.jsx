import React from 'react';
import './VideoSection.css'; // If you prefer using an external CSS file for styling.

const VideoSection = () => {
  return (
    <div className="main">
      {/* Overlay */}
      <div className="overlay"></div>
      
      {/* Video */}
      <video
        src="https://firebasestorage.googleapis.com/v0/b/imageupload-a736f.appspot.com/o/vedio%2FSRI%20LANKA%20Experience%20_%20Wild%20and%20breathtaking%20Nature%20(1).mp4?alt=media&token=ef238376-64e4-41a5-9bfe-a6f4aa1b6cad"
        autoPlay
        loop
        muted
      >
        Your browser does not support the video tag.
      </video>
      
      {/* Content */}
      <div className="content">
        <h1>Exceptional stock footage and photography</h1>
        <p>Dissolve Premium is the go-to provider for visual storytellers around the globe.</p>
      </div>
    </div>
  );
};

export default VideoSection;
