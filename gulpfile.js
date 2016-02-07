var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./app/assets/components/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./app/assets/javascripts'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./app/assets/components/**/*.scss', ['sass']);
});

gulp.task('html', function() {
  return gulp.src('./app/assets/components/*/views/*.html')
    // .pipe(htmlmin({
    //   collapseWhitespace: true,
    //   customAttrAssign:[
    //     [ /\{\{*\s+\w+\}\}/, /\{\{\/if\}\}/ ]
    //   ]
    // }))
    .pipe(gulp.dest('./app/assets/javascripts'))
});

gulp.task('default', function() {

});
