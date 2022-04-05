const { body, validationResult } = require("express-validator")
const registrationValidation = [
  body("username",'Vous devez écrire le nom avec le quel vous vous êtes authentifié').isString(),
  body("email").isEmail(),
  body("password","Vous devez mettre au moins 6 caractères").isLength({ min: 6 })
]
const loginValudation=[
    body("email").isEmail(),
    body("password","Vous devez mettre au moins 6 caractères").isLength({ min: 6 })
  ]
const validation=async(request,response,next)=>{
    const errors = validationResult(request)
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() })
    }
    next()
}

module.exports={registrationValidation,validation,loginValudation}
