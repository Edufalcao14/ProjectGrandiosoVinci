/* eslint-disable spaced-comment */
const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const corsOptions = {
  origin: ['http://localhost:8080', 'https://dorcas2217.github.io'],
};

const usersRouter = require('./routes/user');
const productRouter = require('./routes/product');
const cartRouter = require('./routes/cart');
const categorieRouter = require('./routes/categorie');
const subCategorieRouter = require('./routes/subCategory');
const authsRouter = require('./routes/auths');
const orderRouter = require('./routes/order');

const app = express();

app.use(helmet());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors(corsOptions));

app.use('/user', usersRouter);
app.use('/product', productRouter);
app.use('/carts', cartRouter);
app.use('/categories', categorieRouter);
app.use('/subCategories', subCategorieRouter);
app.use('/auths', authsRouter);
app.use('/order', orderRouter);

module.exports = app;
