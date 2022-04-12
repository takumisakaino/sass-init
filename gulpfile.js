var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function task() {
  return gulp
    .src('./src/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css/'));
}

exports.default = task;