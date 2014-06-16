MatchesController = RouteController.extend({
	waitOn: function() {
		return [
			Meteor.subscribe('matches'),
			Meteor.subscribe('predictions')
		];
	},

	data: function() {
		return {
			matches: app.collections.matches.find().fetch()
		}
	},

	action: function() {
		this.template = 'matches';
		this.render();
	}
});