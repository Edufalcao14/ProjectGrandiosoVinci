/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
import imgCaroussel1 from '../../img/animations/test.gif';
import imgCaroussel2 from '../../img/animations/test2.gif';
import imgCaroussel3 from '../../img/animations/test3.gif';
import imgBags from '../../img/home/home_categories_bags.png';
import imgClothing from '../../img/home/home_categories_clothing.png';
import imgCosmetics from '../../img/home/home_categories_cosmetics.png';
import imgWatches from '../../img/home/home_categories_watches.png';
import popularImgWatches from '../../img/home/home_popular_category_watches.png';
import popularImgBags from '../../img/home/home_popular_category_bags.png';
import popularImgCosmetics from '../../img/home/home_popular_category_cosmetics.png';
import popularImgWatchesBallonBleu from '../../img/products/2.png';
import popularImgWatchesRolexSubmarinier from '../../img/products/1.png';
import popularImgWatchesPPGrandComplications from '../../img/products/7.png';
import popularImgBagsLVDubai from '../../img/products/3.png';
import popularImgBagsPradaSaffiano from '../../img/products/6.png';
import popularImgBagsPradaBP from '../../img/products/8.png';
import popularImgCosmeticsArmaniCode from '../../img/products/4.png';
import popularImgCosmeticsPenhaligons from '../../img/products/9.png';
import popularImgCosmeticsChanel5 from '../../img/products/5.png';
import Navigate from '../Router/Navigate';

import '../../stylesheets/_home.scss';
// Importe le fichier Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Importe le fichier Bootstrap JavaScript (avec les fonctionnalités JavaScript nécessaires, y compris jQuery)
import 'bootstrap/dist/js/bootstrap.bundle.min';

const html = `
<div class="container-home">

 <!-- Banniere de la HomePage -->

  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
    <div class="carousel-item active">
      <img id="imgCaroussel" class="d-block w-100" src="${imgCaroussel1}" alt="First slide">
    </div>
    <div class="carousel-item">
      <img id="imgCaroussel" class="d-block w-100" src="${imgCaroussel2}" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img id="imgCaroussel" class="d-block w-100" src="${imgCaroussel3}" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  </div>

 <!-- Categories section -->

  <div class="container-categorie-home"> 
      <h1> Categories </h1>
      <div class="flex-container-categories">
        <div class="card text-center mx-auto" >
          <img class="card-img-top" src="${imgBags}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Bags</h5>
            <a id="linkBags" data-uri="/allProductsCategory?category=Bags" href="#" class="btn btn-dark">Check</a>
          </div>
        </div>
        <div class="card text-center mx-auto" id="card-main-categorie">
          <img class="card-img-top" src="${imgCosmetics}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Cosmetics</h5>
          <a id="linkCosmetics" data-uri="/allProductsCategory?category=Cosmetics" href="" class="btn btn-dark">Check</a>
        </div>
      </div>
      <div class="card text-center mx-auto" >
        <img class="card-img-top" src="${imgClothing}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Clothing</h5>
          <a id="linkClothing" data-uri="/allProductsCategory?category=Clothing" href="#" class="btn btn-dark">Check</a>
        </div>
      </div>
        <div class="card text-center mx-auto" >
          <img class="card-img-top" src="${imgWatches}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Watches</h5>
            <a id="linkWatches" data-uri="/allProductsCategory?category=Watches" href="#" class="btn btn-dark">Check</a>
          </div>
        </div>
    </div>
  </div>

  <!-- Popular section -->

  <div> 
  <div class="flex-container-popular">
  <h1> Popular </h1>

          <div class="container-products-popular" id="container-products-popular">
                <img class="product-card-img"  src=${popularImgWatches} alt="Picture Watch Cartier"/>

                <!--WATCHES 1-->
             <a class="link-products-popular" href="#" data-uri="/product?id=2" id="w1">
                <div class="product-card-popular" id="product-card">
                    <img class="product-img-popular" src=${popularImgWatchesBallonBleu} alt="Picture Watch Cartier"/>
                    <h1 class="title-product" >Seiko Coutura</h1>
                    <h2 class="price-product" >999.99 €</h2>
                </div>
             </a>

             <!--WATCHES 2-->
             <a class="link-products-popular" href="#" data-uri="/product?id=1" id="w2">
                <div class="product-card-popular" id="product-card">
                    <img class="product-img-popular" src=${popularImgWatchesRolexSubmarinier} alt="Picture Watch Rolex"/>
                    <h1 class="title-product" >Rolex Submariner</h1>
                    <h2 class="price-product" >13500 €</h1>
                </div>
             </a>

             <!--WATCHES 3-->
             <a class="link-products-popular" href="#" data-uri="/product?id=7" id="w3" >
                <div class="product-card-popular" id="product-card">
                    <img class="product-img-popular" src=${popularImgWatchesPPGrandComplications} alt="Picture Watch Patek Philippe"/>
                    <h1 class="title-product" >Patek Philippe Grand Complications</h1>
                    <h2 class="price-product" >44999.99 €</h1>
                </div>
             </a>
       </div>

      <div class="container-products-popular" id="container-products-popular">
      <img class="product-card-img" src=${popularImgBags} alt="Picture Watch Cartier"/>

        <!--BAGS 1-->
        <a class="link-products-popular" href="#" data-uri="/product?id=3" id="b1">
          <div class="product-card-popular" id="product-card">
              <img class="product-img-popular" src=${popularImgBagsLVDubai} alt="Picture Bag Louis Vuitton"/>
              <h1 class="title-product" >Louis Vuitton Bag</h1>
              <h2 class="price-product" >6.999.99 €</h1>
          </div>
        </a>

        <!--BAGS 2-->
        <a class="link-products-popular" href="#" data-uri="/product?id=6" id="b2">
          <div class="product-card-popular" id="product-card">
              <img class="product-img-popular" src=${popularImgBagsPradaSaffiano} alt="Picture Bag Prada Saffiano"/>
              <h1 class="title-product" >Classic Prada bag</h1>
              <h2 class="price-product" >2500 €</h1>
          </div>
        </a>

        <!--BAGS 3-->
        <a class="link-products-popular" href="#" data-uri="/product?id=8" id="b3">
          <div class="product-card-popular" id="product-card">
              <img class="product-img-popular" src=${popularImgBagsPradaBP} alt="Picture Bag Prada Backpack"/>
              <h1 class="title-product" >Louis Vuitton Christopher</h1>
              <h2 class="price-product" >2750 €</h1>
          </div>
        </a>
     </div>

     <div class="container-products-popular" id="container-products-popular">
     <img class="product-card-img" src=${popularImgCosmetics} alt="Picture Watch Cartier"/>

     <!--COSMETICS 1-->
     <a class="link-products-popular" href="#" data-uri="/product?id=4" id="c1">
       <div class="product-card-popular" id="product-card">
           <img class="product-img-popular" src=${popularImgCosmeticsArmaniCode} alt="Picture Perfum Armani Code"/>
           <h1 class="title-product" >Tom Ford TOBACCO</h1>
           <h2 class="price-product" >289,99 €</h1>
       </div>
     </a>

     <!--COSMETICS 2-->
     <a class="link-products-popular" href="#" data-uri="/product?id=9" id="c2">
     <div class="product-card-popular" id="product-card">
         <img class="product-img-popular" src=${popularImgCosmeticsPenhaligons} alt="Picture Perfum Penhaligons"/>
         <h1 class="title-product" >Penhaligon's</h1>
         <h2 class="price-product" >299.99 €</h1>
     </div>
     </a>

     <!--COSMETICS 3-->
     <a id="c3" class="link-products-popular" href="#" data-uri="/product?id=5" >
       <div class="product-card-popular" id="product-card">
           <img class="product-img-popular" src=${popularImgCosmeticsChanel5} alt="Picture Perfum Chanel5"/>
           <h1 class="title-product" >Chanel N°5</h1>
           <h2 class="price-product" >289.99 €</h1>
       </div>
     </a>
    
  </div>

    <!-- Discover More Button -->
    <div class="text-center mt-5 mb-4" id="btn-allProducts" >

      <button class="btn btn-dark btn-lg btn-custom" data-uri="/allProducts" id="discoverMoreBtn">Discover More</button>
    </div>

</div>
</div>

</div>   `;

const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = html;

  const bagsButton = document.querySelector('#linkBags');
  bagsButton.addEventListener('click', (e) => {
    e.preventDefault();
    const url = bagsButton.getAttribute('data-uri');
    Navigate(url);
  });

  const cosmeticsButton = document.querySelector('#linkCosmetics');
  cosmeticsButton.addEventListener('click', (e) => {
    e.preventDefault();
    const url = cosmeticsButton.getAttribute('data-uri');
    Navigate(url);
  });

  const clothingButton = document.querySelector('#linkClothing');
  clothingButton.addEventListener('click', (e) => {
    e.preventDefault();
    const url = clothingButton.getAttribute('data-uri');
    Navigate(url);
  });

  const watchesButton = document.querySelector('#linkWatches');
  watchesButton.addEventListener('click', (e) => {
    e.preventDefault();
    const url = watchesButton.getAttribute('data-uri');
    Navigate(url);
  });

  const discoverBtn = document.querySelector('#discoverMoreBtn');
  discoverBtn.addEventListener('click', () => {
    const url = discoverBtn.getAttribute('data-uri');
    Navigate(url);
  });

  const productLinks = document.querySelectorAll('.link-products-popular');

  productLinks.forEach((link) => {
    link.addEventListener('click', async (e) => {
      e.preventDefault();
      const url = link.getAttribute('data-uri');
      Navigate(url);
    });
  });
};

export default HomePage;
