const router = require('express').Router()
const isAuth=require('../Middlewares/AuthToken');

const {registerController,loginController} = require('../Controllers/AuthControllers')
const {validation}=require('../Middlewares/Validaition')

router.post('/register',validation,registerController);
router.post('/login',validation,loginController)


router.get('/current',isAuth,(request,response)=>{
    response.send({user:request.user})
})

module.exports = router

