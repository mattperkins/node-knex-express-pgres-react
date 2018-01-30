const express = require('express')
const router = express.Router()
const db = require('../../database')

router.get('/', function(req,res){
    // res.send('Hello, from api/todo via router!')
    // db.select().from('todo').toString()
    
    // select * from "todo"
    db.select().from('todo').orderBy('id').then(function(data){
        res.send(data)
    })
})

router.get('/:id', function(req,res){
    db('todo').where({id: req.params.id}).select().then(function(data){
        res.send(data)
    })
})

router.post('/', function(req,res){
    // console.log(req.body)
    
    // INSERT INTO tablename(column1, column2) VALUES(column1_value, column2_value);
    // SELECT * FROM table WHERE id = inserted_row;
    db.insert(req.body).returning('*').into('todo').then(function(data){
        res.send(data)
    })
    
    // res.send('response successful!')
})

router.patch('/:id', function(req,res){
    // console.log(req.params.id)
    // res.send('put successful')

    //  SELECT * from todo (table) WHERE id is specified id
    db('todo').where({ id: req.params.id }).update(req.body).returning ('*').then(function(data){
        res.send(data)
    })
})
// localhost:3200/api/todo/2

// the different between put and patch is "idempotence"
router.put('/:id', function(req,res){
    
    db('todo').where({ id: req.params.id }).update({
        title: req.body.title || null,
        is_done: req.body.is_done || null
    }).returning ('*').then(function(data){
        res.send(data)
    })
})

router.delete('/:id', function(req,res){
    db('todo').where({id: req.params.id}).del().then(function(){
        res.json({success:true})
    })
})

module.exports = router
// localhost:3200/api/todo