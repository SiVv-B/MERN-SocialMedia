const User = require('../models/UserModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerController = async (request, response) => {
  let user = request.body
  try {
    const searchedUser = await User.findOne({ email: user.email })
    if (searchedUser) {
      return response
        .status(400)
        .json({ errors: [{ msg: 'Ce client éxiste déjà' }] })
    }
    const hashedPasword = await bcrypt.hash(user.password, 10)
    const newUser = await new User({
      username: user.username,
      email: user.email,
      password: hashedPasword,
    })
    await newUser.save()
    //generate token for this user
    const token = jwt.sign(
      {
        username: newUser.username,
        email: newUser.email,
        password: hashedPasword,
        id: newUser._id,
      },
      process.env.KEY,
    )
console.log(`the user ${newUser.username} is registred`)
    response.status(200).json({ newUser, token })
  } catch (error) {
    console.log('from authcontroller', error)
    response
      .status(500)
      .json({
        errors: [
          {
            msg:
              'Création de compte a échoué(registerController a écouhé, from authcontroller)',
          },
        ],
      })
  }
}

const loginController = async (request, response) => {
  //request
  const user = request.body
  try {
    //search for user
    const searchedUser = await User.findOne({ email: user.email })
    if (!searchedUser) {
      return response
        .status(401)
        .json({
          errors: [
            { msg: 'Veuillez créer un compte pour pouvoir vous connecter' },
          ],
        })
    }
    //compare the password of the user request with the password saved on the databse (searchedUser)
    const result = await bcrypt.compare(user.password, searchedUser.password)
    if (!result) {
      return response
        .status(400)
        .json({ errors: [{ msg: 'Mot de pass incorrect' }] })
    }
    if (result == true) {
      const token = /* await */ jwt.sign(
        {
          username: searchedUser.username,
          email: searchedUser.email,
          id: searchedUser._id,
        },
        process.env.KEY,
      )
      console.log(`the user ${searchedUser.username} is online this is the token ${searchedUser.token}`)

      response.status(200).json({ searchedUser, token })
    }
  } catch (error) {
    console.log(error)
    response.status(500).json({ message: 'votre authentification a échoué' })
  }
}

module.exports = { registerController, loginController }
