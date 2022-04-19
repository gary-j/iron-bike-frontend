import { createContext, useState } from 'react';
const CartContext = createContext();

// Cart wrapper component
function CartProviderWrapper(props) {
  const [cartCount, setCartCount] = useState(0);
  const [cartArray, setCartArray] = useState([]);

  const addOneToCart = (e, itemToAdd) => {
    console.log(cartArray, 'cart array');

    console.log(itemToAdd, 'item to add');
    const copyOfCartArray = JSON.parse(JSON.stringify(cartArray));
    let added = false;
    copyOfCartArray.forEach((cartItem) => {
      if (cartItem?._id === itemToAdd?._id) {
        console.log('Appel if 1');
        cartItem.quantityInCart++;
        added = true;
      }
    });
    if (added === false) {
      const item = { ...itemToAdd, quantityInCart: 1 };
      copyOfCartArray.push(item);
    }
    setCartArray(copyOfCartArray);
    setCartCount(cartCount + 1);
  };

  const removeOneToCart = (e, itemToRemove) => {
    //
    const copyOfCartArray = JSON.parse(JSON.stringify(cartArray));
    console.log(cartCount, 'cart count');
    console.log(cartArray, 'cartArray');
    console.log(itemToRemove, 'item to remove');
    let removed = false;
    //
    if (cartArray.length === 0) {
      console.log('return cuz empty array');
      return;
    }
    copyOfCartArray.forEach((cartItem, i) => {
      if (cartItem?._id === itemToRemove?._id) {
        console.log(' match');
        if (cartItem.quantityInCart > 1) {
          console.log('Appel > 1');
          cartItem.quantityInCart--;
          setCartCount(cartCount - 1);
          removed = true;
        } else {
          console.log('splice');
          copyOfCartArray.splice(i, 1);
          setCartCount(cartCount - 1);
          removed = true;
        }
      } else {
        console.log("product not in the array, can't remove !");
        return;
      }
    });

    setCartArray(copyOfCartArray);

    console.log(cartArray, '-1');
  };
  const getSubTotal = () => {
    const subtotal = cartArray.reduce((previousItem, currentItem) => {
      return previousItem + currentItem.quantityInCart * currentItem.price;
    }, 0);
    return subtotal;
  };
  const getTotalToPay = (discount = 0) => {
    const totalAmount = cartArray.reduce((previousItem, currentItem) => {
      return previousItem + currentItem.quantityInCart * currentItem.price;
    }, 0);
    console.log('>>>>>>>>>>>>>', totalAmount);
    return totalAmount - discount > 0 ? totalAmount - discount : 0;
  };

  return (
    <CartContext.Provider
      value={{
        addOneToCart,
        removeOneToCart,
        cartCount,
        cartArray,
        setCartArray,
        getSubTotal,
        getTotalToPay,
      }}>
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProviderWrapper };
