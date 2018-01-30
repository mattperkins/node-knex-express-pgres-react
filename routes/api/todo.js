const express = require('express')
const router = express.Router()
const db = require('../../database')

router.get('/', function(req,res){
    // res.send('Hello, from api/todo via router!')
    // db.select().from('todo').toString()
    // select * from "todo"
    db.select().from('todo').then(function(data){
        res.send(data)
    })
    
})


module.exports = router
// localhost:3200/api/todo