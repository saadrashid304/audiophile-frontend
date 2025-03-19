import { Fragment, use, useState } from "react";
import CartContext from "../../../store/cart-context";
import styles from "./NavigationBar.module.css";
// import logo from "../../../assets/shared/desktop/logo.svg";
// import cartImg from "../../../assets/shared/desktop/icon-cart.svg";
import closeImg from "../../../assets/shared/tablet/close.png";
import { CartIcon } from "../../../assets/svgIcons";
import { NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Cart from "../Cart/Cart";
import Backdrop from "../Backdrop/Backdrop";
import Menu from "../Menu/Menu";

const NavigationBar = ({ setCloseIcon }) => {
  const [displayCart, setDisplayCart] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);
  const cartCtx = use(CartContext);
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className={styles.navigationBar_mainContainer}>
        {!setCloseIcon ? (
          <img
            src="https://res.cloudinary.com/dbbhecyus/image/upload/v1741763668/u9cvbwrtbjvkavqwcczf.svg"
            alt="nav"
            className={styles.navigationBar_hamburgerImg}
            onClick={() => setDisplayMenu(true)}
          />
        ) : (
          <img
            src={closeImg}
            alt="nav"
            className={styles.navigationBar_hamburgerImg}
            onClick={() => setDisplayMenu(false)}
          />
        )}
        {/* <img
          src="https://res.cloudinary.com/dbbhecyus/image/upload/v1741763668/u9cvbwrtbjvkavqwcczf.svg"
          alt="nav"
          className={styles.navigationBar_hamburgerImg}
          onClick={() => setDisplayMenu(true)}
        /> */}
        <nav className={styles.navigationBar_subContainer}>
          <img
            src="https://res.cloudinary.com/dbbhecyus/image/upload/v1741763619/vpezhzjzwdpzps0xwaj3.svg"
            alt="logo"
            onClick={() => navigate("/")}
          />
          <ul className={styles.navigationBar_navList}>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navigationBar_navLink} ${styles.active}`
                    : `${styles.navigationBar_navLink}`
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
                    ? `${styles.navigationBar_navLink} ${styles.active}`
                    : `${styles.navigationBar_navLink}`
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
                    ? `${styles.navigationBar_navLink} ${styles.active}`
                    : `${styles.navigationBar_navLink}`
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
                    ? `${styles.navigationBar_navLink} ${styles.active}`
                    : `${styles.navigationBar_navLink}`
                }
              >
                EARPHONES
              </NavLink>
            </li>
          </ul>
          <div
            className={styles.navigationBar_cartContainer}
            onClick={() => setDisplayCart(true)}
          >
            <CartIcon />
            {cartCtx.cart.itemsList.length > 0 && (
              <p>{cartCtx.cart.totalQuantity}</p>
            )}
          </div>
          {/* <img
          src="https://res.cloudinary.com/dbbhecyus/image/upload/v1741763702/btm31xkvhta949znkxlt.svg"
          alt="cart"
          className={styles.navigationBar_cartImg}
        /> */}
        </nav>
      </div>
      {displayCart && (
        <Fragment>
          <Backdrop onClick={() => setDisplayCart(false)} />
          <Cart cartObj={cartCtx.cart} />
        </Fragment>
      )}
      {displayMenu && <Menu onClick={() => setDisplayMenu(false)} />}
    </Fragment>
  );
};

NavigationBar.propTypes = {
  setCloseIcon: PropTypes.bool.isRequired,
};

export default NavigationBar;
