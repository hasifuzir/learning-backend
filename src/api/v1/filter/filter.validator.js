const Joi = require('joi');

const arcana = ['fool', 'jester', 'magician', 'consultant', 'priestess', 'empress', 'emperor', 'hierophant', 'lovers', 'chariot', 'justice', 'hermit', 'fortune', 'strength', 'hunger', 'hanged-man', 'death', 'death', 'temperance', 'devil', 'tower', 'star', 'moon', 'sun', 'judgement', 'aeon', 'world', 'universe', 'faith'];


module.exports = {
  name: 'filter',
  path: '/api/v1/filter',
  type: 'get',
  joiSchema: {
    body: {},
    query: {
      arcana: Joi.string().lowercase().valid(arcana),
      minBaseLevel: Joi.number().integer().min(0)
    },
    response: {
      200: {
        description: 'OK',
        body: {
          responseCode: 200,
          responseMessage: Joi.string().required(),
          response: {}
        }
      },
      400: {
        description: 'Error Response',
        body: {
          responseCode: 400,
          responseMessage: Joi.string().required(),
          response: {
            errors: Joi.array().items(Joi.object().keys({
              errorCode: Joi.string().required(),
              errorTitle: Joi.string().required(),
              errorDescription: Joi.string().required(),
              errorDebugDescription: Joi.string()
            }))
          }
        }
      }
    }
  }
};
