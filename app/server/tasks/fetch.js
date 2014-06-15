var http = Npm.require('http');
var querystring = Npm.require('querystring');
var Future = Npm.require('fibers/future');

Meteor.startup(function() {
	Meteor.setInterval(updateMatches, 30 * 1000);
});

function updateMatches() {
	var api = 'http://worldcup.kimonolabs.com/api';

	var _teams = fetch(teamsUrl(api));
	var matches = fetch(matchesUrl(api));

	var teams = {};

	_.map(_teams, function(team) {
		teams[team.id] = team.name;
	});

	_.map(matches, function(match) {
		match.homeTeam = teams[match.homeTeamId];
		match.awayTeam = teams[match.awayTeamId];

		if(match.currentGameMinute == null) {
			delete match.currentGameMinute;
		}

		match.status = match.status.toLowerCase();
		match.startTime = moment(match.startTime).toDate();

		delete match.homeTeamId;
		delete match.awayTeamId;
	});

	for(var i = 0; i < matches.length; i++) {
		var match = matches[i];

		var doc = app.collections.matches.findOne({ id: match.id });

		if(doc) {
			app.collections.matches.update({ _id: doc._id }, { $set: match });
		}
		else {
			app.collections.matches.insert(match);
		}
	}
}

function matchesUrl(api) {
	var method = 'matches';
	var options = {
		apikey: '25741af4882aa3a66e71f12e5fdf170e',
		sort: 'startTime',
		fields: [
			'id',
			'startTime',
			'status',
			'currentGameMinute',
			'homeTeamId',
			'awayTeamId',
			'homeScore',
			'awayScore'
		].join(',')
	}

	return api + '/' + method + '?' + querystring.stringify(options);
}

function teamsUrl(api) {
	var method = 'teams';
	var options = {
		apikey: '25741af4882aa3a66e71f12e5fdf170e',
		sort: 'name',
		fields: [
			'id',
			'name'
		].join(',')
	}

	return api + '/' + method + '?' + querystring.stringify(options);
}

function fetch(url) {
	var future = new Future();

	http.get(url, function(res) {
		var body = '';

		res.on('data', function(chunk) {
			body += chunk;
		});

		res.on('end', function() {
			future.return(JSON.parse(body));
		});
	});	

	return future.wait();
}