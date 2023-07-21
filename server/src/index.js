const express = require('express');
require('dotenv').config()
const connection = require('./dbConnect/connection')
const Users = require('./models/users')
const cors = require('cors')
connection()
const app = express()
app.use(cors())
const port = process.env.PORT
app.use(express.json())


app.post('/register', async(req, res) => {
  await Users.create(req.body)
  res.json({
    msg: "you are successfully registered"
  })
})

app.get('/register', async(req, res) => {
  await Users.create(req.body)
  res.json({
    msg: "get req success"
  })
})




 app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })