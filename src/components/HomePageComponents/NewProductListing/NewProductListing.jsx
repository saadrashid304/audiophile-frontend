import { useNavigate } from "react-router-dom";
import styles from "./NewProductListing.module.css";

const NewProductListing = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.homePage_mainContainer}>
      <div className={styles.homePage_newProductContainer}>
        <p className={styles.homePage_newProductText}>NEW PRODUCT</p>
        <h1 className={styles.homePage_newProductTitle}>
          XX99 MARK II HEADPHONES
        </h1>
        <p className={styles.homePage_newProductDescription}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button
          className={styles.homePage_newProductDetailsButton}
          onClick={() => navigate("/productDetails/xx99-mark-two-headphones")}
        >
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
};

export default NewProductListing;
