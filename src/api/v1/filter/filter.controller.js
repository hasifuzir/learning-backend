const httpStatus = require('http-status');

// Models
const personaTable = require('@models').personas;

/**
 * filter
 * @public
 */

const filterPersona = async (req) => {
  try {
    const { arcana, minBaseLevel } = req.query;

    const whereObject = {};

    if (arcana) {
      whereObject.arcana = arcana;
    }
    if (minBaseLevel) {
      whereObject.base_level = {
        gte: minBaseLevel
      };
    }

    const results = await personaTable.findAll({
      where: whereObject
    });

    if (!results) {
      throw new Error('No Persona matches found');
    }

    return (results) || null;
  } catch (err) {
    throw err;
  }
};

exports.filter = async (req, res, next) => {
  try {
    res.status(httpStatus.OK);

    return res.json({
      responseCode: httpStatus.OK,
      responseMessage: 'OK',
      response: await filterPersona(req)
    });
  } catch (err) {
    res.status(httpStatus.BAD_REQUEST);

    return res.json({
      responseCode: httpStatus.BAD_REQUEST,
      responseMessage: err.name,
      response: err.message
    });
  }
};
