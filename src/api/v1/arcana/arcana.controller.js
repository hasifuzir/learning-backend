const httpStatus = require('http-status');

// Models
const personaTable = require('@models').personas;

/**
 * arcana
 * @public
 */

const findArcana = async (req) => {
  try {
    const { arcana } = req.params;

    const results = personaTable
      .findAll({
        where: {
          arcana
        }
      });

    if (!results) {
      throw new Error('No Persona found in Arcana');
    }

    return (results) || null;
  } catch (err) {
    throw err;
  }
};

exports.arcana = async (req, res, next) => {
  try {
    res.status(httpStatus.OK);

    return res.json({
      responseCode: httpStatus.OK,
      responseMessage: 'OK',
      response: await findArcana(req)
    });
  } catch (err) {
    res.status(httpStatus.BAD_REQUEST);

    return res.json({
      responseCode: httpStatus.BAD_REQUEST,
      responseMessage: err.name,
      response: err.errors
    });
  }
};
