import React from "react";

const ProductCardsLoader = () => {
  const loaderCount = 10;
  return (
    <div className="uniq-ag-products-loader">
      <div className="uniq-ag-products-loader-header">
        <h2></h2>
      </div>

      <div className="uniq-ag-products-loader-list">
        {Array.from({ length: loaderCount }).map((_, index) => (
          <div className="products-loader-card" key={index}></div>
        ))}
      </div>
    </div>
  );
};

export default ProductCardsLoader;
