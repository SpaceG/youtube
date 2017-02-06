var http = require('http');
var fs = require('fs');


http.createServer(function(request, response) {
	    console.log('server request starting your App...');

	var url = request.url;
	switch(url) {
		case '/' :
			getStaticFileContent(response, 'public/index.html','text/html');
			break;
		case '/add':
			getStaticFileContent(response, 'public/add.html','text/html');
			break;
		case '/api-styles/css/yt-css-api.css':
			getStaticFileContent(response, 'api-styles/css/yt-css-api.css','text/css');
			break;
		case '/fancybox/jquery.fancybox.css':
			getStaticFileContent(response, 'fancybox/jquery.fancybox.css','text/css');
			break;
		case '/api-styles/js/yt-script-api.js':
			getStaticFileContent(response, 'api-styles/js/yt-script-api.js','text/javascript');
			break;
		case '/fancybox/jquery.fancybox.pack.js':
			getStaticFileContent(response, 'fancybox/jquery.fancybox.pack.js','text/javascript');
			break;
		default:

		response.writeHead(404, {'Content-Type':'text/plain'});
		response.end('404 - Page not Found');
}

}).listen(8000);
console.log('Hello World, this is a YouTube Api');
console.log('Server Running at localhost:8000');
        console.log("successfully connected to the database....");


function getStaticFileContent(response, filepath, contentType) {
	fs.readFile(filepath, function(error, data){
		if(error) {
			response.writeHead(500,{'Content-Type':'text/plain'});
			response.end('500 - Internal Server Error');
	}
	if(data) {
			response.writeHead(200, { 'Content-Type': contentType });
			response.end(data);
		}
			else {
					response.writeHead(200, { 'Content-Type': contentType });
					response.end(content, 'utf-8');
				}
	});
}


/**

var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

MongoClient.connect('mongodb://127.0.0.1:27017/YouTubeApi', function(err, db) {
    if(err) throw err;

    var collection = db.collection('test_DATA');
    collection.insert({ name: "Der Hacker", age: 109 }, function(err, docs) {
        collection.count(function(err, count) {
            console.log(format("count = %s", count));
        });
    });

    // Locate all the entries using find
    collection.find().toArray(function(err, results) {
        console.dir(results);
        // Let's close the db
        db.close();
    });
});

**/