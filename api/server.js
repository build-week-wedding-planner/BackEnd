const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const secreto = require('./secret');

//const configureRoutes = require('../config/routes.js');




const server = express();

require('dotenv').config();

const db = require('../database/dbConfig')

const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

server.use(express.json());

// configureRoutes(server);

server.get('/', (req,res) => {
    res.send("Avengers Assemble !!!")
} )

//----------------------------------------------------

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
    });
    console.log(userInfo.username)
    console.log(userInfo.password)
    
});



async function addUserPerson (user) {
    const paul = await db('users').insert(user);

    return (`New Person Added: ${user.username}`)
}

//---------------------------------------------------

function token (person) {
    console.log('getting a token is starting')
    const payload = {
        subject: person.id,
        username: person.username,
    }
    const options = {
        expiresIn: '1d',
    }
    console.log('we got the token')

    return jwt.sign(payload, secreto.jwtSecret, options)
}

function searchy (x) {
    return db('users').where(x)
}

server.post('/login', (req, res) => {
    let usernamo = req.body.username;
    let passwordo = req.body.password;

    
    searchy({username : usernamo}).first()
    .then ( user => {
        if(bcrypt.compareSync(passwordo, user.password)) {
            let tokenThing = token(user)

            res.status(202).json({message: `Welcome ${user.username} !`,
            tokenThing,
            })
        }
        else {
            res.status(402).json({message: 'Invalid info given'})
        }
    })
    .catch( error => {
        res.status(501).json({message: 'soemthing is truly really really wrong with this...'})
    })
})


//---------------------------------------------

// just a test to see if users are actually logged in and authenticated
server.get('/test', authenticate2, (rec, rez) =>{
    usersRegis()
    .then(go => {
        rez.send(go)
    })
    .catch(err => {
        rez.send(err)
    })

})


function usersRegis () {
    return db('users').select('username', 'password')
}

function authenticate (req,res, next) {
    const token = localStorage.getItem('jwt');

    if (token) {
        jwt.verify(token, secreto.jwtSecret, (err, decoded) => {
            if (err) {return res.status(402).json(err)}
            else {
            req.decoded = decoded;
            //console.log(req.decoded)
            next();
            }
        })
    } else {
        return ( res.status(403).json({
            error: "No Token Provided, must be an authorized jwt token in local storage...",
        }))
    }
}


function authenticate2 (req, res, next) {
    const token = req.get('Authorization');

    if (token) {
        jwt.verify(token, secreto.jwtSecret, (err, decoded) => {
            if (err) {return res.status(402).json(err)}
            else {
            req.decoded = decoded;
            //console.log(req.decoded)
            next();
            }
        })
    } else {
        return ( res.status(403).json({
            error: "No Token Provided, must be in Authorization header on request",
        }))
    }
}

module.exports = server;

