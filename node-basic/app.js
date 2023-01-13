const fs = require('fs')

const fileName = 'target.txt';

const errHandler = (err) => console.log(err);
const dataHandler = (data) => {
    if(data)
        console.log(data.toString())
}

// Asyncronuous / non-blocking code
fs.watch(fileName, () => console.log(`file changed! ${fileName}`))
fs.readFile(fileName, (err, data) => {
    if(err) errHandler(err);
    else dataHandler(data);
    
})

console.log('node js async programming...?');