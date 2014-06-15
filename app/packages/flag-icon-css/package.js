Package.describe({
  summary: "Simple wrapper for https://github.com/lipis/flag-icon-css"
});

Package.on_use(function (api, where) {
	var path = Npm.require('path');
	var fs = Npm.require('fs');

	var asset_path = path.join('flag-icon-css');

	api.add_files(path.join(asset_path, 'css', 'flag-icon.min.css'), 'client');

	process.chdir(path.join('packages', 'flag-icon-css'));

	var flags = fs.readdirSync(path.join('flag-icon-css', 'flags', '1x1'));
	for(var i = 0; i < flags.length; i++) {
		api.add_files(path.join('flag-icon-css', 'flags', '1x1', flags[i]), 'client');
	}

	var flags = fs.readdirSync(path.join('flag-icon-css', 'flags', '4x3'));
	for(var i = 0; i < flags.length; i++) {
		api.add_files(path.join('flag-icon-css', 'flags', '4x3', flags[i]), 'client');
	}
});

Package.on_test(function (api) {
});
