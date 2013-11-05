define(['backbone', '$', 'underscore', 'model/AppState'], 
function(Backbone, $, _, AppState) {

	var Router = Backbone.Router.extend({
		routes: {
			'' : 'home',
			'home' : 'home',
			'students' : 'students',
			'grids' : 'grids'
		},
		/// Load home state
		home: function() {
			AppState.set('currentState', 'home');
		},

		/// Load students state
		students: function() {
			AppState.set('currentState', 'students');
		},


		grids: function() {
			AppState.set('currentState', 'grids');
		}
	});

	return new Router;
});