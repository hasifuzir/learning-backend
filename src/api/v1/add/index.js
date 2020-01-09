const express = require('express');
const validate = require('express-validation');
const controller = require('./add.controller');
const validator = require('./add.validator');

const router = express.Router();

/**
 * @api {post} api/v1/add add
 * @apiDescription Adds a persona
 * @apiVersion 1.0.0
 * @apiName add
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
  .post(validate(validator.joiSchema), controller.add);

module.exports = router;
