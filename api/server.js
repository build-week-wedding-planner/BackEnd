const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

require('dotenv').config();

//const configureRoutes = require('../config/routes.js');

const server = express();

const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

server.use(express.json());

server.get('/', (req,res) => {
    res.send("Avengers Assemble !!!")
} )

// configureRoutes(server);

module.exports = server;