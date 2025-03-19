import { use } from "react";

import styles from "./OrderSummary.module.css";
import CartContext from "../../../store/cart-context";

const OrderSummary = () => {
  const cartCtx = use(CartContext);
  return (
    <div className={styles.checkout_summaryContainer}>
      <h3>SUMMARY</h3>
      {cartCtx.cart.itemsList.map((item) => (
        <div key={item.itemSlug} className={styles.checkout_itemContainer}>
          <div className={styles.checkout_itemImageTitleContainer}>
            <img src={item.itemImage} />
            <div>
              <h3>{item.itemName}</h3>
              <p>$ {item.itemPrice}</p>
            </div>
          </div>
          <p className={styles.checkout_itemQuantity}>x{item.itemQuantity}</p>
        </div>
      ))}
      <div
        className={`${styles.checkout_priceContainer} ${styles.checkout_marginTop}`}
      >
        <p>TOTAL</p>
        <h3>$ {cartCtx.cart.allItemsPriceWithVAT.toFixed(2)}</h3>
      </div>
      <div className={styles.checkout_priceContainer}>
        <p>SHIPPING</p>
        <h3>$ 50.00</h3>
      </div>
      <div className={styles.checkout_priceContainer}>
        <p>VAT (INCLUDED)</p>
        <h3>$ {cartCtx.cart.totalVAT.toFixed(2)}</h3>
      </div>
      <div
        className={`${styles.checkout_priceContainer} ${styles.checkout_grandTotal}`}
      >
        <p>GRAND TOTAL</p>
        <h3>$ {cartCtx.cart.allItemsPriceWithVATAndShipping.toFixed(2)}</h3>
      </div>
      <button className={styles.checkout_continueBtn}>CONTINUE</button>
    </div>
  );
};

export default OrderSummary;
