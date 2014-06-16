app = {
	collections: {},
	schemas: {},
	countries: {
		'brazil'             : 'br',
		'croatia'            : 'hr',
		'chile'              : 'cl',
		'australia'          : 'au',
		'mexico'             : 'mx',
		'cameroon'           : 'cm',
		'spain'              : 'es',
		'netherlands'        : 'nl',
		'england'            : 'gb',
		'italy'              : 'it',
		'colombia'           : 'co',
		'greece'             : 'gr',
		'uruguay'            : 'uy',
		'costa rica'         : 'cr',
		'argentina'          : 'ar',
		'bosnia-herzegovina' : 'ba',
		'côte d\'ivoire'     : 'ci',
		'japan'              : 'jp',
		'switzerland'        : 'ch',
		'ecuador'            : 'ec',
		'france'             : 'fr',
		'honduras'           : 'hn',
		'ghana'              : 'gh',
		'united states'      : 'us',
		'germany'            : 'de',
		'portugal'           : 'pt',
		'iran'               : 'ir',
		'nigeria'            : 'ng',
		'russia'             : 'ru',
		'korea republic'     : 'kr',
		'belgium'            : 'be',
		'algeria'            : 'dz'
	}
};

app.collections.users = Meteor.users;

if(Meteor.isClient) {
	app.collections.predictions = new Meteor.Collection('predictions');
}