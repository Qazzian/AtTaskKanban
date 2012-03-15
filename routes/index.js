var Mustache = require('mustache');


/*
 * GET home page.
 */

exports.index = function(req, res){
	console.log('Get index.html');
	try {
		res.render('index', {title: 'Qazzian.co.uk', layout: 'layout'});
	}
	catch (e) {
		console.log('ERROR: ' + e);
	}
};

//exports.styles = function(req, res){
//	console.log('Getting the compiled css');
//	try {
//		res.render('styles/common.less', {layout: false} );
//	}
//	catch (e) {
//		console.log('ERROR: ', e);
//	}
//}
/*
var compile_data = { 
	layout: false,
	attempts: [ '/Users/IanWallis/Sites/js/expressTest/views/styles/common.less' ],
	scope: {},
	parentView: undefined,
	root: '/Users/IanWallis/Sites/js/expressTest/views',
	defaultEngine: 'mustache',
	settings:  { 
		env: 'development',
		hints: true,
		views: '/Users/IanWallis/Sites/js/expressTest/views',
		'view engine': 'mustache' 
	},
	app: { 
		stack: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
		connections: 2,
		allowHalfOpen: true,
		_handle:  { 
			writeQueueSize: 0,
			onconnection: onconnection,
			socket: [Circular] 
		},
		_events: 
		{
			request: [Function],
			connection: connectionListener,
			listening: [Function] 
		},
		httpAllowHalfOpen: false,
		cache: false,
		settings: 
		{
			env: 'development',
			hints: true,
			views: '/Users/IanWallis/Sites/js/expressTest/views',
			'view engine': 'mustache'
		},
		redirects: {},
		isCallbacks: {},
		_locals: {
			settings: [Object], 
			app: [Circular]
		},
		dynamicViewHelpers: {},
		errorHandlers: [],
		route: '/',
		routes: 
		{
			app: [Circular],
			routes: [Object],
			params: {},
			_params: [],
			middleware: [Function]
		},
		router: [Getter],
		__usedRouter: true
	},
	partial: [Function],
	hint: true,
	filename: '/Users/IanWallis/Sites/js/expressTest/views/styles/common.less'
}

var render_data = {
	'0': {
		layout: [Function],
		attempts: [ '/Users/IanWallis/Sites/js/expressTest/views/styles/common.less' ],
		scope: {},
		parentView: undefined,
		root: '/Users/IanWallis/Sites/js/expressTest/views',
		defaultEngine: 'mustache',
		settings: 
		{
			env: 'development',
			hints: true,
			views: '/Users/IanWallis/Sites/js/expressTest/views',
			'view engine': 'mustache'
		},
		app: 
		{
			stack: [Object],
			connections: 2,
			allowHalfOpen: true,
			_handle: [Object],
			_events: [Object],
			httpAllowHalfOpen: false,
			cache: [Object],
			settings: [Object],
			redirects: {},
			isCallbacks: {},
			_locals: [Object],
			dynamicViewHelpers: {},
			errorHandlers: [],
			route: '/',
			routes: [Object],
			router: [Getter],
			__usedRouter: true
		},
		partial: [Function],
		hint: true,
		filename: '/Users/IanWallis/Sites/js/expressTest/views/styles/common.less'
	}
}

*/