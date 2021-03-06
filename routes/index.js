var express = require('express');
var router = express.Router();
var Dog = require('../models/dog'); // get our mongoose model
var Kyle = require('../models/user');
var mongoose = require('mongoose');
var response = "";
var dog_response = "";




/* GET home page. */
router.get('/dogs', function(req, res) {
	console.log('got to this');
	var id_dog = [];
  Dog.find({}, function(err, dogs) {
  	console.log(dogs);
  	for (var i = 0; i < dogs.length; i++){
  		id_dog.push(dogs[i]['_id']);
  	}
    res.json(id_dog);
  });
}); 

router.get('/new', function(req, res, next) {
	res.render('new', {title: 'New Dog', dog_response: dog_response});
});

router.get('/', function(req, res, next) {
	Dog.count(function(err, count){
			if(err){
				var dog = null;
				res.redirect("/");
			}else{
				var i = Math.floor(Math.random()*count);
				Dog.find({},function(err, dog){
					Kyle.find({},function(err,kyle){
					res.render('index', { title: 'Ok Corgi', name: dog[i]['name'], picture: dog[i]['picture'], age: dog[i]['age'], occupation: dog[i]['occupation'], neuter: dog[i]['neuter'], dog_id: dog[i]['_id'], response: response, kyle: kyle, dog: dog });
				});
				});
				
			}
		});

});

router.get('/likely', function(req, res){
	var like = "";
	Kyle.find({}, function(err, kyle) {
		for(var i=0; i<kyle[0]['likes'].length; i++) {
			console.log(i + " " + kyle[0]['likes'][i]);
			if (kyle[0]['likes'][i] === kyle[0]['likes'][7]) {
				console.log("already pawed right on this dog");
				like = i;
			}
			console.log("should show");
		}
		if (like != "") {
			console.log("Dog already selected");
			res.json(kyle[0]['likes'][like]);
		} else {
			res.json(kyle[0]['likes']);
		}
	});
});

router.post('/no_like', function(req,res,next){
	response = req.body.not_like;
	res.redirect('/');
});

router.post('/new_dog', function(req,res,next){
	var name = req.body.name;
	var picture = req.body.picture;
	var occupation = req.body.occupation;
	var age = req.body.age;
	var neuter = req.body.neuter;
	Dog.find({}, function(err, dog){
		Dog.collection.insert({name: name, picture: picture, occupation: occupation, age: age, neuter: neuter});
		dog_response = "You successfully added a dog to the database!";
		res.redirect('/new');
	});

});
/* POST when the user "likes" a new Corgi. */
router.post('/', function(req, res, next) {
	var id = req.body.likes;
	var like = "";
	Kyle.find({}, function(err, kyle) {
		for(var i=0; i<kyle[0]['likes'].length; i++) {
			if (kyle[0]['likes'][i] == id) {
				like = i;
			}
		}
		if (like != "") {
			Dog.findOne({_id: id}, function(err, dog){
			response = "You already pawed right on "+dog['name'];
			res.redirect('/');
			})
			
		} else {
			response = "";
			var query = {"_id": '562290bee4b0f1d92b9d5fae'};
			var update = {$push: {likes: id}};
			var options = {new: true};
			Kyle.findOneAndUpdate(query, update, options, function(err, person) {
  		if (err) {
    	console.log('got an error');
  		}
			});
			res.redirect('/');
		}
	});
	
});

module.exports = router;
