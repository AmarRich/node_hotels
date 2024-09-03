const express = require('express')
const app = express()
const db = require('./db')
require('dotenv').config()
const PORT= process.env.PORT || 3000

const bodyParser = require('body-parser')
app.use(bodyParser.json())






app.get('/', function (req, res) {
  res.send('Welcome to my hotel, How can I help you !')
})





const personRoutes = require('./routes/personRoutes')
app.use('/person',personRoutes)

const menuItemRoutes = require('./routes/menuItemRoutes')
app.use('/menu',menuItemRoutes)



app.listen(PORT,()=> {console.log("Server is listening on 3000")})