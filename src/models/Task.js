//To model data
const mongoose = require('mongoose')
const { Schema } = mongoose
const Task = new Schema({
    title: String,
    description: String,
    price: Number
})

module.exports = mongoose.model('Task', Task)