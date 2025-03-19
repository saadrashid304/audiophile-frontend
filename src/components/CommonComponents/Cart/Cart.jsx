import { Fragment, use } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import styles from "./Cart.module.css";
import CartContext from "../../../store/cart-context";
import {
  addToCartHandler,
  removeFromCartHandler,
} from "../../../utilities/helperFunction";

const Cart = ({ cartObj }) => {
  const cartCtx = use(CartContext);
  const navigate = useNavigate();

  const incrementQuantity = (item) => {
    const productDetails = {
      slug: item.itemSlug,
      name: item.itemName,
      price: item.itemPrice,
      cartImage: item.itemImage,
    };
    addToCartHandler(cartCtx, productDetails, 1);
  };

  const decrementQuantity = (item) => {
    removeFromCartHandler(cartCtx, item.itemSlug);
  };

  const removeAllProductsFromCart = () => {
    cartCtx.setCart({
      itemsList: [],
      totalQuantity: 0,
      allItemsPriceWithOutVAT: 0,
      allItemsPriceWithVAT: 0,
      allItemsPriceWithVATAndShipping: 0,
      totalVAT: 0,
    });
  };

  return (
    <div className={styles.cart_mainContainer}>
      {cartObj.itemsList.length === 0 ? (
        <h2 className={styles.cart_emptyText}>Cart is empty</h2>
      ) : (
        <Fragment>
          <div className={styles.cart_quantityContainer}>
            <h2>{`CART (${cartObj.itemsList.length})`}</h2>
            <p onClick={removeAllProductsFromCart}>Remove all</p>
          </div>
          <div className={styles.cart_itemWrapper}>
            {cartObj.itemsList.map((item) => (
              <div key={item.itemSlug} className={styles.cart_itemContainer}>
                <div className={styles.cart_itemImageTitleContainer}>
                  <img src={item.itemImage} />
                  <div>
                    <h3>{item.itemShortName}</h3>
                    <p>$ {item.itemPrice}</p>
                  </div>
                </div>
                <div className={styles.cart_quantityBtnContainer}>
                  <button onClick={() => decrementQuantity(item)}>-</button>
                  <p>{item.itemQuantity}</p>
                  <button onClick={() => incrementQuantity(item)}>+</button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.cart_totalAmountContainer}>
            <p>TOTAL</p>
            <h3>$ {cartObj.allItemsPriceWithVAT.toFixed(2)}</h3>
          </div>
          <button
            className={styles.cart_checkoutBtn}
            onClick={() => navigate("/checkout")}
          >
            CHECKOUT
          </button>
        </Fragment>
      )}
    </div>
  );
};

Cart.propTypes = {
  cartObj: PropTypes.object.isRequired,
};

export default Cart;
