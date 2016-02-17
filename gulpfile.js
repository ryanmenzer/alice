var gulp = require('gulp');
// var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var runSequence = require('run-sequence');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');

var defaultAssets = {
  components:{
    sass:[
      './app/assets/components/**/styles/*.scss'
    ],
    views:[
      './app/assets/components/**/views/*.html'
    ],
    ts:[
      './app/assets/components/*.ts',
      './app/assets/components/**/*.ts'
    ]
  }
};

// Set NODE_ENV to 'development'
gulp.task('env:dev', function () {
	process.env.NODE_ENV = 'development';
});

gulp.task('sass', function () {
  gulp.src(defaultAssets.components.sass)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename(function (path) {
      path.dirname = path.dirname.replace('styles', '');
    }))
    .pipe(gulp.dest('./app/assets/stylesheets'));
});

gulp.task('html', function() {
  return gulp.src(defaultAssets.components.views)
  .pipe(rename(function (path) {
    path.dirname = path.dirname.replace('/views', '');
  }))

    // .pipe(htmlmin({
    //   collapseWhitespace: true,
    //   customAttrAssign:[
    //     [ /\{\{*\s+\w+\}\}/, /\{\{\/if\}\}/ ]
    //   ]
    // }))
    .pipe(gulp.dest('./app/views/angular'))
});

// Typescript task
gulp.task('tsc', function () {
  var tsProject = ts.createProject('tsconfig.json');
  var tsResult = tsProject.src() // instead of gulp.src(...)
  .pipe(ts(tsProject));

  return tsResult.js.pipe(gulp.dest('./app/assets/javascripts'));

	// gulp.src(defaultAssets.client.ts)
	// .pipe(plugins.typescript({
	// 	typescript: require('typescript'),
	// 	target: 'ES5',
	// 	module: 'commonjs',
	// 	declarationFiles: false,
	// 	noExternalResolve: true
	// }))
	// .pipe(plugins.rename(function (path) {
	// 	path.dirname = '';
	// }))
	// .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function() {
  // Start livereload
  livereload.listen();

  // Add watch rules
  gulp.watch(defaultAssets.components.views, ['html']).on('change', livereload.changed);
  gulp.watch(defaultAssets.components.sass, ['sass']).on('change', livereload.changed);
  gulp.watch(defaultAssets.components.ts, ['tsc']).on('change', livereload.changed);
});

// Lint CSS and JavaScript files.
gulp.task('lint', function(done) {
	runSequence('sass', 'html', 'tsc', done);
});

// Run the project in development mode
gulp.task('default', function(done) {
	runSequence('env:dev', 'lint', ['watch'], done);
});
