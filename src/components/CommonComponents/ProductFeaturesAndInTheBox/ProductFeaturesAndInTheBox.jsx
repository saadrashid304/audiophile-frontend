import PropTypes from "prop-types";
import styles from "./ProductFeaturesAndInTheBox.module.css";

const ProductFeaturesAndInTheBox = ({ productDetails }) => {
  return (
    <div className={styles.productFeatures_mainContainer}>
      <div className={styles.productFeatures_featuresContainer}>
        <h2>FEATURES</h2>
        {productDetails.features.split("\n\n").map((para, index) => (
          <p key={index}>{para}</p>
        ))}
        {/* <p>{productDetails.features}</p> */}
      </div>
      <div className={styles.productFeatures_inTheBoxContainer}>
        <h2>IN THE BOX</h2>
        <div>
          {productDetails.includes.map((obj, index) => (
            <p key={index}>
              <span>{obj.quantity}x</span> {obj.item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

ProductFeaturesAndInTheBox.propTypes = {
  productDetails: PropTypes.object.isRequired,
};

export default ProductFeaturesAndInTheBox;
