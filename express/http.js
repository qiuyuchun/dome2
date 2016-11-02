
var http = require('http')
var fs= require('fs');

http.createServer(function(req,res){
	fs.readFile('index.html',function(err,data){
		res.end(data)
	})
}).listen(8089)
console.log(8089);