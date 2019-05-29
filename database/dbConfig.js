const knex = require('knex');

const knexConfigy = require('../knexfile')

const dbEngine = process.env.DB || 'development';

module.exports = knex(knexConfigy[dbEngine]);