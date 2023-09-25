
const mongoose = require ("mongoose");


const connection = mongoose.connect("mongodb+srv://jaspreet:kjwh7460@cluster0.taibg.mongodb.net/?retryWrites=true&w=majority");


module.exports = {
    connection
}