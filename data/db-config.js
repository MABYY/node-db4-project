const { config } = require('dotenv')
const knex = require('knex')
const configs = require('../knexfile.js')
const environment = process.env.NODE_ENV || 'development'
// we determine the environment in which we our machine will work

module.exports = knex(configs[environment]) 
// we make sure that knex gets called with the environment want to work with