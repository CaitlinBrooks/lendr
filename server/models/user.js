let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'User'

//bcrypt uses hashing and salt to obfiscate your password 
let bcrypt = require('bcryptjs')
const SALT = 10


let schema = new Schema({
  name: { type: String, required: true, unique: true },
  //every email must be unique on the database
  username: {
    type: String, required: true, unique: true, default: function () {
      return this.name.toLowerCase()
    }
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created: { type: Number, required: true, default: Date.now() },
  picture: { type: String, default: "https://i.imgur.com/zSb0HR7.png", required: true },
  rating: { type: Array, default: [], required: true }
})


//THESE TWO METHODS CAN BE COPIED FOR ALL USER SCHEMA'S

//statics are used to create Model methods
schema.statics.generateHash = function (password) {
  return bcrypt.hashSync(password, SALT)
}

//schema.methods are used to add a method to a Model instance
schema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model(schemaName, schema)