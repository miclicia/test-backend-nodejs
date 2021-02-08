const express = require("express")
const app = express()

const dotenv = require("dotenv")
dotenv.config()

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/productapp',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('MongoDB conected')
    })
    .catch((error) => {
        console.log('Was not possible connect to MongoDB')
    })

const index = require("./routes/index")
const products = require("./routes/productRoute")

app.use(express.json());

app.use("/productapp", index, products);

module.exports = app