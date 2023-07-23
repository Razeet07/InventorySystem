const express=require('express')
const router=express.Router()
const Users = require('../models/users')
const UsersContoller =  require('../controller/users')  
router.get('/checkUserExists/:phoneNumber', UsersContoller.checkIfUserExists)
router.post('/register', UsersContoller.registerUser )
module.exports=router;
