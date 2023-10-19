const express = require('express')
const router = express.Router()
const Message = require('../models/message')

router.get('/', async (req, res) => {
  const messages = await Message.find()
  res.send(messages)
})

router.get('/:id', async (req, res) => {
  try {
    const message = await Message.findById(req.params.id)
    res.status(200).send(message)
  } catch (error) {
    res.status(404).send('Message with given Id does not exist')
  }
})

module.exports = router