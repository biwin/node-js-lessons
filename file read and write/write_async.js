/**
 * Created by payload on 10/27/2014.
 */
var fs = require("fs");
console.log("Dude we are starting!!");
fs.writeFile("written_asynchronously.txt", function(error){
    console.log("written the file.!!")
});
console.log("finished!!");