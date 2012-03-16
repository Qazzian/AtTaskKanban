
/*
 * GET home page.
 */

exports.index = function(req, res){
	console.log('Get index.html');
	try {
		res.render('index', {title: 'Express Template', page: req.params.page, layout: 'layout'});
	}
	catch (e) {
		console.log('ERROR: ' + e);
	}
};