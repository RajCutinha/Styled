import { NavStyles, NavItems } from "../styles/NavStyles";
import Link from "next/link";
import Cart from "../components/Cart";
import { useShopContext } from "../lib/context";
import { FiShoppingBag } from "react-icons/fi";

const Nav = (): JSX.Element => {
  const { showCart, setShowCart } = useShopContext();

  return (
    <NavStyles>
      <Link href={"/"}>Styled.</Link>
      <NavItems>
        <div onClick={() => setShowCart(true)}>
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      {showCart && <Cart />}
    </NavStyles>
  );
};

export default Nav;
