export const PRODUCT_QUERY: string = `
query{
  products {
    data {
      attributes {
        title
        description
        price
        slug
        image {
          data {
            attributes {
              formats
            }
          }
        }
      }
    }
  }
}`;

export const GET_PRODUCT_QUERY: string = `
  query getProduct($slug: String!) {
    products(filters: {slug: {eq: $slug}}) {
      data {
        attributes {
          title,
          slug,
          description,
          price,
          image {
            data {
              attributes {
                formats
              }
            }
          }
        }
      }
    }
  }
`;
