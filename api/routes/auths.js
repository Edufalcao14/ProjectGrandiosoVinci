/* eslint-disable max-len */
const express = require('express');

const { register, login, ifUserExist } = require('../models/users');

const router = express.Router();

/* Register a user */
router.post('/register', async (req, res) => {
  const firstname = req?.body?.firstname;
  const lastname = req?.body?.lastname;
  const email = req?.body?.email;
  const password = req?.body?.password;
  const street = req?.body?.street;
  const city = req?.body?.city;
  const zipcode = req?.body?.zipcode;
  const country = req?.body?.country;
  const birthdate = req?.body?.birthdate;

  if (!firstname || !lastname || !email || !street || !city || !zipcode || !country || !birthdate || !password) {
    return res.sendStatus(400);
  }

  const authenticatedUser = await register(firstname, lastname, email, street, city, zipcode, country, birthdate, password);

  if (!authenticatedUser) return res.sendStatus(401);
  return res.json(authenticatedUser);
});

router.get('/getUserByEmail:email', async (req, res) => {
  const user = await ifUserExist(req.params.email);
  if (!user) return res.sendStatus(401);
  return res.json(user);
});

/* Login a user */
router.post('/login', async (req, res) => {
  const email = req?.body?.email?.length !== 0 ? req.body.email : undefined;
  const password = req?.body?.password?.length !== 0 ? req.body.password : undefined;

  if (!email || !password) return res.sendStatus(400); // 400 Bad Reques

  const authenticatedUser = await login(email, password);

  if (!authenticatedUser) return res.sendStatus(401); // 401 Unauthorized

  return res.json(authenticatedUser);
});

module.exports = router;
