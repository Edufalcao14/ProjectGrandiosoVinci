/* eslint-disable import/newline-after-import */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

const express = require('express');
const router = express.Router();

const {
  readAllSubCategories,
} = require('../models/subcategory.js');

router.get('/', (req, res) => {
  const subCategories = readAllSubCategories();
  return res.json(subCategories);
});

module.exports = router;
