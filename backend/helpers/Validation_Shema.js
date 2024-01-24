import joi from 'joi';


export const auth_Validation_Shema = joi.object({
    userName: joi.string().required(),
    email: joi.string().lowercase().required()
})