const ProductCard = ({ product, collectionHandle }) => {
  return (
    <div key={product.id} className="uniq-ag-product-card">
      <div className="uniq-ag-product-image">
        <img src={product.images.edges[0]?.node.src} alt="" />
      </div>

      <div className="uniq-ag-product-title">
        <h2>{product.title}</h2>
      </div>

      <button className="uniq-ag-product-btn">Add To Cart</button>
    </div>
  );
};

export default ProductCard;
