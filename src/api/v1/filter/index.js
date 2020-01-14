const express = require('express');
const validate = require('express-validation');
const controller = require('./filter.controller');
const validator = require('./filter.validator');

const router = express.Router();

/**
 * @api {get} api/v1/filter filter
 * @apiDescription Filters all Persona based on user queries
 * @apiVersion 1.0.0
 * @apiName filter
 * @apiPermission public
 *
 * @apiParam  {String} [param]  Put some parameter schema here
 *
 * @apiSuccess {Number} responseCode     HTTP Response Code
 * @apiSuccess {String} responseMessage  Response message
 * @apiSuccess {Object} response         Response object
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */
router.route('/')
  .get(validate(validator.joiSchema), controller.filter);

module.exports = router;
