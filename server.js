const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require("cors")
const authRoute=require("./routes/authRoutes")
const userRoute = require('./routes/userRoutes')
const postRoute = require('./routes/postRoutes')
const isAuth = require('./Middlewares/isAuth')
const checkUser = require ("./Middlewares/isAuth")

dotenv.config()
const app = express()
//what cors will authorize to access to the requests once we are in frontend :D :
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}
app.use(cors(corsOptions));


/* const authRoute = require('./routes/authRoutes')
 */




mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connected to MongoDB')
  },
)

app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

//routes
app.use("/api/auth", authRoute)
app.use('/api/users', userRoute) 
app.use('/api/posts', postRoute)

//JWT

app.get('/jwtid', isAuth, (req, res) => {
  res.status(200).send(res.locals.user._id)
});

app.listen(8800, () => {
  console.log('Backend server is running!')
})
