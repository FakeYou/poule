MatchesController = RouteController.extend({
	waitOn: function() {
		return Meteor.subscribe('matches');
	},

	data: function() {
		return {
			matches: app.collections.matches.find().fetch()
		}
	},

	action: function() {
		this.template = 'home';
		this.render();
	}
});