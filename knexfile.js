// // Update with your config settings.

// module.exports = {

//   development: {
//     client: 'sqlite3',
//     connection: {
//       filename: './database/weddingdata.sqlite3'
//     },

//     useNullAsDefault: true

//   }

// };

// Update with your config settings.
require('dotenv').config();

const localPg = {
  host: process.env.Host,
  database: process.env.Database,
  port: process.env.Port,
  user: process.env.User,
  password: process.env.Password || ''
};

//const dbConnection = process.env.DATABASE_URL || localPg;

const dbSettings = {
  client: 'pg',
  connection: localPg,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: './migrations',
    tableName: 'dbmigrations'
  },
  seeds: {
    directory: './seeds'
  }
};

const dbSettings2 = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: './migrations',
    tableName: 'dbmigrations'
  },
  seeds: {
    directory: './seeds'
  }
};

module.exports = {
  development: dbSettings,
  production: dbSettings2
};

