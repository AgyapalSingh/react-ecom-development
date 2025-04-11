import React from "react";

const CollectionCard = ({ collection }) => {
  return (
    <div key={collection.id} className="uniq-ag-collection-card">
      <h2>{collection.title}</h2>
    </div>
  );
};

export default CollectionCard;
