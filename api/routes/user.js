const express = require('express');

const bcrypt = require('bcrypt');

const saltRounds = 10;

const router = express.Router();

const { getInfoByUserId, updateUserInfo, getUserFromUsername } = require('../models/users');

router.get('/', (req, res) => {
  const foundIndex = getUserFromUsername(req.query.email);

  if (!foundIndex) {
    console.log('User not found');
    return res.sendStatus(404);
  }

  return res.json(foundIndex);
});

router.get('/:id', (req, res) => {
  const foundUser = getInfoByUserId(req.params.id);

  if (!foundUser) return res.sendStatus(404);

  return res.json(foundUser);
});

router.patch('/onChange/:id', (req, res) => {
  const firstname = req?.body.firstname;

  const lastname = req?.body.lastname;

  const email = req?.body.email;

  const street = req?.body.street;

  const city = req?.body.city;

  const zipcode = req?.body.zipcode;

  const country = req?.body.country;

  const password = bcrypt.hashSync(req?.body.password, saltRounds);

  // eslint-disable-next-line max-len
  if (!firstname && !lastname && !email && !street && !city && !zipcode && !country && !password) return res.sendStatus(400);

  // eslint-disable-next-line max-len
  if (firstname?.length === 0 || lastname?.length === 0 || email?.length === 0 || street?.length === 0 || city?.length === 0 || zipcode?.length === 0 || country?.length === 0) return res.sendStatus(400);

  // eslint-disable-next-line max-len
  const updatedUser = updateUserInfo(req.params.id, {
    firstname, lastname, email, street, city, zipcode, country, password,
  });

  if (!updatedUser) return res.sendStatus(404);

  return res.json(updatedUser);
});

module.exports = router;
