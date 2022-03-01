const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'pepe',
  database: 'opintorekisteri'
});
module.exports = connection;