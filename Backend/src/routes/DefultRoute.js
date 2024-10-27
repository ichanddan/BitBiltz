const express = require('express');
const { handleSuccess } = require('../utils');
const router = express.Router();

router.get('/',(req, res) => {
    handleSuccess(res ,200, 'OK');
});

module.exports = router;