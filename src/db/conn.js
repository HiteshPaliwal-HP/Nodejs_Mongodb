const mongoose = require("mongoose");

const url="mongodb+srv://hitesh:sarvan1234@cluster0.ebcim.mongodb.net/MongooseFDDB?retryWrites=true&w=majority"

exports.mongooseconnect =()=>{
    mongoose.connect(url)
    .then(
        ()=>{
            console.log("Connected using mongoose")
        }
    ),
    err=>{
        console.log(err);
    }
}