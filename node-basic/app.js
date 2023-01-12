
// const express = require('express');

// const app = express();

// app.get('/', (req, res)=>{
//     res.send("Hi there from express");
// })

// app.listen('3000');



const fs = require('fs')

const fileName = 'target.txt';

// Syncronous / blocking code
// const data = fs.readFileSync(fileName);
// console.log('data Sync: ', data.toString());


// Asyncronuous / non-blocking code
// fs.watch(fileName, () => console.log(`file changed! ${fileName}`))
// fs.readFile(fileName, (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('data: ', data.toString());
//     }
// })

console.log('node js async programming...?');