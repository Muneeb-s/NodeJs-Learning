const express = require('express');
const morgan = require("morgan");

const app = express();

//bring in routes
const postRoutes = require('./routes/post')

// const myMiddleware = (req, res, next) => {
//     console.log("middleware applied")
//     next();
// }

//middlewares
// app.use(myMiddleware);
app.use(morgan("dev"));
app.use("/", postRoutes); // now using router as middleware

const port = 8080;

app.listen(port, () => {
    console.log(`A Node JS API is listening on port: ${port}`)
});
