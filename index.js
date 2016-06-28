var express = require ( 'express' )
var http = require('http');
var pg = require('pg');
var jade = require('jade');
var bodyParser = require ( 'body-parser' )
var app = express();
var query = require('./query_db');

app.use(bodyParser.urlencoded({ extended: true }));


app.set ( 'views', '.' )
app.set( 'view engine', 'jade' )

app.get ( '/', function ( request, response ) {
	

	
		
		query('select * from messages', function (err, result) {
			if (err) {
				done(client);
				return;
			} else {
				
				console.log(result.rows)
				response.render ( "./", { 
					messages : result.rows
				})
			}

		} )
	} );





app.get ( '/post', function ( request, response ) { 
	response.render ( "post", { 
	} )
} )

app.post ( '/post', function ( request, response ) {
	
	var data = {title: request.body.title, body: request.body.body};
	
		console.log(request.body)
		query('insert into messages (title, body) values ($1, $2)', [data.title, data.body], function (err) {
			

			
			pg.end();
		} );
		response.redirect ( '/' )
	} )


var server = app.listen ( 3000, function ( ) {
	console.log ( 'User App listening on port: ' + server.address ( ).port );
} )