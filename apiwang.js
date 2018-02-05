'use strict';

function isNumberwang(req, res) {
	if (/^-?\d+\.?\d*$/.test(req.params.number)) {
		res.json({
			numberwang: true,
		});
	} else {
		res.json({
			numberwang: false
		});
	}
}

module.exports = isNumberwang;
