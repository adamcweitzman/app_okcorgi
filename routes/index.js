var express = require('express');
var router = express.Router();
// var Dogs = require('../models/dog'); // get our mongoose model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dogsSchema = new Schema({
    name: String,
    picture: String,
    age: Number,
    occupation: String,
    neuter: Boolean
});




/* GET home page. */
var Dogs = mongoose.model('Dogs', dogsSchema);
router.get('/dogs', function(req, res) {
	console.log('got to this');
  Dogs.find({}, function(err, dogs) {
  	console.log(dogs);
    res.json(dogs);
  });
});   


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', dogs: [] });
});

/* POST when the user "likes" a new Corgi. */
router.post('/likes', function(req, res, next) {

});

module.exports = router;
