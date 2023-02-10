//for easy import in controllers
const knexConfig = require('./knexfile')
module.exports = require('knex')(knexConfig[process.env.NODE_ENV])
// import knex from 'knex'
// module.exports = knex(knexConfig[process.env.NODE_ENV])
