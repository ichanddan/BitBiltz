const express = require('express').Router();
const {AuthController} = require('../controllers');
const routes = express;

routes.post('/register', AuthController.Register);
routes.post('/login', AuthController.Login);

module.exports = routes;