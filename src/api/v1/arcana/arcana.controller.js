const httpStatus = require('http-status');

// Models
const personaTable = require('@models').personas;

/**
 * arcana
 * @public
 */

const findArcana = (req) => {
  const { arcana } = req.params;

  return personaTable
    .findAll({
      where: {
        arcana
      }
    })
    .then((result) => {
      console.log('RESULT IS');
      console.log(result);
      return (result.length) ? result : 'No Persona found in Arcana';
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

exports.arcana = async (req, res, next) => {
  const foundPersona = await findArcana(req);

  res.status(httpStatus.OK);
  return res.json({
    responseCode: httpStatus.OK,
    responseMessage: 'OK',
    response: foundPersona
  });
};
