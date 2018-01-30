const express = require('express')

const app = express()

app.get('/', function(req,res){
    res.send('Hello, World!')
})
console.log('Server running on localhost:3200')
app.listen('3200')