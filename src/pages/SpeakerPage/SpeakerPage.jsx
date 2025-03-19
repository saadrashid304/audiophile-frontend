import { Fragment } from "react";
import styles from "./SpeakerPage.module.css";
import { CategoriesListing, ProductListing } from "../../components";

// import zx9Desktop from "../../assets/product-zx9-speaker/desktop/image-product.jpg";
// import zx9Tablet from "../../assets/product-zx9-speaker/tablet/product-image.jpg";
// import zx9Mobile from "../../assets/product-zx9-speaker/mobile/image-product.jpg";

// import zx7Desktop from "../../assets/product-zx7-speaker/desktop/image-product.jpg";
// import zx7Tablet from "../../assets/product-zx7-speaker/tablet/product-image.jpg";
// import zx7Mobile from "../../assets/product-zx7-speaker/mobile/image-product.jpg";

const dummySpeakers = [
  {
    id: 1,
    name: "ZX9 Speaker",
    slug: "zx9-speaker",
    image: {
      mobile:
        "https://res.cloudinary.com/dbbhecyus/image/upload/v1741764846/ejeqpqqtgzqsl0dnzdnj.jpg",
      tablet:
        "https://res.cloudinary.com/dbbhecyus/image/upload/v1741764822/imwtcwo18ohlttrcdrip.jpg",
      desktop:
        "https://res.cloudinary.com/dbbhecyus/image/upload/v1741764779/hbmkukuaw9bgvlpdrzgx.jpg",
    },
    new: true,
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
  },
  {
    id: 2,
    name: "ZX7 Speaker",
    slug: "zx7-speaker",
    image: {
      mobile:
        "https://res.cloudinary.com/dbbhecyus/image/upload/v1741764935/qzpyildwpprxoxw8ev39.jpg",
      tablet:
        "https://res.cloudinary.com/dbbhecyus/image/upload/v1741764912/plmd3oljybi9bcy9kh90.jpg",
      desktop:
        "https://res.cloudinary.com/dbbhecyus/image/upload/v1741764871/dlwdwpzdttkjyhfeeqqq.jpg",
    },
    new: false,
    description:
      "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
  },
];

const SpeakerPage = () => {
  return (
    <Fragment>
      <div className={styles.speakerPage_header}>
        <h1>SPEAKERS</h1>
      </div>
      <ProductListing products={dummySpeakers} />
      <CategoriesListing onClick={null} />
    </Fragment>
  );
};

export default SpeakerPage;
