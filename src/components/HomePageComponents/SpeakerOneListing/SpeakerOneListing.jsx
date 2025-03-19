import { useNavigate } from "react-router-dom";
import styles from "./SpeakerOneListing.module.css";
// import speakerImg1 from "../../../assets/home/desktop/image-speaker-zx9.png";
// import speakerImg2 from "../../../assets/home/tablet/image-speaker-zx9.png";
// import speakerImg3 from "../../../assets/home/mobile/image-speaker-zx9.png";

const SpeakerOneListing = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.homePage_speakerListing}>
      {/* <picture>
        <source
          media="(max-width: 375px)"
          srcSet="https://res.cloudinary.com/dbbhecyus/image/upload/v1741762765/ldxkskkdlhdzm70lmpyu.png"
        />
        <source
          media="(max-width: 768px)"
          srcSet="https://res.cloudinary.com/dbbhecyus/image/upload/v1741762738/ljeympiaifwcwnj20jtw.png"
        />
        <img
          src="https://res.cloudinary.com/dbbhecyus/image/upload/v1741762710/rmgy3phmk7t5qe5fgdzw.png"
          alt="earphone"
          className={styles.homePage_earphoneListingImage}
        />
      </picture> */}
      <img
        src="https://res.cloudinary.com/dbbhecyus/image/upload/v1741762710/rmgy3phmk7t5qe5fgdzw.png"
        alt="speaker"
        className={styles.homePage_speakerListingImage}
      />
      <div className={styles.homePage_speakerListingText}>
        <h2 className={styles.homePage_speakerListingTitle}>ZX9 Speaker</h2>
        <p className={styles.homePage_speakerListingDescription}>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button
          className={styles.homePage_speakerListingButton}
          onClick={() => navigate("/productDetails/zx9-speaker")}
        >
          See Product
        </button>
      </div>
    </div>
  );
};

export default SpeakerOneListing;
