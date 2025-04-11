import React from "react";
import Layout from "../Layout/Layout";
import ShopAllProducts from "../Collections/ShopAllProducts";
import AllCollections from "../Collections/AllCollections";

const HomePage = () => {
  return (
    <Layout>
      <section className="sections">
        <AllCollections />
      </section>
    </Layout>
  );
};

export default HomePage;
