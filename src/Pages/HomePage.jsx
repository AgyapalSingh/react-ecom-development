import React from "react";
import Layout from "../Layout/Layout";
import ShopAllProducts from "../Collections/ShopAllProducts";
import AllCollections from "../Collections/AllCollections";
import VideoBanners from "../Components/Video/VideoBanners";

const HomePage = () => {
  return (
    <Layout>
      <section className="sections">
        <VideoBanners
          largeVideoSrc="https://cdn.shopify.com/videos/c/o/v/a2b0bd497d784a27b9f0e56a6454ed84.mp4"
          smallVideoSrc="https://cdn.shopify.com/videos/c/o/v/77da774c8b4944e3be56708e78b8738d.mp4"
        />
      </section>

      <section className="sections">
        <ShopAllProducts />
      </section>
      {/* <section className="sections">
        <AllCollections />
      </section> */}

      <section className="sections">
        <VideoBanners
          largeVideoSrc="https://cdn.shopify.com/videos/c/o/v/3b362461304847df905e7d8059fc1cb5.mp4"
          smallVideoSrc="https://cdn.shopify.com/videos/c/o/v/5d4735320f364293aec7171d27866149.mp4"
        />
      </section>
    </Layout>
  );
};

export default HomePage;
