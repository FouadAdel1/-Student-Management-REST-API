const {  validationResult } = require('express-validator');

module.exports.checkValidation = (req, res, next) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
            next();
    }else{
      const error= new Error(result.array().flatMap((error) => error.msg).join(', '));
      error.status = 422;
        next(error);
    }
}
