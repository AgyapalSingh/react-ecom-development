import React, { useEffect, useState, useRef } from "react";
import { GET_COLLECTION_SHOP_ALL_PRODUCTS } from "../Libs/Shopify/Queries";
import shopifyApi from "../Libs/Shopify/ShopifyApi";
import ProductCard from "../Components/Cards/ProductCard";
import ProductCardsLoader from "../Loaders/ProductCardsLoader";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const ShopAllProducts = () => {
  const [loading, setLoading] = useState(true);
  const collectionHandle = "shop-all-products";
  const [selectError, setSelectError] = useState();
  const [selectProducts, setSelectProducts] = useState([]);

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const fetchCollectionByID = async () => {
    const query = { query: GET_COLLECTION_SHOP_ALL_PRODUCTS };
    try {
      const response = await shopifyApi.post("", query);
      const shopAllProducts = response.data.data.collection?.products?.edges;
      setSelectProducts(shopAllProducts);
    } catch (error) {
      setSelectError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCollectionByID();
  }, []);

  return (
    <>
      {loading ? (
        <ProductCardsLoader />
      ) : (
        <div className="uniq-ag-all-products">
          <div className="uniq-ag-all-products-header">
            <h2>Shop All Products</h2>
          </div>

          <div className="uniq-ag-products-list-container">
            <div className="uniq-ag-all-products-list" ref={scrollRef}>
              {selectProducts.map(({ node }) => (
                <ProductCard
                  key={node.id}
                  product={node}
                  collectionHandle={collectionHandle}
                />
              ))}
            </div>

            <div className="uniq-ag-scroll-arrows">
              <button
                onClick={() => scroll("left")}
                className="uniq-ag-arrow-btn left"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={() => scroll("right")}
                className="uniq-ag-arrow-btn right"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShopAllProducts;
