var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function task() {
  return gulp
    .src('./src/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css/'));
}

function watch() {
  task();
  return gulp.watch('./src/sass/**/*.scss', function() {
    return task();
  });
}

exports.default = task;
exports.watch = watch;
