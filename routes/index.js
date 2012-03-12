var Mustache = require('mustache');


/*
 * GET home page.
 */

exports.index = function(req, res){
	try {
		res.render('index', { title: 'Qazzian.co.uk', layout: 'layout' });
//		res.render('index.jade', { title: 'Qazzian.co.uk' });
	}
	catch (e) {
		console.log('ERROR' + e);
	}
};