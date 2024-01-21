/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-import-module-exports

const path = require('node:path');
const escape = require('escape-html');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/orders.json');

const defaultOrders = [
  {
    id: 1,
    firstName: 'Maureen',
    lastName: 'Renaux',
    totalPrice: 1500,
    payementMethod: 'paypal',
    day: 16,
    month: 12,
    year: 2010,

  },
  {
    id: 2,
    firstName: 'Tom',
    lastName: 'Simonis',
    totalPrice: 3500,
    day: 8,
    month: 4,
    year: 2013,
    payementMethod: 'card',

  },
  {
    id: 3,
    firstName: 'Pepijn',
    lastName: 'Smeding',
    buyerId: 3,
    totalPrice: 500,
    day: 24,
    month: 12,
    year: 2012,
    payementMethod: 'paypal',

  },
  {
    id: 4,
    firstName: 'Pepijn',
    lastName: 'Smeding',
    buyerId: 3,
    totalPrice: 1500,
    day: 14,
    month: 2,
    year: 2014,
    payementMethod: 'card',

  },
];

function createOrder(buyerId, firstName, lastName, totalPrice, payementMethod, day, month, year) {
  const orders = parse(jsonDbPath, defaultOrders);

  // const parsedPrice = parseFloat(totalPrice);
  console.log('MODEL ORDER TEST1');

  const newOrder = {
    id: orders.length + 1,
    buyerId,
    firstName: escape(firstName),
    lastName: escape(lastName),
    totalPrice,
    payementMethod: escape(payementMethod),
    day,
    month,
    year,
  };

  orders.push(newOrder);

  serialize(jsonDbPath, orders);
  console.log('MODEL ORDER TEST2');
  return newOrder;
}

function getAllOrders() {
  const orders = parse(jsonDbPath, defaultOrders);
  return orders;
}

function getOrdersOfUser(id) {
  const idNumber = parseInt(id, 10);
  const orders = parse(jsonDbPath, defaultOrders);
  const ordersFound = [];
  orders.forEach((order) => {
    // eslint-disable-next-line no-cond-assign, no-param-reassign
    if (order.buyerId === idNumber) {
      ordersFound.push(order);
    }
  });

  return ordersFound;
}

module.exports = {
  createOrder,
  getAllOrders,
  getOrdersOfUser,
};
