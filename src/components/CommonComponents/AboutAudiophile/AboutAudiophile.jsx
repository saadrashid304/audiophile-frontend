import styles from "./AboutAudiophile.module.css";
// import aboutUsDesktop from "../../../assets/shared/desktop/image-best-gear.jpg";
// import aboutUsTablet from "../../../assets/shared/tablet/image-best-gear.jpg";
// import aboutUsMobile from "../../../assets/shared/mobile/image-best-gear.jpg";

const AboutAudiophile = () => {
  return (
    <div className={styles.homePage_aboutAudiophile}>
      <div className={styles.homePage_aboutAudiophileText}>
        <h2>
          Bringing you the <span>best</span> audio gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <picture>
        <source
          media="(max-width: 375px)"
          srcSet="https://res.cloudinary.com/dbbhecyus/image/upload/v1741763504/yvhzxhguqxiudnqevrba.jpg"
        />
        <source
          media="(max-width: 768px)"
          srcSet="https://res.cloudinary.com/dbbhecyus/image/upload/v1741763471/gseqlucepy05shtxzyed.jpg"
        />
        <img
          src="https://res.cloudinary.com/dbbhecyus/image/upload/v1741763440/lglimeget2hyezwl6bzl.jpg"
          alt="earphone"
          className={styles.homePage_aboutAudiophileImage}
        />
      </picture>
      {/* <img src={aboutUsImg} alt="aboutUs" /> */}
    </div>
  );
};

export default AboutAudiophile;
