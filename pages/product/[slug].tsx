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
  });

  const { fetching, error, data } = res;
  const { title, slug, description, image, price } =
    data?.products?.data?.[0]?.attributes;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
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
