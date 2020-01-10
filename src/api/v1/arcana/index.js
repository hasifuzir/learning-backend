const express = require('express');
const validate = require('express-validation');
const controller = require('./arcana.controller');
const validator = require('./arcana.validator');

const router = express.Router();

/**
 * @api {get} api/v1/arcana arcana
 * @apiDescription Lists all Persona from an Arcana
 * @apiVersion 1.0.0
 * @apiName arcana
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
router.route('/:arcana')
  .get(validate(validator.joiSchema), controller.arcana);

module.exports = router;
