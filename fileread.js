/**
 * Created by payload on 10/22/2014.
 */
//asynchronus fileread
var fs = require("fs");
console.log("Starting to read!!");
fs.readFile("sample.txt", function(error, data){
   console.log("the content of the file is:" + data);
    console.log("Done reading the file")
});
console.log("Execute me without waiting please..!!");
