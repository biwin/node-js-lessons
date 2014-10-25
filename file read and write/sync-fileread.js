/**
 * Created by payload on 10/23/2014.
 */

var fs = require("fs");
console.log("Starting to read!");
var content = fs.readFileSync("sample.txt");
console.log("Contents are:" + content);
console.log("would be better if you execute me than waiting, but your wish interpreter..!!");
console.log("Well okay bye");