import { useNavigate } from "react-router-dom";
import styles from "./EarphoneListing.module.css";
// import earphoneDesktop from "../../../assets/home/desktop/image-earphones-yx1.jpg";
// import earphoneTablet from "../../../assets/home/tablet/image-earphones-yx1.jpg";
// import earphoneMobile from "../../../assets/home/mobile/image-earphones-yx1.jpg";

const EarphoneListing = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.homePage_earphoneListing}>
      {/* <img src={earphoneImg} alt="earphone" /> */}
      <picture>
        <source
          media="(max-width: 375px)"
          srcSet="https://res.cloudinary.com/dbbhecyus/image/upload/v1741762154/iurbbo7fw6pjgitcmgrf.jpg"
        />
        <source
          media="(max-width: 768px)"
          srcSet="https://res.cloudinary.com/dbbhecyus/image/upload/v1741762118/kirk9hxpa82ekxuzxyr0.jpg"
        />
        <img
          src="https://res.cloudinary.com/dbbhecyus/image/upload/v1741761390/rvqczt3mnci3jb94nxuk.jpg"
          alt="earphone"
          className={styles.homePage_earphoneListingImage}
        />
      </picture>
      <div className={styles.homePage_earphoneListingTextContainer}>
        <div className={styles.homePage_earphoneListingText}>
          <h2>YX1 EARPHONES</h2>
          <button onClick={() => navigate("/productDetails/yx1-earphones")}>
            See Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default EarphoneListing;
