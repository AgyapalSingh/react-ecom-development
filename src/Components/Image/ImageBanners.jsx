import React from "react";

const ImageBanners = ({ largeImageSrc, smallImageSrc }) => {
  return (
    <div className="uniq-ag-image-component">
      {largeImageSrc && (
        <img className="uniq-ag-large-image" alt="Image" src={largeImageSrc} />
      )}

      {smallImageSrc && (
        <img className="uniq-ag-small-image" alt="Image" src={smallImageSrc} />
      )}
    </div>
  );
};

export default ImageBanners;
