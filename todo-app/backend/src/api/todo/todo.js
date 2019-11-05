const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
  description: { type: String, required: "Plz, insira a description" },
  done: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, default: Date.now }
}, {
  versionKey: false
}, {
  collection: 'todo'
})

module.exports = restful.model('Todo', todoSchema, 'todo')