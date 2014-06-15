app.schemas.match = new SimpleSchema({
	id: {
		type: String,
		label: 'api id'
	},
	startTime: {
		type: Date,
		label: 'Starttime'
	},
	status: {
		type: String,
		label: 'Status',
		allowedValues: [
			'pre-game',
			'in-progress',
			'final'
		]
	},
	currentGameMinute: {
		type: Number,
		label: 'Current game minute',
		optional: true
	},
	homeScore: {
		type: Number,
		label: 'Home score'
	},
	awayScore: {
		type: Number,
		label: 'Away score'
	},
	homeTeam: {
		type: String,
		label: 'Home team'
	},
	awayTeam: {
		type: String,
		label: 'Away team'
	}
});

app.collections.matches = new Meteor.Collection('matches', {
	schema: app.schemas.match
});