/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */
/* eslint-disable no-loop-func */
/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */

import ProductLibrary from '../../Domain/ProductLibrary';
import '../../stylesheets/_allproducts.scss';
import { clearPage } from '../../utils/render';
import { importAll } from '../../utils/utilsImages';
import Navigate from '../Router/Navigate';

const productsImgs = importAll(require.context('../../img/products', true, /\.png$/));
let i = 0;

// Mettez à jour la fonction AllProductPage pour accepter les paramètres de requête
const AllProductsCategory = async (queryParams) => {
  const nameCategoryURL = window.location.search;
const urlParams = new URLSearchParams(nameCategoryURL);
const nameCategory =  urlParams.get('category');

  clearPage();


  console.log(`nameCategoy : ${  nameCategory}` );
  const main = document.querySelector('main');
  renderAllProductsCards();


  


  async function getAllproducts(url) {
    const allProducts = await ProductLibrary.getAllProducts(url);
    return allProducts;
  }

  async function renderAllProductsCards() {
    // Utilisez queryParams pour obtenir les paramètres de requête
    const url = `category=${nameCategory}`;
    
    const container = document.createElement('div');
    container.className = 'container-products';
    container.id = 'container-products';
    container.innerHTML = '';
    container.innerHTML = await addCardProduct(url);
    main.appendChild(container);

    const productLinks = container.querySelectorAll('.link-products');

  productLinks.forEach((link) => {
    link.addEventListener('click', async (e) => {
      e.preventDefault();
      const productId = link.dataset.rui.split('/').pop(); 
      Navigate(`/product?id=${productId}`);
    });
  });
  }

  async function addCardProduct(url) {
    const products = await getAllproducts(url);
    let allCards = '';
    products?.forEach((product) => {
      allCards += `
        <a class="link-products" href="#" data-rui="/products/${product.id}">
          <div class="product-card" id="product-card">
            <img class="product-img" src=${productsImgs[product.id - 1]} alt="${product.name} picture"/>
            <h1 class="title-product">${product.name}</h1>
            <h2 class="price-product">${product.price}€</h2>
          </div>
        </a>
      `;
      i += 1;
    });
    return allCards;
  }
};

export default AllProductsCategory;
