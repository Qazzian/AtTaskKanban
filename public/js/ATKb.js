/* 
 * ATKb.js
 * 
 * Generic site wide function and namespace generator
 */

ATKb = {
	
	socket: io && io.socket || null,
	
	/*
	 * Override of the default Backbone.Sync function.
	 * Uses socket.io to communicate with the server.
	 */
	Sync: function(method, model, options){
		
	}
	
	
};


