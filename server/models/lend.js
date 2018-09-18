let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Lend'

let borrower = new Schema({
    userId: { type: ObjectId, ref: 'User', required: true },
    returned: { type: Boolean, required: true, default: false }
})

let lendr = new Schema({
    userId: { type: ObjectId, ref: 'User', required: true },
    lent: { type: Boolean, required: true, default: false }
})

let schema = new Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, default: "item" },
    created: { type: Number, required: true, default: Date.now() },
    dueDate: { type: String, required: true },
    lendr: lendr,
    borrower: borrower
})

module.exports = mongoose.model(schemaName, schema)