const express = require('express');

const router = express.Router();

const personaRoute = require('./persona');
const addRoute = require('./add');
const deleteRoute = require('./delete');
const updateRoute = require('./update');
const arcanaRoute = require('./arcana');
const filterRoute = require('./filter');

router.use('/persona', personaRoute);
router.use('/add', addRoute);
router.use('/delete', deleteRoute);
router.use('/update', updateRoute);
router.use('/arcana', arcanaRoute);
router.use('/filter', filterRoute);

module.exports = router;
