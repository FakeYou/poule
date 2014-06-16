app.schemas.prediction = new SimpleSchema({
	matchId: {
		type: String,
		label: 'Match id'
	},
	homeScore: {
		type: Number,
		label: 'Home team score',
		min: 0,
		max: 9
	},
	awayScore: {
		type: Number,
		label: 'Away team score',
		min: 0,
		max: 9
	},
	points: {
		type: Number,
		label: 'Points',
		optional: true
	}
});