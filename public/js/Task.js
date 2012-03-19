/* 
 * Task.js
 * 
 *  Model for Individual task objects 
 */


ATKb.Task = Backbone.Model.extend({
	defaults: {
		name: '',
		description: '',
		priority: null,
		assigned: [],
		estimate: null,
		timeTaken: 0,
		timeRemaining: 0,
		
	},
	url: ''
	
})

