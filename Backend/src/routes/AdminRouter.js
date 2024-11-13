const { AdminController } = require('../controllers');

const express = require('express').Router();

const routes = express;

routes.get('/accounts', AdminController.getAccount);
routes.get('/products', AdminController.getProduct);


module.exports = routes;