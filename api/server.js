const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

require('dotenv').config();

//const configureRoutes = require('../config/routes.js');

const server = express();

const db = null

const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

server.use(express.json());

server.get('/', (req,res) => {
    res.send("Avengers Assemble !!!")
} )

server.post('/register', (req, res) => {
    let userInfo = req.body;
    const hash = bcrypt.hashSync(userInfo.password, 12);
    userInfo.password = hash;

    addUserPerson(userInfo)
    .then( saved => {
        res.status(201).json(saved);
    })
    .catch( error => {
        res.status(501).json({message: 'Registration Error!!!'})
    })
    console.log(userInfo.password)
    console.log(userInfo.username)
})

async function addUserPerson (user) {
    let bob = await debug('users').insert(user);

    return (`New Person Added: ${user.username}`)
}

// configureRoutes(server);

module.exports = server;