import styles from "./ProductDetailsPage.module.css";
import { useParams } from "react-router-dom";

import {
  ProductDescription,
  ProductFeaturesAndInTheBox,
  CategoriesListing,
  ProductImageGallery,
  YouMayAlsoLikeProducts,
} from "../../components";
import { PRODUCTS } from "../../assets/data";

const ProductDetailsPage = () => {
  const params = useParams();
  const productSlug = params.productId;

  const filteredProduct = PRODUCTS.filter(
    (product) => product.slug === productSlug
  );

  return (
    <div>
      <div className={styles.productPage_navBarBgColor} />
      <ProductDescription productDetails={filteredProduct[0]} />
      <ProductFeaturesAndInTheBox productDetails={filteredProduct[0]} />
      <ProductImageGallery productDetails={filteredProduct[0]} />
      <YouMayAlsoLikeProducts productDetails={filteredProduct[0]} />
      <CategoriesListing onClick={null} />
    </div>
  );
};

export default ProductDetailsPage;
