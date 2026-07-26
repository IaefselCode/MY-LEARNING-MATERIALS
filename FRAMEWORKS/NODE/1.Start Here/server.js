//If i Just write node in the terminal, it will open the node.js REPL (Read Eval Print Loop)
//We can write javascript code in the REPL and it will execute it.
//We can also write javascript code in a file and run it using node filename.js
//We can also write javascript code in a file and run it using node filename.js
// console.log('Hello World');
// console.log(global); //global is the global object in node.js
// console.log(process); //process is the process object in node.js
// console.log(require); //require is the require function in node.js
// console.log(module); //module is the module object in node.js
// console.log(exports); //exports is the exports object in node.js
// console.log(__filename); //__filename is the filename of the current module
// console.log(__dirname); //__dirname is the directory name of the current module
// console.log(Buffer); //Buffer is the Buffer class in node.js
// console.log(console); //console is the console object in node.js
// console.log(process); //process is the process object in node.js


//Importing CommonJS modules
const http = require('http'); //http is the http module in node.js
const fs = require('fs'); //fs is the fs module in node.js
const path = require('path'); //path is the path module in node.js
const os = require('os'); //os is the os module in node.js
const url = require('url'); //url is the url module in node.js
const querystring = require('querystring'); //querystring is the querystring module in node.js
const crypto = require('crypto'); //crypto is the crypto module in node.js
const zlib = require('zlib'); //zlib is the zlib module in node.js
const stream = require('stream'); //stream is the stream module in node.js
const events = require('events'); //events is the events module in node.js

console.log(os.type()); //os.type() is the type of the operating system
console.log(os.platform()); //os.platform() is the platform of the operating system
console.log(os.arch()); //os.arch() is the architecture of the operating system
console.log(os.release()); //os.release() is the release of the operating system
console.log(os.version()); //os.version() is the version of the operating system
console.log(os.hostname()); //os.hostname() is the hostname of the operating system
console.log(os.homedir()); //os.homedir() is the home directory of the operating system
console.log(os.tmpdir()); //os.tmpdir() is the temporary directory of the operating system
console.log(os.totalmem()); //os.totalmem() is the total memory of the operating system
console.log(os.freemem()); //os.freemem() is the free memory of the operating system
// console.log(os.cpus()); //os.cpus() is the CPUs of the operating system

console.log(__dirname) //__dirname is the directory name of the current module
console.log(__filename) //__filename is the filename of the current module

console.log(path.dirname(__filename)); //path.dirname(__filename) is the directory name of the current module
console.log(path.basename(__filename)); //path.basename(__filename) is the basename of the current module
console.log(path.extname(__filename)); //path.extname(__filename) is the extension of the current module
console.log(path.parse(__filename)); //path.parse(__filename) is the parsed path of the current module
// console.log(path.join(__dirname, 'test.txt')); //path.join(__dirname, 'test.txt') is the joined path of the current module
// console.log(path.resolve(__dirname, 'test.txt')); //path.resolve(__dirname, 'test.txt') is the resolved path of the current module
// console.log(path.relative(__dirname, 'test.txt')); //path.relative(__dirname, 'test.txt') is the relative path of the current module
// console.log(path.resolve(__dirname, 'test.txt')); //path.resolve(__dirname, 'test.txt') is the resolved path of the current module
// console.log(path.resolve(__dirname, 'test.txt')); //path.resolve(__dirname, 'test.txt') is the resolved path of the current module


// We can Also Pull in Some packages that other developers have written and use them in our code.
// Or we can create our Own modules and use them in our code.
const math = require('./math'); //math is the module that is exported from the math.js file
console.log(math.add(1, 2)); //math.add(1, 2) is the add function in the math.js file
console.log(math.subtract(1, 2)); //math.subtract(1, 2) is the subtract function in the math.js file
console.log(math.multiply(1, 2)); //math.multiply(1, 2) is the multiply function in the math.js file
console.log(math.divide(1, 2)); //math.divide(1, 2) is the divide function in the math.js file

// we could also destructure the module.exports object
const { add, subtract, multiply, divide } = require('./math'); 
console.log(add(1, 2)); //add(1, 2) is the add function in the math.js file
console.log(subtract(1, 2)); //subtract(1, 2) is the subtract function in the math.js file
console.log(multiply(1, 2)); //multiply(1, 2) is the multiply function in the math.js file
console.log(divide(1, 2)); //divide(1, 2) is the divide function in the math.js file

































