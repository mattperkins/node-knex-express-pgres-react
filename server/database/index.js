// const options = process.env.NODE_ENV === 'production ? 
// {
//     client: 'pg',
//     connection: process.env.DATABASE_URL, searchPath: ['public']
// } : { 
//     client: 'pg',
//     connection: {
//         host: 'localhost',
//         database: 'todo_db'
//     }
// }

// const knex = require('knex')(options)

// *** for development comment out above and comment in below ***

const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        database: 'todo_db'
    }
})



// leave this uncommented for dev and production
module.exports = knex