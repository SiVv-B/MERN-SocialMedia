const jwt = require('jsonwebtoken')
const User = require('../models/UserModel')
const isAuth = async (request, response, next) => {
  try {
    const token = request.header('token')
    const verifyToken = /* await */ jwt.verify(token, process.env.KEY)
    if (!verifyToken) {
      return response
      .status(401)
      .json({ message: '(no token) Veuillez vous authentifier pour avoir accès' })
    }
    
    const user = await User.findById(verifyToken.id)
    const decodedToken= jwt.decode(token)
    request.user = user
    console.log(decodedToken.id)
    next()
  } catch (error) {
    console.log(error)
    response.status(500).json(error)
  }
}
module.exports = isAuth
