// console.log("PROCESS: ", process);

// import helper from './helpers.mjs';
import { sum } from "./helpers.mjs";

import { createServer } from "http"

const server = createServer((req, res)=>{
    res.end("Hello world from ES node");
})

server.listen('3000');

console.log('Server is running on port 3000')
// var let const

// const recommended

// if value will change over time then use 'let' otherwise use const

// const total = helper.sum(10, 200);
const total = sum(10, 200);

console.log("TOTAL: " + total);
