import React, { useEffect, useState } from "react";
import { GET_COLLECTIONS } from "../Libs/Shopify/Queries";
import shopifyApi from "../Libs/Shopify/ShopifyApi";

const AllCollections = () => {
  const fetchCollections = async () => {
    const query = { query: GET_COLLECTIONS };
    try {
      const response = await shopifyApi.post("", query);
      const fetchedCollections = response.data.data.collections.edges;
    //   console.log(fetchedCollections);
      
    } catch (error) {
      console.log(error);
      
    }
  };

  useEffect(() => {
    fetchCollections();
  }, []);
  return <div>AllCollections</div>;
};

export default AllCollections;
