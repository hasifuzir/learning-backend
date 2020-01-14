const httpStatus = require('http-status');

// Models
const personaTable = require('@models/').personas;

/**
 * delete
 * @public
 */

const deletePersona = async (req) => {
  try {
    const { slug } = req.params;

    const data = await personaTable.destroy({
      where: { slug }
    });

    if (!data) {
      throw new Error('Persona not found');
    }

    return (data) ? 'Persona successfully deleted' : null;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

exports.delete = async (req, res, next) => {
  try {
    res.status(httpStatus.OK);

    return res.json({
      responseCode: httpStatus.OK,
      responseMessage: 'OK',
      response: await deletePersona(req)
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
