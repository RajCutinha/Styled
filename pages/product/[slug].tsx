import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import {
  ProductDetails as DetailsStyle,
  ProductInfo,
  Quantity,
  Buy,
} from "../../styles/ProductDetails";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const ProductDetails = (): JSX.Element => {
  const { query } = useRouter();

  const [res] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
    requestPolicy: "cache-and-network",
  });

  const { fetching, error, data } = res;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { title, description, image } = data?.products?.data?.[0]?.attributes;

  return (
    <DetailsStyle>
      <img src={image.data.attributes.formats.medium.url} alt={title} />
      <ProductInfo>
        <h3>{title}</h3>
        <p>{description}</p>
        <Quantity>
          <span>Quantity</span>
          <button>
            <AiFillPlusCircle />
          </button>
          <p>0</p>
          <button>
            <AiFillMinusCircle />
          </button>
        </Quantity>
        <Buy>Add to cart</Buy>
      </ProductInfo>
    </DetailsStyle>
  );
};

export default ProductDetails;
