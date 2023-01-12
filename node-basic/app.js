// console.log("PROCESS: ", process);

const {sum} = require('./helpers.js');

const http = require('http'); // no need to give path they are automatically added

const server = http.createServer((req, res) => {
    res.end("Hello world from node server");
})

server.listen('3000');

const total = sum(10, 200);

console.log("TOTAL: " + total);
