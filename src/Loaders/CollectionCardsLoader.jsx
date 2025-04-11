import React from "react";

const CollectionCardsLoader = () => {
  const loaderCount = 10;
  return (
    <div className="uniq-ag-collections-loader">
      <div className="uniq-ag-collections-loader-header">
        <h2></h2>
      </div>

      <div className="uniq-ag-collections-loader-list">
        {Array.from({ length: loaderCount }).map((_, index) => (
          <div className="collection-loader-card" key={index}></div>
        ))}
      </div>
    </div>
  );
};

export default CollectionCardsLoader;
