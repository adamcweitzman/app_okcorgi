var express = require('express');
var router = express.Router();
var Dog = require('../models/dog'); // get our mongoose model
var Kyle = require('../models/user');
var mongoose = require('mongoose');
var response = "";





/* GET home page. */
router.get('/dogs', function(req, res) {
	console.log('got to this');
  Dog.find({}, function(err, dogs) {
  	console.log(dogs);
    res.json(dogs);
  });
}); 

router.get('/', function(req, res, next) {
	Dog.count(function(err, count){
			if(err){
				var dog = null;
				res.redirect("/");
			}else{
				var i = Math.floor(Math.random()*count);
				Dog.find({},function(err, dog){
					res.render('index', { title: 'Express', name: dog[i]['name'], picture: dog[i]['picture'], age: dog[i]['age'], occupation: dog[i]['occupation'], neuter: dog[i]['neuter'], dog_id: dog[i]['_id'] });
				});
				
			}
		});

});

/* POST when the user "likes" a new Corgi. */
router.post('/', function(req, res, next) {
	var id = req.body.likes;
	var query = {"_id": '562290bee4b0f1d92b9d5fae'};
	var update = {$push: {likes: id}};
	var options = {new: true};
	Kyle.findOneAndUpdate(query, update, options, function(err, person) {
  if (err) {
    console.log('got an error');
  }
});
	res.redirect('/');
});

module.exports = router;
