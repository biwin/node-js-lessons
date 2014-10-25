/**
 * Created by payload on 10/25/2014.
 */
var fs = require("fs");
console.log("Starting here!! Synchronously!!");
var content = fs.readFileSync("package.json");
console.log("the contents are : " + content );
