import { useState, use } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ProductDescription.module.css";
import CartContext from "../../../store/cart-context";
import { addToCartHandler } from "../../../utilities/helperFunction";

const ProductDescription = ({ productDetails }) => {
  const cartCtx = use(CartContext);
  const navigate = useNavigate();
  const [productQuantity, setProductQuantity] = useState(1);

  const goBackClickHandler = () => {
    navigate(-1);
  };

  const incrementQuantity = () => {
    setProductQuantity((prevState) => prevState + 1);
  };

  const decrementQuantity = () => {
    setProductQuantity((prevState) => {
      if (prevState === 1) {
        return prevState;
      } else {
        return prevState - 1;
      }
    });
  };

  // const addToCartHandler = () => {
  //   const { cart, setCart } = cartCtx;
  //   const {
  //     itemsList,
  //     totalQuantity,
  //     allItemsPriceWithOutVAT,
  //     allItemsPriceWithVAT,
  //     totalVAT,
  //   } = cart;
  //   const existingItemIndex = itemsList.findIndex(
  //     (item) => item.itemSlug === productDetails.slug
  //   );

  //   const newItemTotalPrice = productDetails.price * productQuantity;
  //   const newItemTotalVAT = (20 / 100) * newItemTotalPrice;
  //   const newItemTotalPriceWithVAT = newItemTotalPrice + newItemTotalVAT;

  //   let updatedItemsList;

  //   if (existingItemIndex === -1) {
  //     const newItem = {
  //       itemSlug: productDetails.slug,
  //       itemName: productDetails.name,
  //       itemPrice: productDetails.price,
  //       itemImage: productDetails.cartImage,
  //       itemQuantity: productQuantity,
  //       itemTotalPrice: newItemTotalPrice,
  //       itemTotalVAT: newItemTotalVAT,
  //       itemTotalPriceWithVAT: newItemTotalPriceWithVAT,
  //     };
  //     updatedItemsList = [...itemsList, newItem];
  //   } else {
  //     updatedItemsList = itemsList.map((item, index) =>
  //       index === existingItemIndex
  //         ? {
  //             ...item,
  //             itemQuantity: item.itemQuantity + productQuantity,
  //             itemTotalPrice: item.itemTotalPrice + newItemTotalPrice,
  //             itemTotalVAT:
  //               (20 / 100) * (item.itemTotalPrice + newItemTotalPrice),
  //             itemTotalPriceWithVAT:
  //               (item.itemTotalPrice + newItemTotalPrice) * 1.2,
  //           }
  //         : item
  //     );
  //   }

  //   const updatedCart = {
  //     itemsList: updatedItemsList,
  //     totalQuantity: totalQuantity + productQuantity,
  //     allItemsPriceWithOutVAT: allItemsPriceWithOutVAT + newItemTotalPrice,
  //     allItemsPriceWithVAT: allItemsPriceWithVAT + newItemTotalPriceWithVAT,
  //     allItemsPriceWithVATAndShipping:
  //       allItemsPriceWithVAT + newItemTotalPriceWithVAT + 50,
  //     totalVAT: totalVAT + newItemTotalVAT,
  //   };

  //   console.dir(updatedCart);
  //   setCart(updatedCart);
  // };

  return (
    <div>
      <p
        className={styles.productDescription_GoBackBtn}
        onClick={goBackClickHandler}
      >
        Go Back
      </p>
      <div className={styles.productDescription_container}>
        <picture className={styles.productDescription_picture}>
          <source
            media="(max-width: 375px)"
            srcSet={productDetails.image.mobile}
          />
          <source
            media="(max-width: 625px)"
            srcSet={productDetails.image.desktop}
          />
          <source
            media="(max-width: 768px)"
            srcSet={productDetails.image.tabletVertical}
          />
          <img src={productDetails.image.desktop} alt="product" />
        </picture>
        <div className={styles.productDescription_textContainer}>
          {productDetails.new && (
            <p className={styles.productDescription_newProductTag}>
              NEW PRODUCT
            </p>
          )}
          <h1 className={styles.productDescription_title}>
            {productDetails.name}
          </h1>
          <p className={styles.productDescription_description}>
            {productDetails.description}
          </p>
          <p className={styles.productDescription_price}>
            $ {productDetails.price}
          </p>
          <div className={styles.productDescription_btnContainer}>
            <div className={styles.productDescription_quantityBtnContainer}>
              <button onClick={decrementQuantity}>-</button>
              <p>{productQuantity}</p>
              <button onClick={incrementQuantity}>+</button>
            </div>
            <button
              className={styles.productDescription_button}
              onClick={() => {
                addToCartHandler(cartCtx, productDetails, productQuantity);
                setProductQuantity(1);
              }}
              // onClick={() => navigate(`/productDetails/${productDetails.slug}`)}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductDescription.propTypes = {
  productDetails: PropTypes.object.isRequired,
};

export default ProductDescription;
