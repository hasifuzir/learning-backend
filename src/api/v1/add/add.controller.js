const httpStatus = require('http-status');

// Models
const personaTable = require('@models/').personas;

const createPersona = async (req) => {
  try {
    const { slug, name, arcana, baseLevel } = req.body;

    const results = await personaTable.create({
      slug,
      name,
      arcana,
      base_level: baseLevel
    });

    if (!results) {
      throw new Error('Unable to create new Persona');
    }

    return (results) ? 'New Persona successfully created' : null;
  } catch (err) {
    throw err;
  }
};

exports.add = async (req, res, next) => {
  try {
    res.status(httpStatus.CREATED);

    return res.json({
      responseCode: httpStatus.OK,
      responseMessage: 'OK',
      response: await createPersona(req)
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
