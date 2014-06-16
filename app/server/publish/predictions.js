Meteor.publish('predictions', function() {
	var self = this;

	var predictions = [];
	var users = app.collections.users.find({}, { sort: { username: 1 }}).fetch();

	var query = {
		$or: [
			{ status: 'in-progress' },
			{ status: 'final' }
		]
	};

	var handle = app.collections.matches.find(query).observeChanges({
		added: function(id, doc) {
			var predictions = [];

			for(var i = 0; i < users.length; i++) {
				var user = users[i];
				var prediction = user.profile.predictions[doc.id];

				if(typeof prediction !== 'undefined') {
					predictions.push({
						userId: user._id,
						username: user.profile.displayName,
						points: prediction.points,
						homeScore: prediction.homeScore,
						awayScore: prediction.awayScore
					});
				}
				else {
					predictions.push({
						userId: user._id,
						username: user.profile.displayName
					});
				}
			}

			self.added('predictions', doc.id, { predictions: predictions });
		}
	});

	self.ready();

	self.onStop(function() {
		handle.stop();
	});
});