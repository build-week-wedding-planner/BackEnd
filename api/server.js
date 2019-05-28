const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

require("dotenv").config();
// const configureRoutes = require('../config/routes.js');

const server = express();

const axios = require("axios");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// configureRoutes(server);
// server.get()
module.exports = server;
