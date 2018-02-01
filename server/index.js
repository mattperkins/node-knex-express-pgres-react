const express = require('express')
const apiRoute = require('./routes/api')
const bodyParser = require('body-parser')

const app = express()

// app.get('/', function(req,res){
//     res.send('Hello, World!')
// })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('/api', apiRoute)


if(process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))

    const path = require('path')
    app.get('*', function(req,res){
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 3200
console.log('Server running on localhost ' + PORT)
app.listen(PORT)