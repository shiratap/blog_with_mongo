const router = require('express').Router();
const path = require('path');

const database = require('../database')();

router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});

router.get('/post/:id', (req, res) => {
	// mongo.connect(url, function (err, db) {
	// 	var dbo = db.db('blog_with_mongodb');
	// 	if (err) throw err;
	// 	dbo.collection('blogs').insertOne(req.body, function (err, res) {
	// 		if (err) throw err;
	// 		console.log('1 document inserted');
	// 	});
	// 	db.close();
	// });
	// res.send();
});

router.post('/newPost', (req, res) => {
	database.then((db) => {
		db.collection('blogs').insertOne(req.body, function (err, res) {
			if (err) throw err;
			console.log('1 document inserted');
		});
	});

	res.send('received your object');
});

module.exports = router;
