const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host:'localhost',
  user: 'root',
  password: '1234',
  database: 'SpotifyClone',
});

module.exports = connection;