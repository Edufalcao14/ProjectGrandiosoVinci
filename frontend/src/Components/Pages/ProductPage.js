/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { addItemToCart } from "../../utils/shoppingCart";
import ProductLibrary from "../../Domain/ProductLibrary";
import { importAll } from '../../utils/utilsImages';
import Navigate from "../Router/Navigate";
import '../../stylesheets/_product.scss';
import icon from '../../img/products/3dicon.svg';


const productsImgsBig = importAll(require.context('../../img/productBig', true, /\.png$/));
const productsImgs = importAll(require.context('../../img/products', true, /\.png$/));
// eslint-disable-next-line import/no-extraneous-dependencies

const html = `
        <!-- Product section-->
        <section class="py-5" id="showProduct">
        <hr class="my-4">
        </section>
        <!-- Related items section-->
        
        <section class="py-5 bg-light" >
        <div class="container px-4 px-lg-5 mt-5">
        <h2 class="fw-bolder mb-4">Related products</h2>
        <br/> 
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 " id="relatedProducts" >
       
      
        </div>
        </section>
        `

const ProductPage = async () => {
    const main = document.querySelector('main');
    main.innerHTML = html;

    const url = window.location.search;
    const id = url.split('=');

    const product = await ProductLibrary.prototype.getProductById(id[1])
    const productName = product.name;
    const productPrice = product.price;
    const productDescription = product.description;
    const showProduct = document.getElementById("showProduct");
    const troisDProduct = product.model3D;
   
    const html2=`
                <div class="container px-4 px-lg-5 my-5">
                    <div class="row gx-4 gx-lg-5 align-items-center">
                    <div class="col-md-6" id="container-img-product">
                    <img class="img-product" src="${productsImgsBig[id[1]-1]}" alt="..." />
                    <div class="container-btn-2" > <button class="btn-2" data-uri="/product3d?product=${troisDProduct}">
                     3D product 
                     <img src="${icon}"  alt="${icon}" picture"/>
                     </button>  </div>
                    </div>
                   
                        <div class="col-md-6">
                            <h1 class="display-5 fw-bolder">${productName}</h1>
                            <div class="fs-5 mb-5">
                                <span class="price-product-single" > ${productPrice} €</span>
                            </div>
                            <p class="lead">${productDescription}</p>
                            <div class="d-flex">
                                
                                <input class="form-control text-center me-3" id="productQuantity" type="num" value="1" style="max-width: 3rem" />
                                <button class="btn btn-outline-dark flex-shrink-0" type="button" id="addToCart">
                                    <i class="bi-cart-fill me-1"></i>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`;

    showProduct.innerHTML = html2;

    const btnAddToCart = document.getElementById('addToCart')
    btnAddToCart.addEventListener('click', async (e) => {
        e.preventDefault();
        console.log("ajout panier")
        const quantity = document.querySelector('#productQuantity').value;
        addItemToCart(id[1],productName,productPrice,parseInt(quantity,10));
        Navigate('/shoppingCart');
      }); 
  
  

    const similarProducts = await ProductLibrary.prototype.renderAllProductsByCategory(product.categorie);
    const showSimilarProduct = document.getElementById('relatedProducts');
    let html3 = ``;

    
    for(let i = 0; i < similarProducts.length; i += 1){

        html3 += `
        <div class="col mb-5" >
        <div class="product" >
            <img class="product-img" src="${productsImgs[similarProducts[i].id -1]}"  />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${similarProducts[i].name}</h5>
                    <!-- Product price-->
                    <span class="text ">${similarProducts[i].price}€</span>
                </div>
            </div>
            <!-- Product actions-->
            
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent" >
                <div class="text-center"><a class="showProduct btn btn-outline-dark mt-auto"value="${similarProducts[i].id}">Show Product</a></div>
            </div>
           
        </div>
        </div>
    `
    }
     
    showSimilarProduct.innerHTML = html3;

  const btnShowProduct = document.getElementsByClassName('showProduct');
  for (let y = 0; y <  btnShowProduct.length; y += 1) {
    btnShowProduct[y].addEventListener('click', async (e) => {
        console.log("halooo")
          e.preventDefault();
          console.log(similarProducts[y].id);
         Navigate('/product?id=',similarProducts[y].id );
        }); 
  }
  

    const btnList = document.querySelectorAll('.btn-2');
    btnList.forEach((btn) =>{
        btn.addEventListener('click', (e) => {
        const urlNavigate = btn.getAttribute('data-uri');
        Navigate(urlNavigate);
      });
    });
    

}; 



  export default ProductPage;




 