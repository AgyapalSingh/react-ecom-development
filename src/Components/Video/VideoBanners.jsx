import React from "react";

const VideoBanners = ({ largeVideoSrc, smallVideoSrc }) => {
  return (
    <div className="uniq-ag-video-component">
      {largeVideoSrc && (
        <video className="uniq-ag-large-video" autoPlay loop muted playsInline>
          <source src={largeVideoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {smallVideoSrc && (
        <video className="uniq-ag-small-video" autoPlay loop muted playsInline>
          <source src={smallVideoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoBanners;
