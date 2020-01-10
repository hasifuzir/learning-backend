const httpStatus = require('http-status');

// Models
const personaTable = require('@models/').personas;

/**
 * delete
 * @public
 */

const deletePersona = (req) => {
  const { slug } = req.params;

  return personaTable
    .destroy({
      where: {
        slug
      }
    })
    .then((rows) => {
      if (!rows) {
        throw new Error('Persona not found');
      }
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

exports.delete = async (req, res, next) => {
  try {
    // console.log(req.params);
    await deletePersona(req);

    res.status(httpStatus.OK);

    return res.json({
      responseCode: httpStatus.OK,
      responseMessage: 'OK',
      response: 'Persona successfully deleted'
    });
  } catch (err) {
    res.status(httpStatus.OK);

    return res.json({
      responseCode: httpStatus.BAD_REQUEST,
      responseMessage: err.message,
      response: err.message
    });
  }
};
