var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require("gulp-watch");

gulp.task('sass', function () {
    return gulp.src('./scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
  });

  gulp.task("watch", function () {
    gulp.watch("./scss/*.scss", gulp.series("sass"));
  });

  gulp.task("default", gulp.series("sass", "watch"));