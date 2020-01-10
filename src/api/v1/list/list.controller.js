const httpStatus = require('http-status');

const personaTable = require('@models').personas;

exports.list = async (req, res, next) => {
  const allPersona = await personaTable.findAll();

  res.status(httpStatus.OK);
  return res.json({
    responseCode: httpStatus.OK,
    responseMessage: 'OK',
    response: allPersona
  });
};
