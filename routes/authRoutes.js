const router = require('express').Router()
const isAuth=require('../Middlewares/isAuth');

const {registerController,loginController} = require('../Controllers/AuthControllers')
const {validation}=require('../Middlewares/Validaition')

router.post('/register',validation,registerController);
router.post('/login',validation,loginController)


router.get('/current',isAuth,(request,response)=>{
    console.log("this is from current user",request.user)
    response.status(200).json({user:request.user})
})

module.exports = router

