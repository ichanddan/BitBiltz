const dotenv = require('dotenv').config();
const path = require('path');
const { transporter } = require('./mailler');

module.exports ={
    PORT: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    ENV: process.env.ENV,
    transporter
}