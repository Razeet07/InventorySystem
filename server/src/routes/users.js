const express=require('express')
const router=express.Router()
const UsersContoller =  require('../controller/users')  
// router.get('/checkUserExists/:phoneNumber', UsersContoller.checkIfUserExists)
router.post('/register', UsersContoller.registerUser )
router.post('/login', UsersContoller.loginUser )
module.exports=router;
