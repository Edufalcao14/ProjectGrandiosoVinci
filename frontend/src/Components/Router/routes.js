import HomePage from '../Pages/HomePage';
import ShoppingCartPage from '../Pages/ShoppingCartPage';
import AllProductPage from '../Pages/AllProductPage';
import ProductPage from '../Pages/ProductPage';
import UserPage from '../Pages/UserPage'
import RegisterPage from '../Pages/RegisterPage';
import LoginPage from '../Pages/LoginPage';
import Logout from '../Logout/Logout';
import AdminPage from '../Pages/AdminPage';
import CheckoutPage from '../Pages/CheckoutPage';
// import WatchesProducts from '../Pages/WatchesProducts';
// import CosmeticsProducts from '../Pages/CosmeticsProducts';
// import BagsProducts from '../Pages/BagsProducts';
// import ClothingProducts from '../Pages/ClothingProducts';
import changePersonalInfoPage from '../Pages/changePersonalInfoPage';
import AllProductsCategory from '../Pages/AllProductsCategory';
import animationProducts from '../Pages/3dProduct';
import legalAndPrivacy from '../Pages/LegalAndPrivacy';

const routes = {
  '/': HomePage,
  '/shoppingCart':ShoppingCartPage,
  '/allProducts':AllProductPage,
  '/product':ProductPage,
  '/user':UserPage,
  '/logout': Logout,
  '/login':LoginPage,
  '/register': RegisterPage,
  '/admin':AdminPage, 
  '/checkout': CheckoutPage , 
  // '/AllProducts=Watches': WatchesProducts,
  // '/AllProducts=Cosmetics': CosmeticsProducts,
  // '/AllProducts=Bags': BagsProducts,
  // '/AllProducts=Clothing': ClothingProducts,
  '/changePersonalInfoPage': changePersonalInfoPage,
  '/product3d' : animationProducts,
  '/allProductsCategory': AllProductsCategory,
  '/privacy': legalAndPrivacy,
};

export default routes;
