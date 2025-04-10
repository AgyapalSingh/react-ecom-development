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
