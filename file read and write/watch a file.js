/**
 * Created by payload on 10/27/2014.
 */

// watches the configuration file for changes and update the configuration file with the changes and repeat..
var fs = require("fs");
console.log("Started");
var config = JSON.parse(fs.readFileSync("package.json"));
console.log("Initial configuration:", config);

fs.watchFile("package.json", function(current, previous){
    console.log("change detected!!");
    config = JSON.parse(fs.readFileSync("package.json"));
    console.log("The new config file is: ", config)
});