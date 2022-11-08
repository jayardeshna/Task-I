const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDb = require("./DB/conn");

dotenv.config();

connectDb();

app.use(express.json());

app.use(require('./Route/route'));

app.listen(process.env.PORT,()=>{
    console.log(`App is running on ${process.env.PORT}`);
});


