import React, { createContext, useContext, useState } from "react";

interface ShopContextProps {
  qty: number;
  setQty: () => void;
  increaseQty: () => void;
  decreaseQty: () => void;
  showCart: boolean;
  setShowCart: () => void;
  cartItems: any[];
  setCartItems: () => void;
  onAdd: (product: any, qty: number) => void;
}

const ShopContext = createContext(undefined);

export const StateContext = ({ children }): JSX.Element => {
  const [qty, setQty] = useState(1);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const increaseQty = (): void => setQty((prev) => prev + 1);

  const decreaseQty = (): void =>
    qty === 1 ? setQty(1) : setQty((prev) => prev - 1);

  const onAdd = (product: any, quantity: number) => {
    const exist = cartItems.find((item) => item.slug === product.slug);

    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, qty: exist.qty + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: quantity }]);
    }
  };

  return (
    <ShopContext.Provider
      value={{
        qty,
        setQty,
        increaseQty,
        decreaseQty,
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        onAdd,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = (): ShopContextProps => useContext(ShopContext);
