const gulp = require('gulp');

gulp.task('copy-cname', function () {
  return gulp.src('./CNAME')
    .pipe(gulp.dest('./docs'));
});
