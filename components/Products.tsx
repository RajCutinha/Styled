import { ProductStyles } from "../styles/ProductStyles";

interface ProductProps {
  [key: string]: any;
}

const Product = ({ product }: ProductProps) => {
  return (
    <ProductStyles>
      <div>
        <img
          src={product.attributes.image.data.attributes.formats.small.url}
          alt=""
        />
      </div>
      <h2>{product.attributes.title}</h2>
      <h3>{product.attributes.description}</h3>
    </ProductStyles>
  );
};

export default Product;
