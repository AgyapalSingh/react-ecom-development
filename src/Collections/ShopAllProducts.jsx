import React, { useEffect, useState } from "react";
import { GET_COLLECTION_SHOP_ALL_PRODUCTS } from "../Libs/Shopify/Queries";
import shopifyApi from "../Libs/Shopify/ShopifyApi";
import ProductCard from "../Components/Cards/ProductCard";

const ShopAllProducts = () => {
  const collectionHandle = "shop-all-products"
  const [selectError, setSelectError] = useState();
  const [selectProducts, setSelectProducts] = useState([]);

  const fetchCollectionByID = async () => {
    const query = { query: GET_COLLECTION_SHOP_ALL_PRODUCTS };
    try {
      const response = await shopifyApi.post("", query);
      const shopAllProducts = response.data.data.collection?.products?.edges;
      console.log(shopAllProducts);
      setSelectProducts(shopAllProducts);
    } catch (error) {
      setSelectError(error);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCollectionByID();
  }, []);

  return (
    <div className="uniq-ag-all-products">
      <div className="uniq-ag-all-products-header">
        <h2>Shop All Products</h2>
      </div>

      <div className="uniq-ag-all-products-list">
        {selectProducts.map(({ node }) => (
          <ProductCard
            key={node.id}
            product={node}
            collectionHandle={collectionHandle}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopAllProducts;
