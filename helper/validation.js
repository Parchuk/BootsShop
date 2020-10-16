// validation
const Joi = require('@hapi/joi');


// register validation 

const registerValidation = data => {
    const schema = Joi.object({
        username: Joi.string().min(3).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
        confirm_password: Joi.any().valid(Joi.ref('password')).required(),
        _csrf: Joi.string().required()
    });
    return schema.validate(data);
};

// login validation 

const loginValidation = data => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
        _csrf: Joi.string().required()
    });
    return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;