import React, { useEffect, useState } from 'react'
import { GET_COLLECTION_SHOP_ALL_PRODUCTS } from '../Libs/Shopify/Queries'
import shopifyApi from '../Libs/Shopify/ShopifyApi'

const ShopAllProducts = () => {
  const [selectError, setSelectError] = useState();
  const [selectCollection, setSelectCollection] = useState([]);

  const fetchCollectionByID = async () =>{
    const query = {query: GET_COLLECTION_SHOP_ALL_PRODUCTS}
    try {
      const response = await shopifyApi.post("", query);
      const shopAllProducts = response.data.data.collection?.products?.edges;
      console.log(shopAllProducts);

    } catch (error) {
      setSelectError(error);
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchCollectionByID();
  },[]);

  return (
    <div>AllProducts</div>
  )
}

export default ShopAllProducts;