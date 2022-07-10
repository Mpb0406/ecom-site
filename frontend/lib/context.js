import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  // State Data
  const [qty, setQty] = useState(1);
  const [showCart, setShowCart] = useState(false);

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

  return (
    <ShopContext.Provider
      value={{ qty, increaseQty, decreaseQty, showCart, setShowCart }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
