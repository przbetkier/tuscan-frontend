const gulp = require('gulp');
const rename = require('gulp-rename');

const DIST_TARGET = './dist/tuscan-frontend'

gulp.task('copy-cname', function () {
  return gulp.src('./CNAME')
    .pipe(gulp.dest(DIST_TARGET));
});

gulp.task('default-404', function () {
  return gulp.src(`${DIST_TARGET}/index.html`)
    .pipe(rename('404.html'))
    .pipe(gulp.dest(DIST_TARGET));
});
