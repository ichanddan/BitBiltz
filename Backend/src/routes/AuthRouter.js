const express = require('express').Router();
const AuthControllers = require('../controllers/AuthControllers');
const routes = express;

routes.post('/register', AuthControllers.Register);
routes.get('/login', AuthControllers.Register);

module.exports = routes;