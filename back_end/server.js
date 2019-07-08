const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 4000
const mongoose = require('mongoose')

const todoRoutes = require('./routes/todo')

app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true }) 
const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
})

app.use('/todos', todoRoutes)

app.listen(PORT, () => {
  console.log('server is running on port ', PORT)
})