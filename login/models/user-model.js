const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password :String
});

const userSchema2 = new mongoose.Schema({
    subject : String,
    question: String,
    opt1 : String,
    opt2: String,
    opt3 : String,
    opt4:String,
    answer:Number
});

const userSchema3 = new mongoose.Schema({
    name: String,
    score:Number,
    subject:String
});

const userModel = mongoose.model("user", userSchema);

const userModel2 = mongoose.model("questions", userSchema2);

const userModel3 = mongoose.model("scoreboard", userSchema3);
module.exports={
    userModel ,
    userModel2 ,
    userModel3
};