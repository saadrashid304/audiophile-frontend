import styles from "./ProductListingItem.module.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ProductListingItem = ({ productDetails }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.productListingItem_container}>
      <picture className={styles.productListingItem_picture}>
        <source
          media="(max-width: 375px)"
          srcSet={productDetails.image.mobile}
        />
        <source
          media="(max-width: 768px)"
          srcSet={productDetails.image.tablet}
        />
        <img
          src={productDetails.image.desktop}
          alt="
        product"
        />
      </picture>
      <div className={styles.productListingItem_textContainer}>
        {productDetails.new && (
          <p className={styles.productListingItem_newProductTag}>NEW PRODUCT</p>
        )}
        <h1 className={styles.productListingItem_title}>
          {productDetails.name}
        </h1>
        <p className={styles.productListingItem_description}>
          {productDetails.description}
        </p>
        <button
          className={styles.productListingItem_button}
          onClick={() => navigate(`/productDetails/${productDetails.slug}`)}
        >
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
};

ProductListingItem.propTypes = {
  key: PropTypes.number.isRequired,
  productDetails: PropTypes.object.isRequired,
};

export default ProductListingItem;
