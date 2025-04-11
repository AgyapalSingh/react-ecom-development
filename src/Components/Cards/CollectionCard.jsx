import React from "react";

const CollectionCard = ({ collection }) => {
  return (
    <div key={collection.id} className="uniq-ag-collection-card">
      <div className="uniq-ag-collection-card-title">
        <h2>{collection.title}</h2>
      </div>
      <div className="uniq-ag-collection-card-img">
        <img
          src={collection.image?.url || "default-image.jpg"}
          alt={collection.image?.altText || collection.title}
        />
      </div>
    </div>
  );
};

export default CollectionCard;
