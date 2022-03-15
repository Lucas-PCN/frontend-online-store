const PRODUCT_KEY = 'productId';

export const readProductId = () => JSON.parse(localStorage.getItem(PRODUCT_KEY) || '[]');
const saveProductId = (productId) => {
  localStorage.setItem(PRODUCT_KEY, JSON.stringify(productId));
};

export const getProductId = () => {
  let item = readProductId();
  if (item === null) {
    item = [];
  }
  return item;
};

export const createProductId = (productId) => {
  const previous = readProductId();
  if (!previous) {
    return saveProductId([productId]);
  }
  const ids = [...previous, productId];
  saveProductId(ids);
};

export const updateProduct = (product, quantity) => {
  const savedProducts = getProductId();
  const productIndex = savedProducts.findIndex((item) => item.id === product.id);
  if (productIndex < 0) {
    savedProducts.push({ ...product, quantity });
  } else {
    const productIdx = savedProducts[productIndex];
    const newQuantity = productIdx.quantity + quantity < 1
      ? 1
      : productIdx.quantity + quantity;

    savedProducts[productIndex] = {
      ...product,
      quantity: newQuantity,
    };
  }
  saveProductId(savedProducts);

  if (window.updateCartItemCount) window.updateCartItemCount();
};

export const removeProduct = (product) => {
  const savedProducts = getProductId();
  const productIndex = savedProducts.findIndex((item) => item.id === product.id);

  if (productIndex < 0) return;

  savedProducts.splice(productIndex, 1);
  saveProductId(savedProducts);

  if (window.updateCartItemCount) window.updateCartItemCount();
};

export const itemCount = () => {
  const savedItems = readProductId();
  const sum = savedItems.reduce((prev, act) => prev + act.quantity, 0);
  return sum;
};
