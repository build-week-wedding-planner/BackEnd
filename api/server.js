require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan')

const secreto = require('./secret');

//const configureRoutes = require('../config/routes.js');


const server = express();
var bodyParser = require('body-parser');

server.use(helmet()); // hides your tech stack from sniffers
server.use(express.json()); // built-in
server.use(morgan("dev")); // logging middleware for console
server.use(cors()); // allows domains/ports to connect to your server



const db = require('../database/dbConfig')

const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



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

//-----------------------------------------------

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

//-----------------------------------------------

server.get("/events", (req, res) => {

    console.log('starting to get events')
    blah()
    .then(event => {
      res.status(200).json(event);
    })
    .catch(err => {
      res.status(500).json({ error: "The event could not be retrieved." });
    });
});


function blah() {
    console.log('totes gonna find an event')
    return db('events').select('id','eventname','date', 'description', 'location', 'theme')
    
}


server.post('/addevent', (req, res) => {
    console.log('we gonna try to add an event')
    let post = req.body

    addPost(post)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(503).json({message: 'Something is wrong... somewhere...'});
        });
})
        



async function addPost (post) {
    console.log('before')
    const sally = await db('events').insert(post);
    console.log('after')
    return (
        `New Post ID: ${post.eventname} : Added :)`
        )
}


//-----------------------------------------------

module.exports = server;

