var http = require('http');
var pg = require('pg');
var query = require('./query_db');





	query('select * from messages', function (err, result) {
		if(err) {
			throw err;
		}
		console.log(result.rows);
		
		pg.end(); // the client will idle for another 30 seconds, temporarily preventing the app from closing, unless this function is called
	});

	app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

