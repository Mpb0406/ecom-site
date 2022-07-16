import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  // State Data
  const [qty, setQty] = useState(1);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // State Functions
  // Increase Quantity
  const increaseQty = () => {
    setQty((prevState) => prevState + 1);
  };

  //Decrease Quantity
  const decreaseQty = () => {
    if (qty - 1 < 1) {
      setQty(1);
    } else {
      setQty((prevState) => prevState - 1);
    }
  };

  // Add Item to Cart
  const addToCart = (product, quantity) => {
    // Update Total Item Quantity
    setTotalQuantities((prevState) => prevState + quantity);

    // Update Total Cart Price
    setTotalPrice((prevState) => prevState + product.price * quantity);

    const exists = cartItems.find((item) => item.slug === product.slug);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exists, quantity: exists.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };

  // Remove Item From Cart
  const onRemove = (product) => {
    // Set Total Price
    setTotalPrice((prevState) => prevState - product.price);

    //  Set Total Quantities
    setTotalQuantities((prevState) => prevState - 1);

    const exists = cartItems.find((item) => item.slug === product.slug);

    if (exists.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.slug !== product.slug));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exists, quantity: exists.quantity - 1 }
            : item
        )
      );
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
        addToCart,
        totalPrice,
        totalQuantities,
        onRemove,
      }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
