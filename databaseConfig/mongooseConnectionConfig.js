const mongoose = require('mongoose');
const cowsay = require("cowsay");
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((response) => {
    if(response) {
        console.log(cowsay.say({
                    text : "Connection to MongoDb Atlas is successful",
                    e : "oO",
                    T : "U "
                }))
    }
}).catch((err) => {
    console.log(err)
})