/**
 * Created by payload on 10/27/2014.
 */
var http = require("http");
var fs = require("fs");
console.log("Starting the server!");
var config = JSON.parse(fs.readFileSync("config.json"))
var host = config.host;
var port = config.port;
var server = http.createServer(function(request, response){
    console.log("received request:" + request.url);

    fs.readFile("./public" + request.url, function(error, data){
       if (error){
           response.writeHead(404, {"Content-type":"text/plain"});
           response.end("Page not found dude!");
       } else {
           response.writeHead(200, {"Content-type":"text/html"});
            response.end(data);
       }
    });

});
server.listen(port, host, function(){
   console.log("Listening" + host + ":" + port);
});