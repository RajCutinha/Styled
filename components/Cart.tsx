import { useShopContext } from "../lib/context";
import { CartWrapper, CartStyle, Card } from "../styles/CartStyles";

const Cart = (): JSX.Element => {
  const { cartItems } = useShopContext();

  return (
    <CartWrapper>
      <CartStyle>
        {cartItems.length < 1 && (
          <div>
            <h1>You have more shopping to do 😉</h1>
          </div>
        )}
        {cartItems.length > 1 &&
          cartItems.map((item) => {
            return (
              <Card>
                <img
                  src={item.data.attributes.formats.thumbnail.url}
                  alt={item.title}
                />
                <h3>{item.title}</h3>
                <h3>{item.price}</h3>
              </Card>
            );
          })}
      </CartStyle>
    </CartWrapper>
  );
};

export default Cart;
