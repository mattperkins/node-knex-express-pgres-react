const express = require('express')
const apiRoute = require('./routes/api')

const app = express()
// app.get('/', function(req,res){
//     res.send('Hello, World!')
// })

app.use('/api', apiRoute)

console.log('Server running on localhost:3200')
app.listen('3200')