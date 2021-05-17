const verifyEmptyFields = require('../utils/verifyEmptyFields');
const verifyNumber = require('../utils/verifyNumber');


function fieldsMiddleware(req, res, next) {
  const fields = [
    { fieldName: 'value1', value: req.body.value1 },
    { fieldName: 'value2', value: req.body.value2 },
  ];

  const emptyFields = verifyEmptyFields(fields);
  const numberFields = verifyNumber(fields);

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ Response: `os campos ${emptyFields} não podem ser vázios` });
  }
  if (numberFields.length > 0) {
    return res
      .status(400)
      .json({ Response: `os campos ${numberFields} só podem ser numericos e inteiros` });
  }
  next();
}

module.exports = fieldsMiddleware;