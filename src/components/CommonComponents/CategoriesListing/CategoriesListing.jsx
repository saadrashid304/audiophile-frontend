import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./CategoriesListing.module.css";

// import headphoneImg from "../../../assets/shared/desktop/image-category-thumbnail-headphones.png";
// import speakerImg from "../../../assets/shared/desktop/image-category-thumbnail-speakers.png";
// import earphoneImg from "../../../assets/shared/desktop/image-category-thumbnail-earphones.png";
// import arrowRight from "../../../assets/shared/desktop/icon-arrow-right.svg";

const CategoriesListing = ({ onClick }) => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      title: "HEADPHONES",
      img: "https://res.cloudinary.com/dbbhecyus/image/upload/v1741763207/vwvqrwdrfn2uwbbpbvhb.png",
      alt: "Headphones",
    },
    {
      id: 2,
      title: "SPEAKERS",
      img: "https://res.cloudinary.com/dbbhecyus/image/upload/v1741763268/jh64yvcirnjnw7k7cd0c.png",
      alt: "Speakers",
    },
    {
      id: 3,
      title: "EARPHONES",
      img: "https://res.cloudinary.com/dbbhecyus/image/upload/v1741763240/zlilyvw7p0juzwssdkup.png",
      alt: "Earphones",
    },
  ];

  return (
    <div className={styles.homePage_categoriesContainer}>
      {categories.map((category) => (
        <div
          key={category.id}
          className={styles.homePage_categoryCard}
          onClick={() => {
            if (onClick !== null) {
              onClick();
            }
            navigate(`/${category.title.toLowerCase()}`);
          }}
        >
          <img
            src={category.img}
            alt={category.alt}
            className={styles.homePage_categoryImage}
          />
          <h4>{category.title}</h4>
          <div className={styles.homePage_categoryShopButton}>
            <span>SHOP</span>
            <img src="https://res.cloudinary.com/dbbhecyus/image/upload/v1741763324/uz3gawjszprgarro57fy.svg" />
          </div>
        </div>
      ))}
    </div>
  );
};

CategoriesListing.propTypes = {
  onClick: PropTypes.func,
};

export default CategoriesListing;
