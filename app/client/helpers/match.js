Template.match.events({
	'change input.teamScore': function scorePrediction(event) {
		var $target = $(event.target);
		var $match = $target.parents('match');
		var score = $target.val();
		var matchId = $match.data('id');

		if($target.hasClass('homeScore')) {
			var homeScore = parseInt(score, 10);
			var awayScore = parseInt($match.find('input.awayScore').val(), 10);
		}
		else {
			var awayScore = parseInt(score, 10);
			var homeScore = parseInt($match.find('input.homeScore').val(), 10);
		}

		console.log(homeScore, awayScore);
		
		if(!isNaN(homeScore) && !isNaN(awayScore)) {
			Meteor.apply('makeScorePrediction', [matchId, homeScore, awayScore], function(err) {
				console.log(err);
			});
		}
	}
});

Template.match.isInProgress = function() {
	return this.status === 'in-progress';
}

Template.match.isFinal = function() {
	return this.status === 'final';
}

Template.match.isPreGame = function() {
	return this.status === 'pre-game';
}

Template.match.getStartTime = function() {
	return moment(this.startTime).format('MMMM Do hh:mm a').toLowerCase();
}

Template.match.getCountryCode = function(country) {
	var country = country.toLowerCase();

	var flag = app.countries[country];

	if(typeof flag === 'undefined') {
		return false;
	}

	return flag;
}

Template.match.getPredictionHomeScore = function() {
	var user = Meteor.user();

	if(user.profile.predictions[this.id]) {
		return user.profile.predictions[this.id].homeScore;
	}
}

Template.match.getPredictionAwayScore = function() {
	var user = Meteor.user();

	if(user.profile.predictions[this.id]) {
		return user.profile.predictions[this.id].awayScore;
	}
}