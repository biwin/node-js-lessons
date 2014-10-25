/**
 * Created by payload on 10/25/2014.
 */

var fs = require("fs");
console.log('Starting to write to a file!!');
fs.writeFileSync("written_synchronously", "hi there, we wrote the fiel synchronously.")
console.log("Finished with writing the file.")