import { useShopContext } from "../lib/context";
import {
  CartWrapper,
  CartStyle,
  Card,
  CardInfo,
  EmptyStyle,
  Quantity,
} from "../styles/CartStyles";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const Cart = (): JSX.Element => {
  const { cartItems, setShowCart } = useShopContext();

  return (
    <CartWrapper onClick={() => setShowCart(false)}>
      <CartStyle onClick={(e: Event) => e.stopPropagation()}>
        {cartItems.length < 1 && (
          <EmptyStyle>
            <h1>You have more shopping to do 😉</h1>
            <FaShoppingCart />
          </EmptyStyle>
        )}
        {cartItems.length >= 1 &&
          cartItems.map((item) => {
            return (
              <Card>
                <img
                  src={item.image.data.attributes.formats.thumbnail.url}
                  alt={item.title}
                />
                <CardInfo>
                  <h3>{item.title}</h3>
                  <h3>{item.price}</h3>
                  <Quantity>
                    <span>Qantity</span>
                    <button>
                      <AiFillMinusCircle />
                    </button>
                    <button>
                      <AiFillPlusCircle />
                    </button>
                  </Quantity>
                </CardInfo>
              </Card>
            );
          })}
      </CartStyle>
    </CartWrapper>
  );
};

export default Cart;
