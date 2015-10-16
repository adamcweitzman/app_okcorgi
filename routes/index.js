var express = require('express');
var router = express.Router();
var Dog = require('../models/dog'); // get our mongoose model
var Kyle = require('../models/user');
var mongoose = require('mongoose');





/* GET home page. */
router.get('/dogs', function(req, res) {
	console.log('got to this');
  Dog.find({}, function(err, dogs) {
  	console.log(dogs);
    res.json(dogs);
  });
}); 

router.get('/kyle', function(req, res){
	Kyle.find({}, function(err, kyles){
		console.log(kyles);
		res.json(kyles);
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
//   res.render('index', { title: 'Express', dogs: [] });
// });
var kyle_array = [];
/* POST when the user "likes" a new Corgi. */
router.post('/', function(req, res, next) {
	var id = req.body.likes;
	Kyle.find({}, function(err, kyles){
		kyles[0]['likes'].push(id);
		Kyle.collection.insert({likes: kyles[0]['likes']});
	});
	
	// // // USE MONGOOSE TO SAVE A NEW COMPLIMENT TO THE DATABASE, THEN REDIRECT TO THE ROOT URL
	res.redirect('/');
});




router.get('/likes', function(req, res) {
	Kyle.find({}, function(err, kyles){
		console.log(kyles[0]['likes']);
		kyles[0]['likes'].push('562036aae4b07cd9dd2d22f9');
		console.log(kyles[0]['likes']);
		res.json(kyles);
	});
});

module.exports = router;
