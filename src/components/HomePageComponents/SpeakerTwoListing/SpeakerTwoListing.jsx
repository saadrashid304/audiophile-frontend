import { useNavigate } from "react-router-dom";
import styles from "./SpeakerTwoListing.module.css";

const SpeakerTwoListing = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.homePage_speakerTwoListing}>
      <div className={styles.homePage_speakerTwoListingText}>
        <h2>ZX7 SPEAKER</h2>
        <button onClick={() => navigate("/productDetails/zx7-speaker")}>
          See Product
        </button>
      </div>
    </div>
  );
};

export default SpeakerTwoListing;
