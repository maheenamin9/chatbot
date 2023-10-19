const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

const messages = require('./routes/messages')

// middleware
app.use(express.json())
app.use(cors())

// routes
app.use('/api/messages', messages)

mongoose.connect('mongodb://localhost/chatbot')
  .then(() => console.log('Connected to mongodb'))
  .catch(() => console.log('Cannot connect to mongodb'))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening to port ${port}`))
