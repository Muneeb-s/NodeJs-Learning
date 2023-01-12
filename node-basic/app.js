
const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send("Hi there from express");
})

app.listen('3000');


