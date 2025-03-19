import { createContext, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext({
  cart: {
    itemsList: [],
    totalQuantity: 0,
    allItemsPriceWithOutVAT: 0,
    allItemsPriceWithVAT: 0,
    allItemsPriceWithVATAndShipping: 0,
    totalVAT: 0,
  },
  setCart: () => {},
});

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState({
    itemsList: [],
    totalQuantity: 0,
    allItemsPriceWithOutVAT: 0,
    allItemsPriceWithVAT: 0,
    allItemsPriceWithVATAndShipping: 0,
    totalVAT: 0,
  });

  const cartChangeHandler = (value) => {
    setCart(value);
  };

  const contextValue = {
    cart: cart,
    setCart: cartChangeHandler,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContext;
