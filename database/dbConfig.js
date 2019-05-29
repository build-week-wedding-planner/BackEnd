const knex = require('knex');

const knexConfigy = require('../knexfile')

const dbEngine = process.env.NODE_ENV || 'development';

module.exports = knex(knexConfigy[dbEngine]);