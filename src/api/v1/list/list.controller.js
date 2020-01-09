const httpStatus = require('http-status');
const fs = require('fs');

const file = 'public/json/persona.json';

const readFile = () => {
  try {
    const fileRead = JSON.parse(fs.readFileSync(file));

    const { persona } = fileRead;
    console.log(persona);
    return persona;
  } catch (err) {
    throw err;
  }
};

/**
 * list
 * @public
 */
exports.list = async (req, res, next) => {
  res.status(httpStatus.OK);
  return res.json({
    responseCode: httpStatus.OK,
    responseMessage: 'OK',
    response: readFile()
  });
};
