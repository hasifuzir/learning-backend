const httpStatus = require('http-status');
const fs = require('fs');

/**
 * add
 * @public
 */

const file = 'public/json/persona.json';

const addPersona = (persona) => {
  try {
    const fileRead = JSON.parse(fs.readFileSync(file));

    const personaList = fileRead;
    // console.log(personaList.persona);
    // console.log(typeof personaList.persona);
    let writeFlag = true;

    const newPersona = persona;

    personaList.persona.forEach((id) => {

      if (id.slug === newPersona.slug) {
        // throw new Error('Duplicate Persona!');
        writeFlag = false;
      }
    });

    if (writeFlag === true) {
      personaList.persona.push(newPersona);
    }

    const newFile = JSON.stringify(personaList);
    fs.writeFileSync(file, newFile, 'utf8');

    const returnMessage = writeFlag ? 'Successfully added new Persona!' : 'Duplicate Persona! Did you mean to update a Persona instead?';

    return returnMessage;
  } catch (err) {
    throw err;
  }
};

exports.add = async (req, res, next) => {
  res.status(httpStatus.OK);
  return res.json({
    responseCode: httpStatus.OK,
    responseMessage: 'OK',
    response: addPersona(req.body)
  });
};
