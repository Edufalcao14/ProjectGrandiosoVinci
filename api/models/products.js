/* eslint-disable no-plusplus */
/* eslint-disable import/first */
/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
/* eslint-disable import/no-import-module-exports */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
// var Module = require('module');
// var fs     = require('fs');

// const popularImgWatchesBallonBleu = require ('../productsImages/2.png');
// const popularImgWatchesRolexSubmarinier =  require ('../productsImages/1.png');
// const popularImgWatchesPPGrandComplications = require ('../productsImages/7.png');
// const popularImgBagsLVDubai = require( '../productsImages/3.png');
// const popularImgBagsPradaSaffiano = require('../productsImages/6.png');
// const popularImgBagsPradaBP = require('../productsImages/8.png');
// const popularImgCosmeticsArmaniCode = require('../productsImages/4.png');
// const popularImgCosmeticsPenhaligons = require( '../productsImages/9.png');
// const popularImgCosmeticsChanel5 = require( '../productsImages/5.png');

const path = require('node:path');
const escape = require('escape-html');

const categories = require('./categories.js');

const subcategory = require('./subcategory.js');

const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/products.json');
const jsonDbPathSub = path.join(__dirname, '/../data/subcategory.json');

const { readAllCategories } = require('./categories');

const defaultProducts = [
  {
    id: 1,
    name: 'Rolex Submarine',
    price: 13500.00,
    description: 'Launched in 1953, the Rolex Submariner is the first divers’ wristwatch to be waterproof to a '
    + 'depth of 100 metres (330 feet) – now 300 metres (1,000 feet). Its major features, such as the graduated rotatable'
     + 'bezel, the luminescent display, the large hands and hour markers, have been a driving force in the creation'
      + 'of the long line of Rolex divers’ watches which followed. ',
    categorie: 'Watches',
    imgList: [],
    subcategory: ['Rolex', 'Man'],
    model3D: 'rolexSubmarine',
  },
  {
    id: 2,
    name: 'Seiko Coutura',
    price: 999.99,
    description:
      'Classic everyday style and desirable perfection meet in one watch with the Coutura collection. New perpetual chronographs and kinetic watches offer the most advanced environmentally-friendly watch technology.',
    categorie: 'Watches',
    imgList: [],
    subcategory: ['Seiko', 'Mans'],
    model3D: 'seikoCoutura',
  },
  {
    id: 3,
    name: 'Louis Vuitton Bag',
    price: 6999.99,
    description: 'Designed by Nicolas Ghesquière and presented at his first show, every detail of the Petite Malle is inspired by the history of Louis Vuitton trunks, from its rigid construction to its signature metallic pieces. A true showcase of the Maison’s savoir-faire, the iconic “little trunk” is a constant canvas for reinterpretation season after season.',
    categorie: 'Bags',
    imgList: [],
    subcategory: ['Louis Vuitton', 'Woman'],
    model3D: 'LVDubai',
  },
  {
    id: 4,
    name: 'Tom Ford TOBACCO',
    price: 289.99,
    description: 'Tom ford’s affection for London inspired this scent, reminiscent of an English gentlemen’s club, redolent with spice. He reinvents a classic fragrance genre by adding creamy tonka bean, vanilla, cocoa, dry fruit accords and sweet wood sap for a modern, opulent, and almost heady impression that’s all man, unless worn by a woman.',
    categorie: 'Cosmetic',
    imgList: [],
    subcategory: ['Tom Ford', 'Man', 'Womans'],
    model3D: 'notavailable',
  },
  {
    id: 5,
    name: 'Channel N°5',
    price: 289.99,
    description: 'À l’occasion des fêtes de fin d’année, CHANEL imagine un coffret réunissant N°5 Eau de Parfum et N°5 L’Huile Corps dans un format exclusif reprenant les lignes du flacon iconique N°5. Un rituel de parfumage généreux dans un coffret cadeau en édition limitée.',
    categorie: 'Cosmetic',
    imgList: [],
    subcategory: ['Channel', 'Woman'],
    model3D: 'channelN5',
  },
  {
    id: 6,
    name: 'Classic Prada bag',
    price: 2500.00,
    description: 'This refined and contemporary mini-bag has a sophisticated silhouette emphasized by the soft texture of velvet. The accessory decorated with the iconic enameled metal triangle logo is enhanced with leather details and metal hardware in a contrasting color. ',
    categorie: 'Bags',
    imgList: [],
    subcategory: ['Prada', 'Woman'],
    model3D: 'pradaBag',
  },
  {
    id: 7,
    name: 'Grand Complications',
    price: 44999.99,
    description: 'Mouvement mécanique extra-plat à remontage automatique. Calibre 240 Q. Jour, date, mois, année'
    + ' bissextile et indication 24 heures par aiguilles.',
    categorie: 'Watches',
    imgList: [],
    subcategory: ['Philiph pattek', 'Man'],
    model3D: 'GrandComplications',
  },
  {
    id: 8,
    name: 'Louis Vuitton Christopher',
    price: 2750,
    description: 'The Christopher MM conjures up the rugged spirit of a hiking pack in Monogram canvas. Its equally chic at work and play and evokes a fine lifestyle.',
    categorie: 'Bags',
    imgList: [],
    subcategory: ['Louis Vuitton', 'Woman'],
    model3D: 'lvBackpack',
  },
  {
    id: 9,
    name: "Penhaligon's",
    price: 299.99,
    description: 'Do come in, I’m sure we’ve met before... Noble patriarch, paragon of masculine elegance, Lord George welcomes with a scent of shaving soap and warming rum. But what secrets hide behind tradition?',
    categorie: 'Cosmetic',
    imgList: [],
    subcategory: ['Penhaligons', 'Man'],
    model3D: 'notavailable',
  },
  {
    id: 10,
    name: 'Louis VUitton Puffer',
    price: 9949.99,
    description: 'Montre - Grey embossed Louis Vuitton monogram - Down filled  - Drawstrings around cuffs and hem - Detachable hoodie pattek',
    categorie: 'Clothing',
    imgList: [],
    subcategory: ['Louis Vuitton', 'Woman'],
    model3D: 'notavailable',
  },
  {
    id: 11,
    name: 'Canda Goose Puffer',
    price: 1175.00,
    description: 'LAWRENCE PUFFER JACKET',
    categorie: 'Clothing',
    imgList: [],
    subcategory: ['Canada Goose', 'Man', 'Woman'],
    model3D: 'canadaGoosePuffer',
  },
  {
    id: 12,
    name: 'Balenciaga Defender',
    price: 1250.00,
    description: 'Defender Sneaker in black mesh and nylon is from the look 49 of the Balenciaga’s Summer 22, Red Carpet Collection. The Defender is a new superchunky sneaker with extreme tire tread.',
    categorie: 'Clothing',
    imgList: [],
    subcategory: ['Balenciaga', 'Man', 'Woman'],
    model3D: 'balenciagaDefender',
  },
];

function sortProductsByOrder(param) {
  const orderByTitle = param?.includes('name') ? param : undefined;

  let orderedProducts;
  const products = parse(jsonDbPath, defaultProducts);

  if (orderByTitle) {
    orderedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
    if (orderByTitle === '-name') {
      orderedProducts = orderedProducts.reverse();
    }
  } else if (param?.includes('price')) {
    orderedProducts = [...products].sort((a, b) => a.price - b.price);
    if (param?.includes('-price')) {
      orderedProducts = orderedProducts.reverse();
    }
  }
  const allProductsPotentiallyOrdered = orderedProducts ?? products;
  return allProductsPotentiallyOrdered;
}

function renderAllProductsByCategory(param) {
  let category;
  let gender;

  if (param?.toLowerCase().includes('woman')) {
    gender = 'woman';
  } else if (param?.toLowerCase().includes('man')) {
    gender = 'man';
  } else {
    // Si la requête ne spécifie pas un genre, vérifier si elle spécifie une catégorie
    // eslint-disable-next-line max-len
    const listOfCategories = readAllCategories();
    const categoriesArray = Object.values(listOfCategories);
    // eslint-disable-next-line max-len
    const requestedCategory = categoriesArray.find((cat) => param?.toLowerCase().includes(cat.name.toLowerCase()));
    if (requestedCategory) {
      category = requestedCategory.name;
    }
  }

  const products = parse(jsonDbPath, defaultProducts);

  let filteredProducts;

  if (gender === 'man') {
    filteredProducts = getAllMenProducts([...products]);
  } else if (gender === 'woman') {
    filteredProducts = getAllWomenProducts([...products]);
  } else if (category) {
    filteredProducts = getAllProductsByCategory([...products], category);
  }

  const allProductsPotentiallyOrdered = filteredProducts ?? products;
  return allProductsPotentiallyOrdered;
}

// Ajouter une nouvelle fonction pour filtrer par catégorie
function getAllProductsByCategory(products, category) {
  // eslint-disable-next-line max-len
  return products.filter((product) => product.categorie.toLowerCase().includes(category.toLowerCase()));
}

function searchProductsByName(param) {
  const products = parse(jsonDbPath, defaultProducts);
  const filteredProducts = products.filter(
    (product) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      product.name.toLowerCase().includes(param.toLowerCase()),
    // eslint-disable-next-line function-paren-newline
  );
  return filteredProducts;
}

function searchProductsByBrand(param) {
  const products = parse(jsonDbPath, defaultProducts);
  const filteredProducts = [];

  const brandParamLowerCase = param.toLowerCase();

  products.forEach((product) => {
    const brandProduct = removeSpacesAndMajFromString(product.subcategory[0]);
    if (brandProduct === brandParamLowerCase) {
      filteredProducts.push(product);
    }
  });
  return filteredProducts;
}

function removeSpacesAndMajFromString(param) {
  return param ? param.toLowerCase().replace(/\s/g, '') : '';
}

function readOneProduct(id) {
  const idNumber = parseInt(id, 10);
  const products = parse(jsonDbPath, defaultProducts);
  const indexOfProdcutsFound = products.findIndex((product) => product.id === idNumber);
  if (indexOfProdcutsFound < 0) return undefined;
  console.log('model readOneProduct', products);
  console.log(products[indexOfProdcutsFound]);
  return products[indexOfProdcutsFound];
}

// eslint-disable-next-line max-len
function createOneProduct(name, price, description, categorieParam, imgs, subcategories, modele) {
  const products = parse(jsonDbPath, defaultProducts);

  const categoriesBd = categories.readAllCategories();
  let categorieproduct;
  categoriesBd.forEach((categorie) => {
    if (categorie.name === categorieParam) {
      categorieproduct = categorie.name;
    }
  });
  const parsedPrice = parseFloat(price);

  const createdProduct = {
    id: products.length + 1,
    name: escape(name),
    price: parsedPrice,
    description: escape(description),
    categorie: escape(categorieproduct),
    imgList: imgs,
    subcategory: subcategories,
    model3D: modele,
  };

  products.push(createdProduct);

  serialize(jsonDbPath, products);

  return createdProduct;
}

function deleteOneProduct(id) {
  const idNumber = parseInt(id, 10);
  const products = parse(jsonDbPath, defaultProducts);
  const foundIndex = products.findIndex((product) => product.id === idNumber);
  if (foundIndex < 0) return undefined;
  const deletedProducts = products.splice(foundIndex, 1);
  const deletedProduct = deletedProducts[0];
  serialize(jsonDbPath, products);

  return deletedProduct;
}

function updateOneProduct(id, propertiesToUpdate) {
  const idNumber = parseInt(id, 10);
  const products = parse(jsonDbPath, defaultProducts);
  const foundIndex = products.findIndex((product) => product.id === idNumber);
  if (foundIndex < 0) return undefined;

  const updatedProduct = { ...products[foundIndex], ...propertiesToUpdate };

  products[foundIndex] = updatedProduct;

  serialize(jsonDbPath, products);

  return updatedProduct;
}

function getAllMenProducts() {
  const products = parse(jsonDbPath, defaultProducts);
  const menItems = [];
  products.forEach((item) => {
    if (item.subcategory.includes(subcategory.genderSubcategory.Mans)) {
      menItems.push(item);
    }
  });
  return menItems.length > 0 ? menItems : null;
}

function getAllWomenProducts() {
  const products = parse(jsonDbPath, defaultProducts);
  const womenItems = [];
  products.forEach((item) => {
    if (item.subcategory.includes(subcategory.genderSubcategory.Womans)) {
      womenItems.push(item);
    }
  });
  return womenItems.length > 0 ? womenItems : null;
}

module.exports = {
  sortProductsByOrder,
  searchProductsByName,
  renderAllProductsByCategory,
  readOneProduct,
  createOneProduct,
  deleteOneProduct,
  updateOneProduct,
  getAllMenProducts,
  getAllWomenProducts,
  searchProductsByBrand,
  defaultProducts,
};
