var express = require('express');
var router = express.Router();
var mysql = require("mysql");

var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'mahbut17',
      database: 'test',
      port: 3306
    });

// If there is an error connecting to the database
connection.connect(function(err) {
  // connected! (unless `err` is set)
  if (err) {
    console.log(err);
  }
});


var ids = []; // this array will contain the result of our db query

// Doing the database query
var query = connection.query('SELECT m.id FROM main m',function(err,rows){
  if(err) throw err;
  console.log('Data received from Db:\n');
  for (var i = 0; i < rows.length; i++) {
    ids.push(rows[i].id);
  };
});

// setting the query listeners
/*query
    .on('error', function(err) {
      // Handle error, and 'end' event will be emitted after this as well
      console.log(err);
    })
    .on('result', function(user) {
      // it fills our array looping on each user row inside the db
      ids.push(user);
    });*/


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: ids[0]});
});

module.exports = router;
