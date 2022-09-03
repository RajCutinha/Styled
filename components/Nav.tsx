import { NavStyles, NavItems } from "../styles/NavStyles";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";

const Nav = (): JSX.Element => {
  return (
    <NavStyles>
      <Link href={"/"}>Styled.</Link>
      <NavItems>
        <div>
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
    </NavStyles>
  );
};

export default Nav;
