import PropTypes from "prop-types";
import styles from "./Backdrop.module.css";

const Backdrop = ({ onClick }) => {
  return <div className={styles.backdrop} onClick={onClick} />;
};

Backdrop.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Backdrop;
