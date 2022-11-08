const mongoose = require("mongoose");

const URI = 'mongodb+srv://jaypatel:jaypatel@cluster0.sefhuzi.mongodb.net/test';

const connectDb = async() => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    console.log("Connection Successfull");
}

module.exports = connectDb;
