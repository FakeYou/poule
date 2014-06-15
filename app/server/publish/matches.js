Meteor.publish('matches', function() {
	var matches = app.collections.matches.find({}, { sort: { startTime: 1}});

	return matches;
})