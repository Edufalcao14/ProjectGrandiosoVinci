/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable object-property-newline */
/* eslint-disable no-dupe-keys */
/* eslint-disable object-shorthand */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jwtSecret = 'ilovemypizza!';
const lifetimeJwt = 24 * 60 * 60 * 1000; // in ms : 24 * 60 * 60 * 1000 = 24h

const saltRounds = 10;

const jsonDbPath = path.join(__dirname, '/../data/users.json');

const defaultUsers = [
  {
    id: 1,
    firstname: 'admin',
    lastname: 'admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('admin', saltRounds),
    address: 'ville, rue, numero',
    birthdate: new Date(), 
  },
];

async function login(email, password) {
  const userFound = readOneUserFromEmail(email);
  if (!userFound) return undefined;

  const passwordMatch = await bcrypt.compare(password, userFound.password);
  if (!passwordMatch) return undefined;

  const token = jwt.sign(
    { email: email }, // session data added to the payload (payload : part 2 of a JWT)
    jwtSecret, // secret used for the signature (signature part 3 of a JWT)
    { expiresIn: lifetimeJwt }, // lifetime of the JWT (added to the JWT payload)
  );
  console.log("id de l'user apres login ", userFound.id);
  const authenticatedUser = {
    id: userFound.id,
    firstname: userFound.firstname,
    lastname: userFound.lastname,
    email: email,
    street: userFound.street,
    city: userFound.city,
    zipcode: userFound.zipcode,
    country: userFound.country,
    birthdate: userFound.birthdate,
    token,
  };

  return authenticatedUser;
}

async function register(firstname, lastname, email, street, city, zipcode, country, birthdate, password) {
  await createOneUser(firstname, lastname, email, street, city, zipcode, country, birthdate, password);

  const token = jwt.sign(
    { email: email }, // session data added to the payload (payload : part 2 of a JWT)
    jwtSecret, // secret used for the signature (signature part 3 of a JWT)
    { expiresIn: lifetimeJwt }, // lifetime of the JWT (added to the JWT payload)
  );
  
  const authenticatedUser = {
    firstname: firstname,
    lastname: lastname, 
    email: email,
    street: street,
    city: city,
    zipcode: zipcode,
    country: country,
    birthdate: birthdate,
    token,
  };

  return authenticatedUser;
}

function readOneUserFromEmail(email) {
  const users = parse(jsonDbPath, defaultUsers);
  const indexOfUserFound = users.findIndex((user) => user.email === email);
  if (indexOfUserFound < 0) return undefined;
  return users[indexOfUserFound];
}

function ifUserExist(email) {
  const users = parse(jsonDbPath, defaultUsers);
  const foundUser = users.find((user) => user.email === email);
  console.log('ifUserExist');
  console.log(foundUser);
  return foundUser || undefined;
}

async function createOneUser(firstname, lastname, email, street, city, zipcode, country, birthdate, password) {
  const users = parse(jsonDbPath, defaultUsers);
  
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const createdUser = {
    id: getNextId(),
    firstname: firstname,
    lastname, lastname,
    email: email,
    street: street,
    city: city,
    zipcode: zipcode,
    country: country,
    birthdate: birthdate,
    password: hashedPassword,
  };
  users.push(createdUser);

  serialize(jsonDbPath, users);

  return createdUser;
}

function getNextId() {
  const users = parse(jsonDbPath, defaultUsers);
  const lastItemIndex = users?.length !== 0 ? users.length - 1 : undefined;
  if (lastItemIndex === undefined) return 1;
  const lastId = users[lastItemIndex]?.id;
  const nextId = lastId + 1;
  return nextId;
}

function getInfoByUserId(id) {
  const idNumber = parseInt(id, 10);
  const users = parse(jsonDbPath, defaultUsers);
  const indexOfUsersFound = users.findIndex((user) => user.id === idNumber);
  if (indexOfUsersFound < 0) return undefined;

  return users[indexOfUsersFound];
} 

function getUserFromUsername(email) {
  const users = parse(jsonDbPath, defaultUsers);
  const indexOfUserFound = users.findIndex((user) => user.email === email);
  
  return users[indexOfUserFound];
}
 
function updateUserInfo(id, propertiesToUpdate) {
  const idNumber = parseInt(id, 10);
  const users = parse(jsonDbPath, defaultUsers);
  const foundIndex = users.findIndex((user) => user.id === idNumber);

  if (foundIndex < 0) return undefined;

  const updatedUser = { ...users[foundIndex], ...propertiesToUpdate };

  users[foundIndex] = updatedUser;

  serialize(jsonDbPath, users);

  return updatedUser;
}

module.exports = {
  login,
  register,
  readOneUserFromEmail,
  getInfoByUserId,
  updateUserInfo,
  getUserFromUsername,
  defaultUsers,
  ifUserExist,
};
