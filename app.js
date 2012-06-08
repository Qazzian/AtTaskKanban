
/**
 * Module dependencies.
 */

var express = require('express'),
	socketio = require('socket.io'),
	routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set( 'views', __dirname + '/views' );
//  app.set('view engine', 'jade');
  app.set( 'view engine', 'mustache' );
  app.use( express.bodyParser() );
  app.use( express.methodOverride() );
  app.use( express.compiler({ src: __dirname + '/public', enable: ['less'] }) );
  app.use( app.router );
  app.use( express.static(__dirname + '/public') );
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

//app.get('/styles/*', routes.styles);
app.get('/', routes.index);

app.listen(3001);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

var sio = socketio.listen(app);
sio.sockets.on('connection', function(socket) {
	
	var hs = socket.handshake;
    console.log('A socket with seshID ' + hs.sessionID + ' has connected on connection');
 
	socket.on('version', function(){
		socket.emit('version', VERSION);
	});
	
    socket.on('disconnect', function() {
        console.log('A socket with seshID ' + hs.sessionID + ' has disconnected');
    });

	socket.on('test', function(){
		socket.emit('test', 'ok');
	})

});