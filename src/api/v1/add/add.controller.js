const httpStatus = require('http-status');

// Models
const personaTable = require('@models/').personas;

const createPersona = (req) => {
  const { slug, name, arcana, base_level } = req.body;

  return personaTable.create({
    slug,
    name,
    arcana,
    base_level
  })
    .catch((err) => {
      throw err;
    });
};

exports.add = async (req, res, next) => {
  try {
    await createPersona(req);

    res.status(httpStatus.OK);

    return res.json({
      responseCode: httpStatus.OK,
      responseMessage: 'OK',
      response: 'New persona successfully added'
    });
  } catch (err) {
    console.log('ERROR: Error is triggered in exports.add');
    res.status(httpStatus.OK);

    return res.json({
      responseCode: httpStatus.BAD_REQUEST,
      responseMessage: err.name,
      response: err.errors
    });
  }
};
