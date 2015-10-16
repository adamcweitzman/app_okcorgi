var express = require('express');
var router = express.Router();
var Dog = require('../models/dog'); // get our mongoose model
var mongoose = require('mongoose');





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
					res.render('index', { title: 'Express', name: dog[i]['name'], picture: dog[i]['picture'], age: dog[i]['age'], occupation: dog[i]['occupation'], neuter: dog[i]['neuter'] });
				});
				
			}
		});
});
//   res.render('index', { title: 'Express', dogs: [] });
// });

/* POST when the user "likes" a new Corgi. */
router.post('/likes', function(req, res, next) {

});

module.exports = router;
