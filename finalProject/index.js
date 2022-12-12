// global imports
import './main/toggleSidebar.js';
import './main/cart/toggleCart.js';
import './main/cart/setupCart.js';
// specific imports
import fetchProducts from './main/fetchProducts.js';
import { setupStore, store } from './main/store.js';
import display from './main/displayProducts.js';
import { getElement } from './main/utils.js';

const init = async () => {
  const products = await fetchProducts();
  if (products) {
    // add products to the store
    setupStore(products);
    const featured = store.filter((product) => product.featured === true);
    display(featured, getElement('.featured-center'));
  }
};

window.addEventListener('DOMContentLoaded', init);
