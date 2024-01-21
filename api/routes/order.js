/* eslint-disable max-len */
/* eslint-disable spaced-comment */
const express = require('express');
//const path = require('node:path');

// const { parse } = require('../utils/json');

const {
  createOrder,
  getAllOrders,
  getOrdersOfUser,
} = require('../models/orders');

const router = express.Router();

router.get('/', (req, res) => {
  const orders = getAllOrders();
  return res.json(orders);
});

router.post('/addOrder', (req, res) => {
  const buyerId = req?.body?.buyerId?.length !== 0 ? req.body.buyerId : undefined;
  const firstName = req?.body?.firstName?.length !== 0 ? req.body.firstName : undefined;
  const lastName = req?.body?.lastName?.length !== 0 ? req.body.lastName : undefined;
  const totalPrice = req?.body?.totalPrice > 0 ? req.body.totalPrice : undefined;
  const payementMethod = req?.body?.payementMethod?.length !== 0 ? req.body.payementMethod : undefined;
  const day = req?.body?.day?.length !== 0 ? req.body.day : undefined;
  const month = req?.body?.month?.length !== 0 ? req.body.month : undefined;
  const year = req?.body?.year?.length !== 0 ? req.body.year : undefined;

  if (!buyerId || !firstName || !lastName || !totalPrice || !payementMethod || !day || !month || !year) {
    return res.sendStatus(400).json({ error: 'Paramètres invalides' }); // error code '400 Bad request'
  }
  const newOrder = createOrder(buyerId, firstName, lastName, totalPrice, payementMethod, day, month, year);
  console.log('ROUTER ORDER TEST2');
  return res.json(newOrder);
});

router.get('/getOrdersOfUser/:id', (req, res) => {
  const foundOrders = getOrdersOfUser(req.params.id);

  if (!foundOrders) return res.sendStatus(404);

  return res.json(foundOrders);
});

module.exports = router;
