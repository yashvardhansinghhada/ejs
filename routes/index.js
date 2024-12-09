const express = require('express');

const router = express.Router();
console.log('router loaded');

router.use('/area', require('./area'))

module.exports = router;