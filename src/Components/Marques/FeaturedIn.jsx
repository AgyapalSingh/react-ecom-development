import React from "react";

const FeaturedIn = () => {
  const featuredInIcons = [
    "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/1_ABP_Live.jpg?v=1725278853",
    "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/2_CXO.jpg?v=1725278853",
    "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/3_Daily_Hunt.jpg?v=1725278853",
    "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/4_Deccan_Herrald.jpg?v=1725278853",
    "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/5_Femina.jpg?v=1725278853",
    "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/6_Global_Spa.jpg?v=1725278853",
    "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/7_Happy_Credit.jpg?v=1725278853",
    "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/8_Health_Site.jpg?v=1725278853",
    "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/9_Her_Zindagi.jpg?v=1725278853",
    "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/10_High_On_Persona.jpg?v=1725278853",
    "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/11_Hindustan_Times.jpg?v=1725278876",
    "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/12_IANS.jpg?v=1725278876",
    "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/13_IDiva.jpg?v=1725278876",
    "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/14_Influsser.jpg?v=1725278876",
    "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/15_Lifestyyle.jpg?v=1725278875",
    "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/16_Mens_XP.jpg?v=1725278876",
    "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/17_Mid_Day.jpg?v=1725278875",
    "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/18_News_Nine.jpg?v=1725278876",
    "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/19_Perfect_Women.jpg?v=1725278876",
    "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/20_Pink_Villa.jpg?v=1725278876",
  ];

  return (
    <div className="uniq-ag-marquee-container">
      <div className="uniq-ag-featuredInIcons-marquee">
        <div className="uniq-ag-featuredInIcons-marquee-content">
          {featuredInIcons.concat(featuredInIcons).map((src, index) => (
            <img key={index} src={src} alt="featuredIn-icons" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn;
