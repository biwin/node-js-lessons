/**
 * Created by payload on 10/25/2014.
 */

var fs = require("fs");
console.log('Starting to write to a file!!');
fs.writeFileSync("written_synchronously.txt", "hi there, we wrote the file synchronously.")
console.log("Finished with writing the file.")