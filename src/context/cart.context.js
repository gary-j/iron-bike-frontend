import { createContext, useState } from "react";
const CartContext = createContext();

// Cart wrapper component
function CartProviderWrapper(props) {
  const [cartCount, setCartCount] = useState(0);
  const updateCartCount = () => {
    const number = cartCount + 2;
    setCartCount(number);
  };
  return (
    <CartContext.Provider value={{ cartCount, updateCartCount }}>
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProviderWrapper };
