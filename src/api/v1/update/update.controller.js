const httpStatus = require('http-status');

// Models
const personaTable = require('@models/').personas;

/**
 * delete
 * @public
 */

const updatePersona = (req) => {
  const { slug } = req.params;
  const { name, arcana } = req.body;
  const baseLevel = req.body.base_level;

  return personaTable
    .findOne({
      where: {
        slug
      }
    })
    .then((rows) => {
      if (rows) {
        personaTable
          .update({
            name,
            arcana,
            base_level: baseLevel
          }, {
            where: {
              slug
            }
          });
      } else {
        throw new Error('Persona not found!');
      }
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

exports.update = async (req, res, next) => {
  try {
    // console.log(req.params);
    await updatePersona(req);

    res.status(httpStatus.OK);

    return res.json({
      responseCode: httpStatus.OK,
      responseMessage: 'OK',
      response: 'Persona successfully updated'
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
