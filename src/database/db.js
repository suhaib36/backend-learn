const mongoose = require("mongoose")

async function dbconnect() {

    await mongoose.connect("mongodb://suhaibishrat:suhaib36@ac-nudx5n8-shard-00-00.vdkwuls.mongodb.net:27017,ac-nudx5n8-shard-00-01.vdkwuls.mongodb.net:27017,ac-nudx5n8-shard-00-02.vdkwuls.mongodb.net:27017/backdb?ssl=true&replicaSet=atlas-i4ye0d-shard-0&authSource=admin&appName=backend-learn")
    
    
    console.log("database connected")
}

module.exports = dbconnect