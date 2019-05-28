const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const secreto = require('./secrets')
require('dotenv').config();

// const configureRoutes = require('../config/routes.js');

const server = express();

const db = require("../database/dbConfig")

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
})

async function addUserPerson (user) {
   let bob = await db('users').insert(user);

   return (`New Person Added: ${user.username}`)
}
// function token (person) {
//     const theGet = {
//         subject: person.id,
//         username: person.username
//     }
//     const options = {
//         expiresIn: "id",
//     }
//     return jwt.sign(theGet, secrets.jwtSectret, options)
// }
// // server.post('./login',( req, res) => {
// //     let username = req.body.username;
// //     let password = req.body.password;
// //     return db('users').where( {username:username}).first()
// //     .then(user =>)
// // })
// // configureRoutes(server);

module.exports = server;
