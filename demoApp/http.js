var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(function (req,res) {
	if(req.url=="/"){
		res.writeHead(200,{"Content-Type":'text/html;charset=utf-8'})
		fs.readFile("./src/main.html",function (err,data) {
			res.end(data)
		})
	}else{
		res.writeHead(200,{"Content-Type":'text/'+req.url.split(".")[req.url.split(".").length-1]+';charset=utf-8'})
		fs.readFile("./src"+req.url,function (err,data) {
			res.end(data)
		})
	}
	console.log(req.url)
}).listen(8088)

console.log(8088)





