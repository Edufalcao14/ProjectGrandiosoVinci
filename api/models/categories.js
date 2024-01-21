/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-import-module-exports

const path = require('node:path');
const escape = require('escape-html');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/categories.json');

const defaultCategories = [
  {
    id: 1,
    name: 'Watches',
  },
  {
    id: 2,
    name: 'Bags',
  },
  {
    id: 3,
    name: 'Cosmetic',
  },
  {
    id: 4,
    name: 'Clothing',
  },
];

serialize(jsonDbPath, defaultCategories);

function getCategorieWatches() {
  return defaultCategories[0].name;
}
function getCategorieBags() {
  return defaultCategories[1].name;
}
function getCategorieCosmetics() {
  return defaultCategories[2].name;
}
function getCategorieClothing() {
  return defaultCategories[3].name;
}

function readAllCategories() {
  const categories = parse(jsonDbPath, defaultCategories);

  return categories;
}

module.exports = {
  getCategorieWatches,
  getCategorieBags,
  getCategorieCosmetics,
  getCategorieWatches,
  readAllCategories,
  getCategorieClothing
};
