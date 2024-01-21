import Navigate from "../Components/Router/Navigate";
import { getAuthenticatedUser } from "./auths";

// Create a new ShoppingCart
const shoppingCart = (email) => {
    const items = [];
    const cart = {
     objects : items,
     email
  }
  
  createCart(cart,email);
};

function createCart(cart,email){
    let string = "shoppingCart";
    string+=email;
    localStorage.setItem(string,JSON.stringify(cart));
    console.log("Cart created");
}

// Save the shoppingCart for the connected user
function saveCart(cart) {
    const user = getAuthenticatedUser();
    let string = "shoppingCart";
    string+=user.email;
    localStorage.setItem(string, JSON.stringify(cart));
  }

// Show shoppingCart
function loadCart(emailUser) {
    let string = "shoppingCart";
    string+=emailUser
  

  if(localStorage.getItem(string) === null){ // If no ShoppingCart -> Create one
    shoppingCart(emailUser);
  }

  const cart = JSON.parse(localStorage.getItem(string));
  if(cart.email === emailUser){
  return cart;
}
return  null;
}

// Delete the ShoppingCart for the user
function deleteCart() {
  const user = getAuthenticatedUser();
  localStorage.removeItem(`shoppingCart${user.email}`);
}

// Add a item to ShoppingCart
function addItemToCart(id, name, price, count) {
    const user = getAuthenticatedUser();
    if(user!==undefined){
     const cart = loadCart(user.email);
    // eslint-disable-next-line no-restricted-syntax
        for (const item in cart.objects) {
            if (cart.objects[item].name === name) {
            cart.objects[item].count += count;
            saveCart(cart);
        return;
      }
    }
    const itemToadd = new Item(id, name, price, count);
    console.log("l'objet ajouté est : " , itemToadd)
    cart.objects.push(itemToadd);
    console.log("la carte aprés ajout est " , cart)
    saveCart(cart);
    }else{
        Navigate('/login');
    }
  };

  // retire une unité de l'objet passé en parametre du panier (si apres suppression count = 0, retire l'objet du panier)
  function removeItemFromCart(name){
    const user = getAuthenticatedUser();
    const cart = loadCart(user.email);
    // eslint-disable-next-line no-restricted-syntax
    for(const item in cart.objects) {
      if(cart.objects[item].name === name) {
        cart.objects[item].count -= 1;
        if(cart.objects[item].count === 0) {
          cart.objects.splice(item,1);
        }
        break;
      }
    }
    saveCart(cart);
  };

  // deletethe item from the cart
  function deleteItem(name){
    const user = getAuthenticatedUser();
    const cart = loadCart(user.email);
    // eslint-disable-next-line no-restricted-syntax, guard-for-in, no-unreachable-loop
    for(const item in cart.objects) {
      if(cart.objects[item].name === name) {
        cart.objects.splice(item,1);
      }
      break;
    }
    saveCart(cart);
  };

// Get the total price 
function getCartTotal(){
  const user = getAuthenticatedUser();
    const cart = loadCart(user.email);
    let sum =0;
    const {length} = cart.objects;
  for(let i=0; i<length; i+=1){
    sum += cart.objects[i].price * cart.objects[i].count; 
}
return sum;
};


function countProductCart(){
  const user = getAuthenticatedUser();
  if(user === undefined){
    return 0;
  }
  const cart = loadCart(user.email);
  const {length} = cart.objects;
  
  let price = 0 ;
  for (let i = 0; i < length; i += 1) {
     price += parseInt(cart.objects[i].count, 10);
  }
  return price;
}

// constructeur d'objet pour panier
function Item(id, name, price, count) {
  this.id =id;
  this.name = name;
  this.price = price;
  this.count = count;
}


export { shoppingCart, loadCart, deleteCart,saveCart ,addItemToCart,removeItemFromCart,deleteItem, getCartTotal,countProductCart, Item };