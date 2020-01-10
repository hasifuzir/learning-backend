const express = require('express');

const router = express.Router();

const listRoute = require('./list');
const addRoute = require('./add');
const deleteRoute = require('./delete');
const updateRoute = require('./update');

router.use('/list', listRoute);
router.use('/add', addRoute);
router.use('/delete', deleteRoute);
router.use('/update', updateRoute);

module.exports = router;
