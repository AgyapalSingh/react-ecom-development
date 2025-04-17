import React from "react";

const EcoIcons = () => {
  const ecoIcons = [
    "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/1_Cruelty_Free_Final.jpg?v=1725447616",
    "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/2_Sulfate_Free_Final.jpg?v=1725447616",
    "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/3_Paraben_Free_Final.jpg?v=1725447616",
    "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/4_Plant_Based_Ingredient_Final.jpg?v=1725447616",
    "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/5_Non_Toxic_Final.jpg?v=1725447616",
    "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/6_Clinically_Proven.jpg?v=1725447616",
    "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/7_Cosmetic_Ingredient_Review.jpg?v=1725447616",
    "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/8_GMP_Certified.jpg?v=1725447616",
  ];
  return (
    <div className="uniq-ag-marquee-container">
      <div className="uniq-ag-ecoIcon-marquee">
        <div className="uniq-ag-ecoIcon-marquee-content">
          {ecoIcons.concat(ecoIcons).map((src, index) => (
            <img key={index} src={src} alt="eco-icons" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcoIcons;
