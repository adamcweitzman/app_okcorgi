// User model w/ Mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var kyleSchema = new Schema({
    name: String,
    likes: Array
});

module.exports = mongoose.model('Kyle', kyleSchema);
