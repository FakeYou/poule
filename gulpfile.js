var gulp = require('gulp');
var path = require('path');

var paths = {};
paths.app = 'app';
paths.client = path.join(paths.app, 'client');
paths.common = path.join(paths.app, 'common');
paths.public = path.join(paths.app, 'public');
paths.bower = path.join(paths.public, 'lib');
paths.server = path.join(paths.app, 'server');


gulp.task('flag-icon-css', function() {
	gulp.src([
		paths.bower + '/flag-icon-css/css/*.min.css',
	])
})