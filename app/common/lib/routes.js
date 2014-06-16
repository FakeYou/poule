Router.map(function() {
	this.route('login', {
		path: '/login',
		controller: 'LoginController'
	});

	this.route('matches', {
		path: '/',
		controller: 'MatchesController'
	});
});

if(Meteor.isClient) {
	Router.onBeforeAction(function() {
		if(!Meteor.user()) {
			this.redirect('login');
		}
	}, { except: ['login'] });

	Router.onBeforeAction(function() {
		if(Meteor.user()) {
			this.redirect('/');
		}
	}, { only: ['login'] })
}