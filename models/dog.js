// Dog model w/ Mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dogSchema = new Schema({
    name: String,
    picture: String,
    age: Number,
    occupation: String;
    neuter: Boolean
});

module.exports = mongoose.model('Dog', dogSchema);
