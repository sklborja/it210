var express = require('express');
var router = express.Router();
var teacher = require(__dirname + '/../models/teachers');
var auth = require(__dirname + '/../config/auth');

/* GET users listing. */
router.get('/', auth, function(req, res, next) {
	var list = teacher.find;
	res.render('teachers', { results: list._results[0], title: 'Teachers' });
});

module.exports = router;
