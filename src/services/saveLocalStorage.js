const PRODUCT_KEY = 'productId';

const readProductId = () => JSON.parse(localStorage.getItem(PRODUCT_KEY));
const saveProductId = (productId) => {
  localStorage.setItem(PRODUCT_KEY, JSON.stringify(productId));
};

export const getProductId = () => {
  let item = readProductId();
  if (item === null) {
    item = {};
  }
};

export const createProductId = (productId) => {
  // const items = {
  //   id: [],
  // };
  saveProductId(productId);
};
