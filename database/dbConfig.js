
const knex = require('knex');

const knexConfigy = require('../knexfile')

// remove the process.env, jest has issues testing env files
// tests work fine once dbEngine = 'development'
const dbEngine = process.env.NODE_ENV || 'development';

module.exports = knex(knexConfigy[dbEngine]);