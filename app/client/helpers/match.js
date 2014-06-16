Template.match.events({
	'change input.teamScore': function scorePrediction(event) {
		var $target = $(event.target);
		var $match = $target.parents('.match');
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
		
		if(!isNaN(homeScore) && !isNaN(awayScore)) {
			Meteor.apply('makeScorePrediction', [matchId, homeScore, awayScore], function(err) {
				console.error(err);
			});
		}
	}
});

Template.match.isInProgress = function() {
	return this.status === 'in-progress';
}

Template.match.isFinal = function(self) {
	if(!self) { 
		self = this; 
	}

	return self.status === 'final';
}

Template.match.isPreGame = function() {
	return this.status === 'pre-game';
}

Template.match.getUsername = function() {
	return Meteor.user().profile.displayName;
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

Template.match.getPredictions = function() {
	var match = app.collections.predictions.findOne({ _id: this.id });

	for(var i = 0; i < match.predictions.length; i++) {
		var prediction = match.predictions[i];

		if(prediction.userId === Meteor.userId()) {
			match.predictions.splice(i, 1);
		}
	}

	return match.predictions;
}

Template.match.getPredictionHomeScore = function() {
	var user = Meteor.user();

	if(user.profile.predictions[this.id]) {
		return user.profile.predictions[this.id].homeScore;
	}

	return;
}

Template.match.getPredictionAwayScore = function() {
	var user = Meteor.user();

	if(user.profile.predictions[this.id]) {
		return user.profile.predictions[this.id].awayScore;
	}

	return;
}

Template.match.getPredictionPoints = function() {
	var user = Meteor.user();

	if(user.profile.predictions[this.id]) {
		return user.profile.predictions[this.id].points;
	}
}

Template.match.madePrediction = function() {
	var user = Meteor.user();

	if(user.profile.predictions[this.id]) {
		return true;
	}

	return false;
}