const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        database: 'todo_db'
    }
})

modeule.exports = knex