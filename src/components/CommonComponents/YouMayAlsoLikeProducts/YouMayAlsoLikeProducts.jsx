import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";
import styles from "./YouMayAlsoLikeProducts.module.css";

const YouMayAlsoLikeProducts = ({ productDetails }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.youMayAlsoLike_mainContainer}>
      <h1>YOU MAY ALSO LIKE</h1>
      <div className={styles.youMayAlsoLike_allItemsContainer}>
        {productDetails.others.map((other, index) => (
          <div key={index} className={styles.youMayAlsoLike_itemContainer}>
            <picture className={styles.youMayAlsoLike_itemImage}>
              <source media="(max-width: 375px)" srcSet={other.image.mobile} />
              <source media="(max-width: 768px)" srcSet={other.image.tablet} />
              <img src={other.image.desktop} alt="product" />
            </picture>
            <h2 className={styles.youMayAlsoLike_itemName}>{other.name}</h2>
            <button
              className={styles.youMayAlsoLike_itemButton}
              onClick={() => navigate(`/productDetails/${other.slug}`)}
            >
              SEE PRODUCT
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

YouMayAlsoLikeProducts.propTypes = {
  productDetails: PropTypes.object.isRequired,
};

export default YouMayAlsoLikeProducts;
