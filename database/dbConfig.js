const knex = require('knex');

const knexConfigy = require('../knexfile')

module.exports = knex(knexConfigy.development)