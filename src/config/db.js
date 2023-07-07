

const mongoose = require("mongoose");


//connection 
async function connectMongodb(url) {
    return mongoose.connect(url)
        .then(() => console.log("mongodb connect.."))
        .catch((err) => console.log("mongo error", err));
}
module.exports = {
    connectMongodb,
}
