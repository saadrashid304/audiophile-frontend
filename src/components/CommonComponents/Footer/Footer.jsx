import styles from "./Footer.module.css";
// import logo from "../../../assets/shared/desktop/logo.svg";
import { NavLink } from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "../../../assets/svgIcons";
// import instagramIcon from "../../../assets/shared/desktop/icon-instagram.svg";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_navBarContainer}>
        <img
          src="https://res.cloudinary.com/dbbhecyus/image/upload/v1741763619/vpezhzjzwdpzps0xwaj3.svg"
          alt="logo"
        />
        <ul className={styles.footer_navList}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? `${styles.footer_navLink} ${styles.active}`
                  : `${styles.footer_navLink}`
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/headphones"
              end
              className={({ isActive }) =>
                isActive
                  ? `${styles.footer_navLink} ${styles.active}`
                  : `${styles.footer_navLink}`
              }
            >
              HEADPHONES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/speakers"
              end
              className={({ isActive }) =>
                isActive
                  ? `${styles.footer_navLink} ${styles.active}`
                  : `${styles.footer_navLink}`
              }
            >
              SPEAKERS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/earphones"
              end
              className={({ isActive }) =>
                isActive
                  ? `${styles.footer_navLink} ${styles.active}`
                  : `${styles.footer_navLink}`
              }
            >
              EARPHONES
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.footer_textAndSocialMediaContainer}>
        <p>
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </p>
        <div className={styles.footer_socialMediaContainer}>
          <div>
            <a href="https://www.facebook.com/" target="_blank">
              <FacebookIcon />
            </a>
            <a href="https://x.com/" target="_blank">
              <TwitterIcon />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <InstagramIcon />
            </a>
            {/* <img src={facebookIcon} alt="facebookIcon" /> */}
            {/* <img src={twitterIcon} alt="twitterIcon" /> */}
            {/* <img src={instagramIcon} alt="instagramIcon" /> */}
          </div>
        </div>
      </div>
      <p className={styles.footer_copyrightText}>
        Copyright 2021. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
