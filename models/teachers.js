var db = require(__dirname + '/../config/mysql');

exports.find = db.query("SELECT * FROM user NATURAL JOIN teacher", function(err, rows) {
		if (err) return err;
		return rows;
	});
/*
exports.findOne = function(req, res, next) {
	db.query("SELECT * FROM teacher WHERE employeeId=?", [req.params.id], function(err, rows) {
		if (err) return next(err);
		if (rows.length === 0) {
			res.status(404).send('Teacher not found.');
		} else {
			res.send(rows[0]);
		}
	});
};

exports.insert = function(req, res, next) {
	db.query("INSERT INTO teacher(employeeId, unit, position) VALUES(?, ?, ?)", [req.body.employeeId, req.body.unit, req.body.position], function(err, rows) {
		if (err) return next(err);
		res.send(rows);
	});
};

exports.update = function(req, res, next) {
	db.query("UPDATE teacher SET ? WHERE employeeId=?", [req.body, req.params.id], function(err, rows) {
		if (err) return next(err);
		res.send(rows);
	});
};

exports.remove = function(req, res, next) {
	db.query("DELETE FROM teacher WHERE employeeId=?", [req.params.id], function(err, rows) {
		if (err) return next(err);
		res.send(rows);
	});
};
*/