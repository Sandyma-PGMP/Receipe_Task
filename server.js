const express = require("express");
const cowsay = require("cowsay");
const cors = require("cors");
const dotenv = require("dotenv");
require('./databaseConfig/mongooseConnectionConfig');
dotenv.config();

// Import Resources
const ReceipesRoute = require("./routes/receipes.controller");


// 1. Define configs
const configs = {
    hostName: process.env.HOSTNAME,
    port: process.env.PORT
};

// 2. Create the server
const HTTP_SERVER = express();

// Enable middlewares
HTTP_SERVER.use(express.json());
HTTP_SERVER.use(cors());

// Inject Resources
HTTP_SERVER.use('/Receipes', ReceipesRoute)


// 3. Start and listen to server
try {
    HTTP_SERVER.listen(configs.port, configs.hostName, function () {
        console.log(cowsay.say({
            text : "Server started",
            e : "oO",
            T : "U "
        }))
    });
} catch (error) {
    console.log(cowsay.say({
        text : "Sorry issue starting the server",
        e : "oO",
        T : "U "
    }))
}

HTTP_SERVER.get("/", function (request, response) {
    return response.status(201).json({
        message: "Api is working"
    })
})