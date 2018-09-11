let mongoose = require('mongoose')
const connectionString = 'mongodb://lendr:lendr1@ds028559.mlab.com:28559/lendr'
let connection = mongoose.connection

mongoose.connect(connectionString, {
  useNewUrlParser: true
})

connection.on('error', err => {
  console.log("DATABASE ERROR: ", err)
})

connection.once('open', () => {
  console.log("Connected to Database")
})