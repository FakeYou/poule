var gulp = require('gulp');
var git = require('gulp-git');

gulp.task('clone', function() {
  git.clone('https://github.com/openfootball/world-cup');
});

gulp.task('pull', function() {
  git.pull('origin', 'master', {
    cwd: 'resources/world-cup'
  });
});