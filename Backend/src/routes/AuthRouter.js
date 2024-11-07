const express = require('express').Router();
const {AuthController} = require('../controllers');
const routes = express;

routes.post('/send-otp', AuthController.SendOtp);
routes.post('/otp-verification', AuthController.VerifyOTP);
routes.post('/register', AuthController.Register);
routes.post('/login', AuthController.Login);

module.exports = routes;