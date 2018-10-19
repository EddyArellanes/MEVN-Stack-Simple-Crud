const express = require('express')
const app = express()
const morgan = require('morgan')
const db = require('./configuration/db')
//Settings
app.set('port', process.env.PORT || 8000)
db.connect()

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
    console.log('Server on port 8000')
})
