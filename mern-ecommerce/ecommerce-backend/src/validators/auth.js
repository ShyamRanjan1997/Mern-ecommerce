const { check, validationResult } = require('express-validator');

exports.validateSignUpRequest = [
    check('firstName').notEmpty().withMessage('firstName is required'),
    check('lastName').notEmpty().withMessage('lastName is required'),
    check('email').isEmail().withMessage('Valid email is required'),
    check('password').isLength({min:6}).withMessage('password must be 6 character long')
];

exports.validateSignInRequest = [
    check('email').isEmail().withMessage('Valid email is required'),
    check('password').isLength({min:6}).withMessage('password must be 6 character long')
];

exports.isRequestValidated = (req,res,next) => {
    const errors = validationResult(req);
    if(errors.array().length > 0){
        return res.status(400).json({
            error : errors.array()[0].msg
        });
    }
    next();
}