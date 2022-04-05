const jwt = require('jsonwebtoken')
const User = require('../models/UserModel')
const isAuth = async (request, response, next) => {
  try {
    const token = request.header('token')
    const verifyToken = await jwt.verify(token, process.env.KEY)
    if (!verifyToken) {
      return response
        .status(401)
        .json({ message: 'Veuillez vous authentifier pour avoir accès' })
    }

    const user = await User.findById(verifyToken.id)
    request.user = user
    next()
  } catch (error) {
    console.log(error)
  }
}
module.exports = isAuth
