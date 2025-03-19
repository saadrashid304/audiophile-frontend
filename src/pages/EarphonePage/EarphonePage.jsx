import { Fragment } from "react";
import styles from "./EarphonePage.module.css";
import { CategoriesListing, ProductListing } from "../../components";

// import yx1Desktop from "../../assets/product-yx1-earphones/desktop/image-product.jpg";
// import yx1Tablet from "../../assets/product-yx1-earphones/tablet/product-image.jpg";
// import yx1Mobile from "../../assets/product-yx1-earphones/mobile/image-product.jpg";

const dummyEarphones = [
  {
    id: 1,
    name: "YX1 Wireless Earphones",
    slug: "yx1-earphones",
    image: {
      mobile:
        "https://res.cloudinary.com/dbbhecyus/image/upload/v1741763970/ymeaabo1mp0awuglwecv.jpg",
      tablet:
        "https://res.cloudinary.com/dbbhecyus/image/upload/v1741763940/wchrn4spc2h4eyz5hrbi.jpg",
      desktop:
        "https://res.cloudinary.com/dbbhecyus/image/upload/v1741763903/rykegqmujxsc52egupxo.jpg",
    },
    new: true,
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
  },
];

const EarphonePage = () => {
  return (
    <Fragment>
      <div className={styles.earphonePage_header}>
        <h1>EARPHONES</h1>
      </div>
      <ProductListing products={dummyEarphones} />
      <CategoriesListing onClick={null} />
    </Fragment>
  );
};

export default EarphonePage;
