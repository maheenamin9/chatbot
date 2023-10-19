const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
  title: String,
  optionList: Array
})

const Message = mongoose.model('Message', messageSchema)

module.exports = Message