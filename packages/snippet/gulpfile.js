const gulp = require('gulp');
const rev = require('gulp-rev');
const trim = require('gulp-trim');
const concat = require('gulp-concat');


gulp.task('preset-head', function () {
  return gulp
    .src([ './init.js', './env.js', './profile.js' ])
    .pipe(trim())
    .pipe(concat('preset-head.js'))
    .pipe(rev())
    .pipe(gulp.dest('./'));
});


gulp.task('default', gulp.series('preset-head'), () => {});
