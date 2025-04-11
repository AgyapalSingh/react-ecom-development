import React, { useEffect, useState } from "react";
import { GET_COLLECTIONS } from "../Libs/Shopify/Queries";
import shopifyApi from "../Libs/Shopify/ShopifyApi";
import CollectionCard from "../Components/Cards/CollectionCard";
import CollectionCardsLoader from "../Loaders/CollectionCardsLoader";

const AllCollections = () => {
  const [loading, setLoading] = useState(true);
  const [collections, setCollections] = useState([]);
  const fetchCollections = async () => {
    const query = { query: GET_COLLECTIONS };
    try {
      const response = await shopifyApi.post("", query);
      const fetchedCollections = response.data.data.collections.edges;
      setCollections(fetchedCollections);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCollections();
  }, []);

  return (
    <>
      {loading ? (
        <CollectionCardsLoader />
      ) : (
        <div className="uniq-ag-all-collections">
          <div className="uniq-ag-all-collections-header">
            <h2>All Collections</h2>
          </div>

          <div className="uniq-ag-all-collections-list">
            {collections.map(({ node }) => (
              <CollectionCard key={node.id} collection={node} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AllCollections;
