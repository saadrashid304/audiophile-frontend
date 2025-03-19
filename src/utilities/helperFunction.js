export const addToCartHandler = (cartCtx, productDetails, productQuantity) => {
  const { cart, setCart } = cartCtx;
  const {
    itemsList,
    totalQuantity,
    allItemsPriceWithOutVAT,
    allItemsPriceWithVAT,
    totalVAT,
  } = cart;
  const existingItemIndex = itemsList.findIndex(
    (item) => item.itemSlug === productDetails.slug
  );

  const newItemTotalPrice = productDetails.price * productQuantity;
  const newItemTotalVAT = (20 / 100) * newItemTotalPrice;
  const newItemTotalPriceWithVAT = newItemTotalPrice + newItemTotalVAT;

  let updatedItemsList;

  if (existingItemIndex === -1) {
    const newItem = {
      itemSlug: productDetails.slug,
      itemName: productDetails.name,
      itemShortName: productDetails.shortName,
      itemPrice: productDetails.price,
      itemImage: productDetails.cartImage,
      itemQuantity: productQuantity,
      itemTotalPrice: newItemTotalPrice,
      itemTotalVAT: newItemTotalVAT,
      itemTotalPriceWithVAT: newItemTotalPriceWithVAT,
    };
    updatedItemsList = [...itemsList, newItem];
  } else {
    updatedItemsList = itemsList.map((item, index) =>
      index === existingItemIndex
        ? {
            ...item,
            itemQuantity: item.itemQuantity + productQuantity,
            itemTotalPrice: item.itemTotalPrice + newItemTotalPrice,
            itemTotalVAT:
              (20 / 100) * (item.itemTotalPrice + newItemTotalPrice),
            itemTotalPriceWithVAT:
              (item.itemTotalPrice + newItemTotalPrice) * 1.2,
          }
        : item
    );
  }

  const updatedCart = {
    itemsList: updatedItemsList,
    totalQuantity: totalQuantity + productQuantity,
    allItemsPriceWithOutVAT: allItemsPriceWithOutVAT + newItemTotalPrice,
    allItemsPriceWithVAT: allItemsPriceWithVAT + newItemTotalPriceWithVAT,
    allItemsPriceWithVATAndShipping:
      allItemsPriceWithVAT + newItemTotalPriceWithVAT + 50,
    totalVAT: totalVAT + newItemTotalVAT,
  };

  console.dir(updatedCart);
  localStorage.setItem("cart", updatedCart);
  setCart(updatedCart);
};

export const removeFromCartHandler = (cartCtx, slug) => {
  const { cart, setCart } = cartCtx;
  const {
    itemsList,
    totalQuantity,
    allItemsPriceWithOutVAT,
    allItemsPriceWithVAT,
    totalVAT,
  } = cart;

  const existingItemIndex = itemsList.findIndex(
    (item) => item.itemSlug === slug
  );
  if (existingItemIndex === -1) return;

  const existingItem = itemsList[existingItemIndex];

  if (existingItem.itemQuantity > 1) {
    const updatedItemsList = itemsList.map((item, index) =>
      index === existingItemIndex
        ? {
            ...item,
            itemQuantity: item.itemQuantity - 1,
            itemTotalPrice: item.itemTotalPrice - item.itemPrice,
            itemTotalVAT: (20 / 100) * (item.itemTotalPrice - item.itemPrice),
            itemTotalPriceWithVAT: (item.itemTotalPrice - item.itemPrice) * 1.2,
          }
        : item
    );

    const updatedCart = {
      itemsList: updatedItemsList,
      totalQuantity: totalQuantity - 1,
      allItemsPriceWithOutVAT: allItemsPriceWithOutVAT - existingItem.itemPrice,
      allItemsPriceWithVAT: allItemsPriceWithVAT - existingItem.itemPrice * 1.2,
      allItemsPriceWithVATAndShipping:
        allItemsPriceWithVAT - existingItem.itemPrice * 1.2 + 50,
      totalVAT: totalVAT - (20 / 100) * existingItem.itemPrice,
    };
    console.dir(updatedCart);
    setCart(updatedCart);
  } else {
    const updatedItemsList = itemsList.filter((item) => item.itemSlug !== slug);
    const updatedCart = {
      itemsList: updatedItemsList,
      totalQuantity: totalQuantity - 1,
      allItemsPriceWithOutVAT:
        allItemsPriceWithOutVAT - existingItem.itemTotalPrice,
      allItemsPriceWithVAT:
        allItemsPriceWithVAT - existingItem.itemTotalPriceWithVAT,
      allItemsPriceWithVATAndShipping:
        allItemsPriceWithVAT - existingItem.itemTotalPriceWithVAT + 50,
      totalVAT: totalVAT - existingItem.itemTotalVAT,
    };
    console.dir(updatedCart);
    localStorage.setItem("cart", updatedCart);
    setCart(updatedCart);
  }
};
