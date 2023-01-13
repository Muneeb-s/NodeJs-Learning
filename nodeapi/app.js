const express = require('express');
const morgan = require("morgan");

const app = express();

//bring in routes

const {getPosts} = require('./routes/post')

// const myMiddleware = (req, res, next) => {
//     console.log("middleware applied")
//     next();
// }



//middlewares

app.use(morgan("dev"));
// app.use(myMiddleware);

app.get("/", getPosts);

const port = 8080;

app.listen(port, () => {
    console.log(`A Node JS API is listening on port: ${port}`)
});
