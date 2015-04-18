var port = process.env.PORT || 5000;
var express = require ("express");
var database_url = process.env.DATABASE_URL;
var http = require ("http");
var app = express();
var pg = require('pg');
var fs = require ('fs');
/*app.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.send(result.rows); }
    });
  });

*/
app.get('/', function (request, response){
	fs.readFile('public/shadow.html','utf8',function (err,data){
		response.send(data);
	});

}); 

app.use(express.static(__dirname +'/public'));

app.listen(port);

var pg = require('pg');

