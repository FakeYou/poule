calcPredictionPoints = function(matchId, homeScore, awayScore) {
	console.log('[calcPredictionPoints] matchId: ' + matchId);

	var users = app.collections.users.find().fetch();

	for(var i = 0; i < users.length; i++) {
		var user = users[i];
		var prediction = user.profile.predictions[matchId];
		var points = 0;

		if(typeof prediction === 'undefined') {
			continue;
		}

		var homeWinner = homeScore > awayScore;
		var awayWinner = homeScore < awayScore;
		var draw = homeScore == awayScore;

		var predictedHomeWinner = prediction.homeScore > prediction.awayScore;
		var predictedAwayWinner = prediction.homeScore < prediction.awayScore;
		var predictedDraw = prediction.homeScore == prediction.awayScore;

		// Predicted the right winner
		// points: 2
		if((homeWinner && predictedHomeWinner) || (awayWinner && predictedAwayWinner)) {
			points += 2;
		}

		// Predicted a draw
		// points: 2
		if(draw && predictedDraw) {
			points += 2;
		}

		// Predicted the amount of goals of any team (can be awarded multiple times)
		// points: 1
		if(homeScore == prediction.homeScore) {
			points += 1;
		}
		if(awayScore == prediction.awayScore) {
			points += 1;
		}

		// Predicted the amount of goals for both teams
		// points: 2
		if(homeScore == prediction.homeScore && awayScore == prediction.awayScore) {
			points += 2;
		}

		user.profile.predictions[matchId].points = points;

		app.collections.users.update({
			_id: user._id
		}, 
		{
			$set: {
				profile: user.profile
			}
		});
	}
}