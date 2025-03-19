import styles from "./ProductListing.module.css";
import PropTypes from "prop-types";

import { ProductListingItem } from "../../CommonComponents";

const ProductListing = ({ products }) => {
  return (
    <div className={styles.productListing_container}>
      {products.map((product) => (
        <ProductListingItem key={product.id} productDetails={product} />
      ))}
    </div>
  );
};
ProductListing.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductListing;
