const ProductCard = ({ product, collectionHandle }) => {
  return (
    <div key={product.id} className="uniq-ag-product-card">
      <div className="uniq-ag-product-image">
        <picture>
          <source
            type="image/webp"
            srcSet={
              product.images.edges[0]?.node.src?.replace(
                /(\.[\w\d_-]+)$/i,
                "_400x.webp"
              ) || "default-product_400x.webp"
            }
          />
          <img
            src={
              product.images.edges[0]?.node.src?.replace(
                /(\.[\w\d_-]+)$/i,
                "_400x$1"
              ) || "default-product_400x.jpg"
            }
            alt={product.title || "Product image"}
            loading="lazy"
            width="400"
            height="250"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </picture>
      </div>

      <div className="uniq-ag-product-title">
        <h2>{product.title}</h2>
      </div>

      <button className="uniq-ag-product-btn">Add To Cart</button>
    </div>
  );
};

export default ProductCard;
