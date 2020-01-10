const httpStatus = require('http-status');

// Models
const personaTable = require('@models/').personas;

/**
 * delete
 * @public
 */

/*
const updatePersona = (req) => {
  const { slug } = req.params;
  const { name, arcana, base_level } = req.body;

  return personaTable
    .update({
      name,
      arcana,
      base_level
    }, {
      where: {
        slug
      }
    })
    .then((rows) => {
      if (!rows) {
        console.log('SOMETHING');
        console.log(rows);
        throw new Error('Persona not found');
      }
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
*/

const updatePersona = (req) => {
  const { slug } = req.params;
  const { name, arcana, base_level } = req.body;

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
            base_level
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
