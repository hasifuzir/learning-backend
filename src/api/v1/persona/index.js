const express = require('express');
const validate = require('express-validation');
const controller = require('./persona.controller');
const validator = require('./persona.validator');

const router = express.Router();

/**
 * @api {get} api/v1/persona persona
 * @apiDescription Lists all persona
 * @apiVersion 1.0.0
 * @apiName persona
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
  .get(validate(validator.joiSchema), controller.persona);

module.exports = router;
