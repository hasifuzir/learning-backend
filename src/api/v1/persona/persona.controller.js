const httpStatus = require('http-status');

// Models
const personaTable = require('@models').personas;

const findPersona = async () => {
  try {
    const results = await personaTable.findAll();

    if (!results) {
      throw new Error('Persona not found');
    }

    return (results) || null;
  } catch (err) {
    throw err;
  }
};

exports.persona = async (req, res, next) => {
  try {
    res.status(httpStatus.OK);
    return res.json({
      responseCode: httpStatus.OK,
      responseMessage: 'OK',
      response: await findPersona()
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
