Meteor.startup(function() {
	var users = [
		{
			username: 'fakeyou',
			password: 'banaan',
			profile: {
				displayName: 'FakeYou',
				predictions: {
					// Brazil - Croatia
					'57D95B6C-BA93-4F42-9B91-1C141EAFACC1': {
						matchId: '57D95B6C-BA93-4F42-9B91-1C141EAFACC1',
						homeScore: 2,
						awayScore: 0
					},
					// Mexico - Cameroon
					'29C18EF4-269B-48D1-8A50-992699A84AB0': {
						matchId: '29C18EF4-269B-48D1-8A50-992699A84AB0',
						homeScore: 1,
						awayScore: 1
					},
					// Spain - Netherlands
					'788D89F9-BFE5-476E-99C1-0FE3DD193991': {
						matchId: '788D89F9-BFE5-476E-99C1-0FE3DD193991',
						awayScore: 0,
						homeScore: 1
					},
					// Chile - Australia
					'16A93AF0-8321-47B9-8442-01ADC9296692': {
						matchId: '16A93AF0-8321-47B9-8442-01ADC9296692',
						homeScore: 2,
						awayScore: 0
					},
					// Colombia - Greece
					'7C7AA04A-9EA6-4BB3-9498-C4D940685A38': {
						matchId: '7C7AA04A-9EA6-4BB3-9498-C4D940685A38',
						homeScore: 1,
						awayScore: 1
					},
					// Uruguay - Costa Rica
					'5CE66431-86C1-4BDB-8D9E-A07C238AE4B9': {
						matchId: '5CE66431-86C1-4BDB-8D9E-A07C238AE4B9',
						homeScore: 0,
						awayScore: 2
					},
					// England - Italy
					'F07CB601-072A-4B11-91D7-DD36ABE6E98A': {
						matchId: 'F07CB601-072A-4B11-91D7-DD36ABE6E98A',
						homeScore: 3,
						awayScore: 1
					},
					// Cote d'Ivoire - Japan
					// 'C4E1CFFF-946E-47CB-89A3-DAA97C5E3598': {
					// 	matchId: 'C4E1CFFF-946E-47CB-89A3-DAA97C5E3598',
					// 	homeScore: 0
					// 	awayScore: 0
					// }
					// Switzerland - Ecuador
					'F89B7220-DB20-4CC3-A26B-0676CE5F461E': {
						matchId: 'F89B7220-DB20-4CC3-A26B-0676CE5F461E',
						homeScore: 0,
						awayScore: 1
					},
					// France - Honduras
					'75020E3C-01A0-4F1A-A3E2-50F505111791': {
						matchId: '75020E3C-01A0-4F1A-A3E2-50F505111791',
						homeScore: 2,
						awayScore: 0
					},
					// Argentina - Bosnia-Herzegovina
					'E0A7A4C5-DED8-4446-8916-03ED08737E42': {
						matchId: 'E0A7A4C5-DED8-4446-8916-03ED08737E42',
						homeScore: 3,
						awayScore: 1
					},
					// Germany - Porugal
					'D5F82486-6B5E-40F9-BD33-A7585AA6427D': {
						matchId: 'D5F82486-6B5E-40F9-BD33-A7585AA6427D',
						homeScore: 1,
						awayScore: 2
					},
					// Iran - Nigeria
					'5183DDED-2CD1-404C-AED9-77EE5CFE9A84': {
						matchId: '5183DDED-2CD1-404C-AED9-77EE5CFE9A84',
						homeScore: 0,
						awayScore: 2
					},
					// Ghana - United States
					'88E61B68-7A32-40E9-8F0A-1304CAD5ABE8': {
						matchId: '88E61B68-7A32-40E9-8F0A-1304CAD5ABE8',
						homeScore: 0,
						awayScore: 2
					}
				}
			}
		},
		{
			username: 'mauvm',
			password: 'banaan',
			profile: {
				displayName: 'mauvm',
				predictions: {
					// Brazil - Croatia
					'57D95B6C-BA93-4F42-9B91-1C141EAFACC1': {
						matchId: '57D95B6C-BA93-4F42-9B91-1C141EAFACC1',
						homeScore: 3,
						awayScore: 1
					},
					// Mexico - Cameroon
					'29C18EF4-269B-48D1-8A50-992699A84AB0': {
						matchId: '29C18EF4-269B-48D1-8A50-992699A84AB0',
						homeScore: 2,
						awayScore: 2
					},
					// Spain - Netherlands
					'788D89F9-BFE5-476E-99C1-0FE3DD193991': {
						matchId: '788D89F9-BFE5-476E-99C1-0FE3DD193991',
						awayScore: 3,
						homeScore: 2
					},
					// Chile - Australia
					'16A93AF0-8321-47B9-8442-01ADC9296692': {
						matchId: '16A93AF0-8321-47B9-8442-01ADC9296692',
						homeScore: 3,
						awayScore: 0
					},
					// Colombia - Greece
					'7C7AA04A-9EA6-4BB3-9498-C4D940685A38': {
						matchId: '7C7AA04A-9EA6-4BB3-9498-C4D940685A38',
						homeScore: 1,
						awayScore: 2
					},
					// Uruguay - Costa Rica
					'5CE66431-86C1-4BDB-8D9E-A07C238AE4B9': {
						matchId: '5CE66431-86C1-4BDB-8D9E-A07C238AE4B9',
						homeScore: 2,
						awayScore: 0
					},
					// England - Italy
					'F07CB601-072A-4B11-91D7-DD36ABE6E98A': {
						matchId: 'F07CB601-072A-4B11-91D7-DD36ABE6E98A',
						homeScore: 2,
						awayScore: 0
					},
					// Cote d'Ivoire - Japan
					'C4E1CFFF-946E-47CB-89A3-DAA97C5E3598': {
						matchId: 'C4E1CFFF-946E-47CB-89A3-DAA97C5E3598',
						homeScore: 1,
						awayScore: 2
					},
					// Switzerland - Ecuador
					'F89B7220-DB20-4CC3-A26B-0676CE5F461E': {
						matchId: 'F89B7220-DB20-4CC3-A26B-0676CE5F461E',
						homeScore: 2,
						awayScore: 0
					},
					// France - Honduras
					'75020E3C-01A0-4F1A-A3E2-50F505111791': {
						matchId: '75020E3C-01A0-4F1A-A3E2-50F505111791',
						homeScore: 3,
						awayScore: 0
					},
					// Argentina - Bosnia-Herzegovina
					'E0A7A4C5-DED8-4446-8916-03ED08737E42': {
						matchId: 'E0A7A4C5-DED8-4446-8916-03ED08737E42',
						homeScore: 2,
						awayScore: 0
					},
					// Germany - Porugal
					'D5F82486-6B5E-40F9-BD33-A7585AA6427D': {
						matchId: 'D5F82486-6B5E-40F9-BD33-A7585AA6427D',
						homeScore: 2,
						awayScore: 1
					},
					// Iran - Nigeria
					'5183DDED-2CD1-404C-AED9-77EE5CFE9A84': {
						matchId: '5183DDED-2CD1-404C-AED9-77EE5CFE9A84',
						homeScore: 0,
						awayScore: 1
					},
					// Ghana - United States
					// '88E61B68-7A32-40E9-8F0A-1304CAD5ABE8': {
					// 	matchId: '88E61B68-7A32-40E9-8F0A-1304CAD5ABE8',
					// 	homeScore: 0,
					// 	awayScore: 2
					// }
				}
			}
		},
		{
			username: 'sleave',
			password: 'banaan',
			profile: {
				displayName: 'Sleave',
				predictions: {
					// Brazil - Croatia
					'57D95B6C-BA93-4F42-9B91-1C141EAFACC1': {
						matchId: '57D95B6C-BA93-4F42-9B91-1C141EAFACC1',
						homeScore: 2,
						awayScore: 0
					},
					// Mexico - Cameroon
					'29C18EF4-269B-48D1-8A50-992699A84AB0': {
						matchId: '29C18EF4-269B-48D1-8A50-992699A84AB0',
						homeScore: 2,
						awayScore: 1
					},
					// Spain - Netherlands
					'788D89F9-BFE5-476E-99C1-0FE3DD193991': {
						matchId: '788D89F9-BFE5-476E-99C1-0FE3DD193991',
						awayScore: 2,
						homeScore: 2
					},
					// Chile - Australia
					'16A93AF0-8321-47B9-8442-01ADC9296692': {
						matchId: '16A93AF0-8321-47B9-8442-01ADC9296692',
						homeScore: 1,
						awayScore: 2
					},
					// Colombia - Greece
					'7C7AA04A-9EA6-4BB3-9498-C4D940685A38': {
						matchId: '7C7AA04A-9EA6-4BB3-9498-C4D940685A38',
						homeScore: 0,
						awayScore: 2
					},
					// Uruguay - Costa Rica
					'5CE66431-86C1-4BDB-8D9E-A07C238AE4B9': {
						matchId: '5CE66431-86C1-4BDB-8D9E-A07C238AE4B9',
						homeScore: 1,
						awayScore: 2
					},
					// England - Italy
					'F07CB601-072A-4B11-91D7-DD36ABE6E98A': {
						matchId: 'F07CB601-072A-4B11-91D7-DD36ABE6E98A',
						homeScore: 2,
						awayScore: 1
					},
					// Cote d'Ivoire - Japan
					'C4E1CFFF-946E-47CB-89A3-DAA97C5E3598': {
						matchId: 'C4E1CFFF-946E-47CB-89A3-DAA97C5E3598',
						homeScore: 2,
						awayScore: 0
					},
					// Switzerland - Ecuador
					'F89B7220-DB20-4CC3-A26B-0676CE5F461E': {
						matchId: 'F89B7220-DB20-4CC3-A26B-0676CE5F461E',
						homeScore: 1,
						awayScore: 1
					},
					// France - Honduras
					'75020E3C-01A0-4F1A-A3E2-50F505111791': {
						matchId: '75020E3C-01A0-4F1A-A3E2-50F505111791',
						homeScore: 1,
						awayScore: 0
					},
					// Argentina - Bosnia-Herzegovina
					'E0A7A4C5-DED8-4446-8916-03ED08737E42': {
						matchId: 'E0A7A4C5-DED8-4446-8916-03ED08737E42',
						homeScore: 2,
						awayScore: 1
					},
					// Germany - Porugal
					'D5F82486-6B5E-40F9-BD33-A7585AA6427D': {
						matchId: 'D5F82486-6B5E-40F9-BD33-A7585AA6427D',
						homeScore: 3,
						awayScore: 2
					},
					// Iran - Nigeria
					'5183DDED-2CD1-404C-AED9-77EE5CFE9A84': {
						matchId: '5183DDED-2CD1-404C-AED9-77EE5CFE9A84',
						homeScore: 1,
						awayScore: 2
					},
					// Ghana - United States
					// '88E61B68-7A32-40E9-8F0A-1304CAD5ABE8': {
					// 	matchId: '88E61B68-7A32-40E9-8F0A-1304CAD5ABE8',
					// 	homeScore: 0,
					// 	awayScore: 2
					// }
				}
			}
		},
		{
			username: 'yurihoogeweg',
			password: 'banaan',
			profile: {
				displayName: 'yurihoogeweg',
				predictions: {
					// Brazil - Croatia
					'57D95B6C-BA93-4F42-9B91-1C141EAFACC1': {
						matchId: '57D95B6C-BA93-4F42-9B91-1C141EAFACC1',
						homeScore: 4,
						awayScore: 0
					},
					// Mexico - Cameroon
					'29C18EF4-269B-48D1-8A50-992699A84AB0': {
						matchId: '29C18EF4-269B-48D1-8A50-992699A84AB0',
						homeScore: 2,
						awayScore: 1
					},
					// Spain - Netherlands
					'788D89F9-BFE5-476E-99C1-0FE3DD193991': {
						matchId: '788D89F9-BFE5-476E-99C1-0FE3DD193991',
						awayScore: 0,
						homeScore: 1
					},
					// Chile - Australia
					'16A93AF0-8321-47B9-8442-01ADC9296692': {
						matchId: '16A93AF0-8321-47B9-8442-01ADC9296692',
						homeScore: 2,
						awayScore: 2
					},
					// Colombia - Greece
					'7C7AA04A-9EA6-4BB3-9498-C4D940685A38': {
						matchId: '7C7AA04A-9EA6-4BB3-9498-C4D940685A38',
						homeScore: 0,
						awayScore: 1
					},
					// Uruguay - Costa Rica
					'5CE66431-86C1-4BDB-8D9E-A07C238AE4B9': {
						matchId: '5CE66431-86C1-4BDB-8D9E-A07C238AE4B9',
						homeScore: 2,
						awayScore: 0
					},
					// England - Italy
					'F07CB601-072A-4B11-91D7-DD36ABE6E98A': {
						matchId: 'F07CB601-072A-4B11-91D7-DD36ABE6E98A',
						homeScore: 2,
						awayScore: 1
					},
					// Cote d'Ivoire - Japan
					// 'C4E1CFFF-946E-47CB-89A3-DAA97C5E3598': {
					// 	matchId: 'C4E1CFFF-946E-47CB-89A3-DAA97C5E3598',
					// 	homeScore: 1
					// 	awayScore: 2
					// }
					// Switzerland - Ecuador
					'F89B7220-DB20-4CC3-A26B-0676CE5F461E': {
						matchId: 'F89B7220-DB20-4CC3-A26B-0676CE5F461E',
						homeScore: 2,
						awayScore: 1
					},
					// France - Honduras
					'75020E3C-01A0-4F1A-A3E2-50F505111791': {
						matchId: '75020E3C-01A0-4F1A-A3E2-50F505111791',
						homeScore: 2,
						awayScore: 0
					},
					// Argentina - Bosnia-Herzegovina
					'E0A7A4C5-DED8-4446-8916-03ED08737E42': {
						matchId: 'E0A7A4C5-DED8-4446-8916-03ED08737E42',
						homeScore: 3,
						awayScore: 1
					},
					// Germany - Porugal
					'D5F82486-6B5E-40F9-BD33-A7585AA6427D': {
						matchId: 'D5F82486-6B5E-40F9-BD33-A7585AA6427D',
						homeScore: 2,
						awayScore: 2
					},
					// Iran - Nigeria
					'5183DDED-2CD1-404C-AED9-77EE5CFE9A84': {
						matchId: '5183DDED-2CD1-404C-AED9-77EE5CFE9A84',
						homeScore: 1,
						awayScore: 1
					},
					// Ghana - United States
					// '88E61B68-7A32-40E9-8F0A-1304CAD5ABE8': {
					// 	matchId: '88E61B68-7A32-40E9-8F0A-1304CAD5ABE8',
					// 	homeScore: 0,
					// 	awayScore: 2
					// }
				}
			}
		},
		{
			username: 'tombroenink',
			password: 'banaan',
			profile: {
				displayName: 'TomBroenink',
				predictions: {
					// Brazil - Croatia
					'57D95B6C-BA93-4F42-9B91-1C141EAFACC1': {
						matchId: '57D95B6C-BA93-4F42-9B91-1C141EAFACC1',
						homeScore: 2,
						awayScore: 0
					},
					// Mexico - Cameroon
					'29C18EF4-269B-48D1-8A50-992699A84AB0': {
						matchId: '29C18EF4-269B-48D1-8A50-992699A84AB0',
						homeScore: 2,
						awayScore: 1
					},
					// Spain - Netherlands
					'788D89F9-BFE5-476E-99C1-0FE3DD193991': {
						matchId: '788D89F9-BFE5-476E-99C1-0FE3DD193991',
						awayScore: 1,
						homeScore: 1
					},
					// Chile - Australia
					'16A93AF0-8321-47B9-8442-01ADC9296692': {
						matchId: '16A93AF0-8321-47B9-8442-01ADC9296692',
						homeScore: 1,
						awayScore: 0
					},
					// Colombia - Greece
					// '7C7AA04A-9EA6-4BB3-9498-C4D940685A38': {
					// 	matchId: '7C7AA04A-9EA6-4BB3-9498-C4D940685A38',
					// 	homeScore: 1,
					// 	awayScore: 2
					// },
					// Uruguay - Costa Rica
					'5CE66431-86C1-4BDB-8D9E-A07C238AE4B9': {
						matchId: '5CE66431-86C1-4BDB-8D9E-A07C238AE4B9',
						homeScore: 2,
						awayScore: 0
					},
					// England - Italy
					// 'F07CB601-072A-4B11-91D7-DD36ABE6E98A': {
					// 	matchId: 'F07CB601-072A-4B11-91D7-DD36ABE6E98A',
					// 	homeScore: 2,
					// 	awayScore: 0
					// },
					// Cote d'Ivoire - Japan
					// 'C4E1CFFF-946E-47CB-89A3-DAA97C5E3598': {
					// 	matchId: 'C4E1CFFF-946E-47CB-89A3-DAA97C5E3598',
					// 	homeScore: 1
					// 	awayScore: 2
					// }
					// Switzerland - Ecuador
					// 'F89B7220-DB20-4CC3-A26B-0676CE5F461E': {
					// 	matchId: 'F89B7220-DB20-4CC3-A26B-0676CE5F461E',
					// 	homeScore: 2,
					// 	awayScore: 0
					// },
					// France - Honduras
					// '75020E3C-01A0-4F1A-A3E2-50F505111791': {
					// 	matchId: '75020E3C-01A0-4F1A-A3E2-50F505111791',
					// 	homeScore: 3,
					// 	awayScore: 0
					// },
					// Argentina - Bosnia-Herzegovina
					// 'E0A7A4C5-DED8-4446-8916-03ED08737E42': {
					// 	matchId: 'E0A7A4C5-DED8-4446-8916-03ED08737E42',
					// 	homeScore: 2,
					// 	awayScore: 0
					// },
					// Germany - Porugal
					'D5F82486-6B5E-40F9-BD33-A7585AA6427D': {
						matchId: 'D5F82486-6B5E-40F9-BD33-A7585AA6427D',
						homeScore: 1,
						awayScore: 2
					},
					// Iran - Nigeria
					'5183DDED-2CD1-404C-AED9-77EE5CFE9A84': {
						matchId: '5183DDED-2CD1-404C-AED9-77EE5CFE9A84',
						homeScore: 0,
						awayScore: 2
					},
					// Ghana - United States
					// '88E61B68-7A32-40E9-8F0A-1304CAD5ABE8': {
					// 	matchId: '88E61B68-7A32-40E9-8F0A-1304CAD5ABE8',
					// 	homeScore: 0,
					// 	awayScore: 2
					// }
				}
			}
		}
	];

	if(app.collections.users.find().fetch().length === 0) {
		for(var i = 0; i < users.length; i++) {
			var user = users[i];

			Accounts.createUser({
				username: user.username,
				password: user.password,
				profile: user.profile
			});
		}
	}
});