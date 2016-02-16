// Require the sqlite3 library. 
// Use the 'verbose()'-flag to show stack traces while running queries.
var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');

// Set up and initialize the database
var db = new sqlite3.Database('./database.db');

// Insert some data using a statement
function insertValues(name, pair, callback) {
  var statement = db.prepare('INSERT INTO `my_table` (`name`, `pair`) ' +
  'VALUES (?, ?)');
  statement.run(name, pair, callback);
}

// Create a table if one doesn't exist already
// Callback will run on error or when finished
function createTable(callback) {
  db.run('CREATE TABLE IF NOT EXISTS `my_table` (' +
    '`id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,' +
    '`name` TEXT,' +
    '`pair` TEXT)', callback);
}

// This code isn't run, but demonstrates how to do a query with multiple results
function getAll(callback) {
  db.all('SELECT * from my_table', callback);
}
 
// Actually do stuff 
createTable(function(err) {
  if(err){
    console.log("Error when creating the table", err);
  } else {
    insertValues('Dan', 'Linda', function(err) {
      if(err) {
        console.log("Error inserting values", err);
      } 
    });
  }
});

exports.db = db;