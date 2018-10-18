const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
mongoose.connect('mongodb://localhost/mevn-database')
    .then(db => console.log('DB is Connected'))
    .catch(err => console.error(err))
//Settings
app.set('port', process.env.PORT || 3000)
//Middlewares
app.use(morgan('dev'))
//express.json before was apart package called body-parser
app.use(express.json())
//Routes
app.use('/api/tasks',require('./routes/tasks'))
//Static Files
app.use(express.static(__dirname + '/public'))
//Server is Listening
app.listen(app.get('port') ,()=> {
    console.log('Server on port 3000')
})
