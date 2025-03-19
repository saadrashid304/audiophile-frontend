import { useState, use } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./CheckoutPage.module.css";
import { NavigationBar, Footer, ThanksModal } from "../../components";
import CartContext from "../../store/cart-context";

import codImage from "../../assets/checkout/icon-cash-on-delivery.svg";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const cartCtx = use(CartContext);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("eMoney");
  const [displayModal, setDisplayModal] = useState(false);

  const selectRadio = (value) => {
    setSelectedPaymentMethod(value);
  };

  return (
    <div className={styles.checkout_mainContainer}>
      <NavigationBar setCloseIcon={false} />
      <div className={styles.checkout_navBarBgColor} />
      <p className={styles.checkout_GoBackBtn} onClick={() => navigate(-1)}>
        Go Back
      </p>
      <form
        className={styles.checkout_formSummaryContainer}
        onSubmit={(e) => {
          e.preventDefault();
          setDisplayModal(true);
        }}
      >
        <div className={styles.checkout_formContainer}>
          <div className={styles.checkout_actualForm}>
            <h1>CHECKOUT</h1>
            <h4>BILLING DETAILS</h4>
            <div className={styles.checkout_allInputsContainer}>
              <div className={styles.checkout_inputContainer}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Alexei Ward"
                  id="name"
                  // required
                />
              </div>
              <div className={styles.checkout_inputContainer}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  placeholder="alexei@mail.com"
                  id="email"
                  // required
                />
              </div>
              <div className={styles.checkout_inputContainer}>
                <label htmlFor="phoneNo">Phone Number</label>
                <input
                  type="text"
                  placeholder="+1 202-555-0136"
                  id="phoneNo"
                  // required
                />
              </div>
            </div>
            <h4>SHIPPING INFO</h4>
            <div className={styles.checkout_allInputsContainer}>
              <div
                className={`${styles.checkout_inputContainer} ${styles.checkout_fullWidthInputContainer}`}
              >
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  placeholder="1137 Williams Avenue"
                  id="address"
                  // required
                />
              </div>
              <div className={styles.checkout_inputContainer}>
                <label htmlFor="zipCode">Phone Number</label>
                <input
                  type="text"
                  placeholder="10001"
                  id="zipCode"
                  // required
                />
              </div>
              <div className={styles.checkout_inputContainer}>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  placeholder="New York"
                  id="city"
                  // required
                />
              </div>
              <div className={styles.checkout_inputContainer}>
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  placeholder="United States"
                  id="country"
                  // required
                />
              </div>
            </div>
            <h4>Payment Details</h4>
            <div className={styles.checkout_paymentMethodContainer}>
              <label>Payment Method</label>
              <div className={styles.checkout_paymentMethodWrapper}>
                <div
                  className={styles.checkout_individualMehtodContainer}
                  onClick={() => selectRadio("eMoney")}
                >
                  <input
                    type="radio"
                    id="eMoney"
                    name="paymentMethod"
                    value="eMoney"
                    onChange={() => selectRadio("eMoney")}
                    checked={selectedPaymentMethod === "eMoney"}
                    // required
                  />
                  <label htmlFor="eMoney">e-Money</label>
                </div>
                <div
                  className={styles.checkout_individualMehtodContainer}
                  onClick={() => selectRadio("cashOnDelivery")}
                >
                  <input
                    type="radio"
                    id="cashOnDelivery"
                    name="paymentMethod"
                    value="cashOnDelivery"
                    onChange={() => selectRadio("cashOnDelivery")}
                    checked={selectedPaymentMethod === "cashOnDelivery"}
                    // required
                  />
                  <label htmlFor="cashOnDelivery">Cash on Delivery</label>
                </div>
              </div>
            </div>
            {selectedPaymentMethod === "eMoney" ? (
              <div
                className={`${styles.checkout_allInputsContainer} ${styles.checkout_marginBottom}`}
              >
                <div className={styles.checkout_inputContainer}>
                  <label htmlFor="eNumber">e-Money Number</label>
                  <input type="text" placeholder="23858475" id="eNumber" />
                </div>
                <div className={styles.checkout_inputContainer}>
                  <label htmlFor="ePin">e-Money PIN</label>
                  <input type="password" placeholder="6891" id="ePin" />
                </div>
              </div>
            ) : (
              <div className={styles.checkout_cashOnDeliveryText}>
                <img src={codImage} alt="cod" />
                <p>
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className={styles.checkout_summaryContainer}>
          <h3>SUMMARY</h3>
          {cartCtx.cart.itemsList.map((item) => (
            <div key={item.itemSlug} className={styles.checkout_itemContainer}>
              <div className={styles.checkout_itemImageTitleContainer}>
                <img src={item.itemImage} />
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
          <button type="submit" className={styles.checkout_continueBtn}>
            CONTINUE & PAY
          </button>
        </div>
      </form>
      <Footer />
      {displayModal && (
        <ThanksModal closeModal={() => setDisplayModal(false)} />
      )}
    </div>
  );
};

export default CheckoutPage;
