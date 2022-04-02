const router = require('express').Router()
const User = require('../models/UserModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const maxAge = 3 * 24 * 60 * 60 * 1000

const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  })
}

//REGISTER or signUp
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body
  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    })

    const searchedUser = await User.findOne({ email })
    if (searchedUser) {
      return res
        .status(400)
        .json({ errors: [{ msg: `the user ${username} already exists` }] })
    }
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
    console.log('success of registration')
  } catch (err) {
    console.log(`the user registration has failed`, err)
    response.status(200).sned({ err })
  }
})

//LOGIN or signIn
router.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    //check if the email and password exist
    const user = await User.findOne({ email: req.body.email })
    !user && res.status(404).json('user not found')

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(400).json('wrong password')

    //create token
    const token = createToken(user._id)
    res.cookie('jwt', token, { httpOnly: true, maxAge })
    res.status(200).json({ user: user })
  } catch (err) {
    console.log('error login', err)
    res.status(200).json({ err })
  }
})

//logout by removing cookie

router.get('/logout', async (req, res) => {
  console.log('the user is looged out')
  res.cookie('jwt', '', { maxAge: 1 })
  res.redirect('/')
})

module.exports = router
