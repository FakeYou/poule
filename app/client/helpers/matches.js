Template.match.isInProgress = function() {
	return this.status == 'in-progress';
}

Template.match.isFinal = function() {
	return this.status == 'final';
}

Template.match.isPreGame = function() {
	return this.status == 'pre-game';
}

Template.match.getStartTime = function() {
	return moment(this.startTime).format('dd D MMMM hh:mm').toLowerCase();
}

Template.match.getCountryCode = function(country) {
	var country = country.toLowerCase();

	var flag = app.countries[country];

	if(typeof flag == 'undefined') {
		return false;
	}

	return flag;
}