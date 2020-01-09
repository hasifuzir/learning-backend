const express = require('express');

const router = express.Router();

const listRoute = require('./list');
const addRoute = require('./add');

router.use('/list', listRoute);
router.use('/add', addRoute);

module.exports = router;
