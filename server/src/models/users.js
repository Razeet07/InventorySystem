const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: String, 
  phoneNumber: String,
  email: String,
  password:String,
  
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users