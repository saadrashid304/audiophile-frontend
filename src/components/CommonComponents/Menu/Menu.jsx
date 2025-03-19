import PropTypes from "prop-types";

import styles from "./Menu.module.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import CategoriesListing from "../CategoriesListing/CategoriesListing";

const Menu = ({ onClick }) => {
  return (
    <div className={styles.menu_backdrop} onClick={onClick}>
      <div
        className={styles.menu_container}
        // onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.menu_navbarbgcolor} />
        <NavigationBar setCloseIcon={true} />
        <CategoriesListing onClick={onClick} />
      </div>
    </div>
  );
};

Menu.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Menu;
