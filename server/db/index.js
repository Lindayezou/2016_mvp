var sqlite = require('sqlite');


var connection = sqlite.createConnection({
  user: 'root',
  password: '',
  database: 'database'
});

connection.connect();

module.exports = connection;


