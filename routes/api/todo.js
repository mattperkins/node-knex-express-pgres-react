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

router.post('/', function(req,res){
    console.log(req.body)
    // INSERT INTO tablename(column1, column2) VALUES(column1_value, column2_value);
    // SELECT * FROM table WHERE id = inserted_row;
    db.insert(req.body).returning('*').into('todo').then(function(data){
        res.send(data)
    })
    
    // res.send('response successful!')
})


module.exports = router
// localhost:3200/api/todo