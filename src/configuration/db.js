const mongoose = require('mongoose')
const DB_HOST = 'mongodb://localhost/mevn-database'

module.exports = {
  connect : () =>{
    mongoose.connect(DB_HOST)
    .then(db => {
      console.log('DB is Connected')
      return true
    })
    .catch(err => {
      console.error(err)
      return false
    })
  }
}
