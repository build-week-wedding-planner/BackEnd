const knex = require('knex');

const knexConfigy = require('../knexfile')

const dbEngine = process.env.DB || 'production';

module.exports = knex(knexConfigy[dbEngine]);