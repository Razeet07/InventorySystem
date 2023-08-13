const Users = require('../models/users')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
 
const registerUser =  async(req, res) => {
  try{
    //STEP 1-- check if user already exists or not
    const data = await Users.findOne({phoneNumber:req.body.phoneNumber})
    if(data){
      res.json({
        msg: "PhoneNumber already exits",
        success: false

      })           
    }else{

      //STEP 2 --create a hash password of req.body.password
      req.body.password = await bcrypt.hash(req.body.password, saltRounds)
      //step 3 jwt token for user
      const token = jwt.sign({ phoneNumber:req.body.phoneNumber },process.env.SECRET_KEY);
      const data = await Users.create(req.body)
      if(data){

        const {password, ...otherFields} = data._doc
         res.json({
          msg: "you are successfully registered",
          success: true,
          token,
          userDetails: otherFields
        })
      }    
    
    }
  }
    catch(err){
      console.log(err)
    }
  }

  const loginUser =  async(req, res) => {
    try{
        const data = await Users.findOne({phoneNumber:req.body.phoneNumber})
        if(data){

          const isMatched =  await bcrypt.compare(req.body.password, data.password) 
          if(isMatched){

   

          const token = jwt.sign({ phoneNumber:req.body.phoneNumber },process.env.SECRET_KEY);
          res.json({
            token:token,
            success:true,
            userDetails:data
          })
        }else{
          res.json({
            success:false,
            msg:"Password didn't matched"
          })
        }
        
        }else{
          res.json({
            success:false,
            msg:"Invalid PhoneNumber and Password"
          })
        }   
    }
      catch(err){
        console.log(err)
      }
    }

module.exports={registerUser, loginUser};
