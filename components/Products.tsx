import { ProductStyles } from "../styles/ProductStyles";
import Link from "next/link";

interface ProductProps {
  [key: string]: any;
}

const Product = ({ product }: ProductProps): JSX.Element => {
  return (
    <ProductStyles>
      <Link href={`/product/${product.attributes.slug}`}>
        <div>
          <img
            src={product.attributes.image.data.attributes.formats.small.url}
            alt=""
          />
        </div>
      </Link>
      <h2>{product.attributes.title}</h2>
      <h3>{product.attributes.description}</h3>
    </ProductStyles>
  );
};

export default Product;
