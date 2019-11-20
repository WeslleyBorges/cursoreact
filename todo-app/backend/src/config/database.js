const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const LOCALHOST_MONGO_URL_CONNECTION = 'mongodb://localhost:27017/todoapp'
const MONGOLAB_ENV_VAR = process.env.MONGOLAB_URI
const URL_CONNECTION = MONGOLAB_ENV_VAR ? MONGOLAB_ENV_VAR : LOCALHOST_MONGO_URL_CONNECTION

module.exports = mongoose.connect(URL_CONNECTION, { useMongoClient: true })