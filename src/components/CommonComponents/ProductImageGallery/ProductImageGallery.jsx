import PropTypes from "prop-types";
import styles from "./ProductImageGallery.module.css";

const ProductImageGallery = ({ productDetails }) => {
  return (
    <div className={styles.imageGallery_mainContainer}>
      <div className={styles.imageGallery_leftContainer}>
        <picture className={styles.imageGallery_smallPicture}>
          <source
            media="(max-width: 375px)"
            srcSet={productDetails.gallery.first.mobile}
          />
          <source
            media="(max-width: 768px)"
            srcSet={productDetails.gallery.first.tablet}
          />
          <img src={productDetails.gallery.first.desktop} alt="product" />
        </picture>
        <picture className={styles.imageGallery_smallPicture}>
          <source
            media="(max-width: 375px)"
            srcSet={productDetails.gallery.second.mobile}
          />
          <source
            media="(max-width: 768px)"
            srcSet={productDetails.gallery.second.tablet}
          />
          <img src={productDetails.gallery.second.desktop} alt="product" />
        </picture>
      </div>
      <picture className={styles.imageGallery_largePicture}>
        <source
          media="(max-width: 375px)"
          srcSet={productDetails.gallery.third.mobile}
        />
        <source
          media="(max-width: 768px)"
          srcSet={productDetails.gallery.third.tablet}
        />
        <img src={productDetails.gallery.third.desktop} alt="product" />
      </picture>
    </div>
  );
};

ProductImageGallery.propTypes = {
  productDetails: PropTypes.object.isRequired,
};

export default ProductImageGallery;
