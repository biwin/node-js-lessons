/**
 * Created by payload on 10/27/2014.
 */
var http = require("http");
console.log("Starting the server!");
var host = "127.0.0.2";
var port = 1337;
var server = http.createServer(function(request, response){
    console.log("received request:" + request.url);
    response.writeHead(200, {"Content-type":"text/plain"});
    response.end("Hello Dude!!");
});
server.listen(port, host, function(){
   console.log("Listening" + host + ":" + port);
});