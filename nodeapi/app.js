const express = require('express');
const app = express();

const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

//db
mongoose.set('strictQuery', false); //added due to (node:11584) [MONGOOSE] DeprecationWarning:  Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => console.log(`DB Connection error ${err.message}`));

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

const port = process.env.PORT || 8080; // to use this dotenv is required

app.listen(port, () => {
    console.log(`A Node JS API is listening on port: ${port}`)
});
