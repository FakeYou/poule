Meteor.methods({
	makeScorePrediction: function(matchId, homeScore, awayScore) {
		var user = Meteor.user();
		if(!user) {
			throw new Meteor.Error(401, 'Unauthorized', 'Unauthorized');
		}

		var prediction = {
			matchId: matchId,
			homeScore: homeScore,
			awayScore: awayScore
		};

		var context = app.schemas.prediction.newContext();
		var isValid = context.validate(prediction);

		if(!isValid) {
			var invalid = context.invalidKeys()[0];

			throw new Meteor.Error(400, invalid.message, invalid.message);
		}

		var match = app.collections.matches.findOne({ id: prediction.matchId });

		if(typeof match === 'undefined') {
			throw new Meteor.Error(404, 'Match not found', 'Match not found');
		}
		if(match.status !== 'pre-game' || match.startTime < new Date()) {
			throw new Meteor.Error(400, 'Predictions are closed', 'Predictions are closed');
		}

		var doc = { profile: { predictions: user.profile.predictions } };
		doc.profile.predictions[prediction.matchId] = prediction;

		app.collections.users.update({
			_id: user._id
		}, 
		{ 
			$set: doc
		});
	}
});