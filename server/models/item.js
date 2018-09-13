let mongoose = require('mongoose')
let Schema = mongoose.Schema


let schema = new Schema({
  name: { type: String, required: true, unique: true },
  lenderId: { type: String, required: true },
  recipientId: { type: String, required: true },
  picture: { type: String, default: "https://i.imgur.com/zSb0HR7.png", required: true },
  description: { type: String, default: "item" },
  productionYear: { type: Number },
  created: { type: Number, required: true, default: Date.now() },
})

module.exports = mongoose.model('Item', schema)