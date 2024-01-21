/* eslint-disable spaced-comment */
const express = require('express');
const path = require('node:path');

const { parse } = require('../utils/json');

const {
  searchProductsByBrand,
  updateOneProduct,
  createOneProduct,
  searchProductsByName,
  renderAllProductsByCategory,
  readOneProduct,
  sortProductsByOrder,
  defaultProducts,
  deleteOneProduct,
} = require('../models/products');

const jsonDbPath = path.join(__dirname, '/../data/products.json');

//const { authorize, isAdmin } = require('../utils/auths');

const router = express.Router();

/* Read all the products from the menu
   GET /product?order=name : ascending order by name
   GET /product?order=-name : descending order by name
   GET /product?category=man : select man products
   GET /product?category=woman : select woman products
   GET /product?name=rolex : select rolex products

*/
router.get('/', (req, res) => {
  let allProductsPotentiallyOrdered;
  const products = parse(jsonDbPath, defaultProducts);
  if (req?.query?.order) allProductsPotentiallyOrdered = sortProductsByOrder(req.query.order);
  // eslint-disable-next-line max-len
  else if (req?.query?.category) allProductsPotentiallyOrdered = renderAllProductsByCategory(req.query.category);
  else if (req?.query?.name) allProductsPotentiallyOrdered = searchProductsByName(req.query.name);
  // eslint-disable-next-line max-len
  else if (req?.query?.brand) allProductsPotentiallyOrdered = searchProductsByBrand(req.query.brand);
  else allProductsPotentiallyOrdered = products;
  return res.json(allProductsPotentiallyOrdered);
});

// Read the product identified by an id in the menu
router.get('/getProduct/:id', (req, res) => {
  const foundProduct = readOneProduct(req.params.id);
  if (!foundProduct) return res.sendStatus(404);

  return res.json(foundProduct);
});

// Add in data/products a new product
router.post('/', (req, res) => {
  const name = req?.body?.name?.length !== 0 ? req.body.name : undefined;
  const price = req?.body?.price > 0 ? req.body.price : undefined;
  const description = req?.body?.description?.length !== 0 ? req.body.description : undefined;
  const categorie = req?.body?.categorie?.length !== 0 ? req.body.categorie : undefined;
  const imgList = req?.body?.imgList ? req.body.imgList : undefined;
  const sub = req?.body?.subcategory ? req.body.subcategory : undefined;
  const modele = req?.body?.model3D !== 0 ? req.body.model3D : undefined;

  if (!name || !price || !description || !categorie || !imgList || !sub || !modele) {
    return res.sendStatus(400).json({ error: 'Paramètres invalides' }); // error code '400 Bad request'
  }
  const createdProd = createOneProduct(name, price, description, categorie, imgList, sub, modele);

  return res.json(createdProd);
});

router.delete('/:id', (req, res) => {
  const deletedProduct = deleteOneProduct(req.params.id);

  if (!deletedProduct) return res.sendStatus(404);

  return res.json(deletedProduct);
});

router.patch('/:id', (req, res) => {
  const name = req?.body?.name?.length !== 0 ? req.body.name : undefined;
  const price = req?.body?.price > 0 ? req.body.price : undefined;
  const description = req?.body?.description?.length !== 0 ? req.body.description : undefined;
  const categorie = req?.body?.categorie?.length !== 0 ? req.body.categorie : undefined;
  const imgList = req?.body?.imgList ? req.body.imgList : undefined;
  const subcategory = req?.body?.subcategory ? req.body.subcategory : undefined;
  const model3D = req?.body?.model3D !== 0 ? req.body.model3D : undefined;

  if (!name || !price || !description || !categorie || !imgList || !subcategory || !model3D) {
    return res.sendStatus(400);
  }

  const updatedProduct = updateOneProduct(req.params.id, {
    name, price, description, categorie, imgList, subcategory, model3D,
  });

  if (!updatedProduct) return res.sendStatus(404);

  return res.json(updatedProduct);
});

module.exports = router;
