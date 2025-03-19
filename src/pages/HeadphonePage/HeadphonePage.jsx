import { Fragment } from "react";
import styles from "./HeadphonePage.module.css";
import { CategoriesListing, ProductListing } from "../../components";

// import mark2Desktop from "../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
// import mark2Tablet from "../../assets/product-xx99-mark-two-headphones/tablet/product-image.jpg";
// import mark2Mobile from "../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";

// import mark1Desktop from "../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
// import mark1Tablet from "../../assets/product-xx99-mark-one-headphones/tablet/product-image.jpg";
// import mark1Mobile from "../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";

// import xx59Desktop from "../../assets/product-xx59-headphones/desktop/image-product.jpg";
// import xx59Tablet from "../../assets/product-xx59-headphones/tablet/product-image.jpg";
// import xx59Mobile from "../../assets/product-xx59-headphones/mobile/image-product.jpg";

const dummyHeadphones = [
  {
    id: 1,
    name: "XX99 Mark II Headphones",
    slug: "xx99-mark-two-headphones",
    image: {
      mobile:
        "https://res.cloudinary.com/dbbhecyus/image/upload/v1741764519/xcwksi4lg0gboyiud3np.jpg",
      tablet:
        "https://res.cloudinary.com/dbbhecyus/image/upload/v1741764488/ujx4vul3nublwvwnrfii.jpg",
      desktop:
        "https://res.cloudinary.com/dbbhecyus/image/upload/v1741764077/l83y24qvualus5idnc6i.jpg",
    },
    new: true,
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
  },
  {
    id: 2,
    name: "XX99 Mark I Headphones",
    slug: "xx99-mark-one-headphones",
    image: {
      mobile:
        "https://res.cloudinary.com/dbbhecyus/image/upload/v1741764614/katsl1d4h0jfhm7vlhzw.jpg",
      tablet:
        "https://res.cloudinary.com/dbbhecyus/image/upload/v1741764578/zmzi622m2v59qdorpzfx.jpg",
      desktop:
        "https://res.cloudinary.com/dbbhecyus/image/upload/v1741764551/fmphn2nwvm66tdasgx5o.jpg",
    },
    new: false,
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
  },
  {
    id: 3,
    name: "XX59 Headphones",
    slug: "xx59-headphones",
    image: {
      mobile:
        "https://res.cloudinary.com/dbbhecyus/image/upload/v1741764701/d6zldzwqslhscuev321a.jpg",
      tablet:
        "https://res.cloudinary.com/dbbhecyus/image/upload/v1741764671/dw9slsprud5um3uxxaxl.jpg",
      desktop:
        "https://res.cloudinary.com/dbbhecyus/image/upload/v1741764643/gx6jky37jysmiqzkfcby.jpg",
    },
    new: false,
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
  },
];

const HeadphonePage = () => {
  return (
    <Fragment>
      <div className={styles.headphonePage_header}>
        <h1>HEADPHONES</h1>
      </div>
      <ProductListing products={dummyHeadphones} />
      <CategoriesListing onClick={null} />
    </Fragment>
  );
};

export default HeadphonePage;
