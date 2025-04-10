// Query to Get Store Info
export const GET_STORE_INFO = `{
  shop {
    name
    brand {
      logo {
        image {
          altText
          src
          originalSrc
          url
        }
        alt
        id
      }
    }
  }
}`;

// 2. QUERY TO FETCH ALL COLLECTIONS
export const GET_COLLECTIONS = `{
  collections(first: 100) {
    edges {
      cursor
      node {
        id
        handle
        title
        description
        image {
          id
          url
        }
      }
    }
  }
}`;


// Query To Fetch specific collection by ID

const SHOP_ALL_PRODUCTS_GID = import.meta.env.VITE_SHOP_ALL_PRODUCTS_GID;

export const GET_COLLECTION_SHOP_ALL_PRODUCTS = `{
  collection(id:"${SHOP_ALL_PRODUCTS_GID}"){
    id
    handle
    title
    description
    products(first: 30){
      edges{
        node{
          id
          title
          handle
          images(first:10){
            edges{
              node{
                altText
                src
              }
            }
          }
          priceRange{
            minVariantPrice{
              amount
            }
          }
          variants(first: 10){
            edges{
              node{
                id
                title
                availableForSale
                price{
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
}`


const BEST_SELLERS_GID = import.meta.env.VITE_BEST_SELLERS_GID;
export const GET_COLLECTION_BY_ID = `{
  collection(id: "${BEST_SELLERS_GID}") {
    id
    handle
    title
    description
    image {
      id
      url
    }
    products(first: 20) {
      edges {
        node {
          id
          title
          handle
          images(first: 10) {
            edges {
              node {
                altText
                src
              }
            }
          }
            priceRange {
            minVariantPrice {
              amount
            }
          }

          variants(first: 10) {  
              edges {
                node {
                  id
                  title
                  availableForSale  
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
        }
      }
    }
  }
}
`;