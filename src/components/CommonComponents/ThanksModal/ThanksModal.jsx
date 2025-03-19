import { Fragment, use, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import styles from "./ThanksModal.module.css";
import CartContext from "../../../store/cart-context";
import orderConfirmImage from "../../../assets/checkout/icon-order-confirmation.svg";

const ThanksModal = ({ closeModal }) => {
  const [showLess, setShowLess] = useState(true);
  const navigate = useNavigate();
  const cartCtx = use(CartContext);
  const cart = cartCtx.cart;
  return (
    <div className={styles.modal_backdrop} onClick={closeModal}>
      <div
        className={styles.modal_outerDiv}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modal_innerDiv}>
          <img src={orderConfirmImage} alt="orderConfirm" className={styles.modal_orderConfirmImg} />
          <h1 className={styles.modal_title}>THANK YOU</h1>
          <h1 className={styles.modal_title}>FOR YOUR ORDER</h1>
          <p className={styles.modal_desc}>
            You will receive an email confirmation shortly.
          </p>
          <div className={styles.modal_summaryContainer}>
            <div className={styles.modal_summary}>
              {showLess ? (
                <Fragment>
                  <div
                    key={cart.itemsList[0].itemSlug}
                    className={styles.checkout_itemContainer}
                  >
                    <div className={styles.checkout_itemImageTitleContainer}>
                      <img src={cart.itemsList[0].itemImage} alt="image" />
                      <div>
                        <h3>{cart.itemsList[0].itemShortName}</h3>
                        <p>$ {cart.itemsList[0].itemPrice}</p>
                      </div>
                    </div>
                    <p className={styles.checkout_itemQuantity}>
                      x{cart.itemsList[0].itemQuantity}
                    </p>
                  </div>
                  {cart.itemsList.length > 1 && (
                    <div
                      className={styles.modal_otherItemsText}
                      onClick={() => setShowLess(false)}
                    >
                      and {cart.itemsList.length - 1} other item(s)
                    </div>
                  )}
                </Fragment>
              ) : (
                <Fragment>
                  {cart.itemsList.map((item) => (
                    <div
                      key={item.itemSlug}
                      className={styles.checkout_itemContainer}
                    >
                      <div className={styles.checkout_itemImageTitleContainer}>
                        <img src={item.itemImage} alt="image" />
                        <div>
                          <h3>{item.itemShortName}</h3>
                          <p>$ {item.itemPrice}</p>
                        </div>
                      </div>
                      <p className={styles.checkout_itemQuantity}>
                        x{item.itemQuantity}
                      </p>
                    </div>
                  ))}
                  {cart.itemsList.length > 1 && (
                    <div
                      className={styles.modal_otherItemsText}
                      onClick={() => setShowLess(true)}
                    >
                      View less
                    </div>
                  )}
                </Fragment>
              )}
            </div>
            <div className={styles.modal_grandTotalContainer}>
              <p>GRAND TOTAL</p>
              <h2>$ {cart.allItemsPriceWithVATAndShipping.toFixed(2)}</h2>
            </div>
          </div>
          <button
            className={styles.modal_backToHomeBtn}
            onClick={() => navigate("/")}
          >
            BACK TO HOME
          </button>
        </div>
      </div>
    </div>
  );
};

ThanksModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default ThanksModal;
