var gulp = require('gulp');
// var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');
var runSequence = require('run-sequence'),

var defaultAssets = {
  components:{
    sass:[
      './app/assets/components/**/*.scss'
    ],
    views:[
      './app/assets/components/**/views/*.html'
    ]
  }
};


gulp.task('sass', function () {
  gulp.src(defaultAssets.components.sass)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./app/assets/stylesheets'));
});

gulp.task('html', function() {
  return gulp.src(defaultAssets.components.views)
    // .pipe(htmlmin({
    //   collapseWhitespace: true,
    //   customAttrAssign:[
    //     [ /\{\{*\s+\w+\}\}/, /\{\{\/if\}\}/ ]
    //   ]
    // }))
    .pipe(gulp.dest('./app/assets/javascripts'))
});

// // Typescript task
// gulp.task('tsc', function () {
// 	//var ts_config = plugins.typescript.creatproject('tsconfig.json');
// 	gulp.src(defaultAssets.client.ts)
// 	.pipe(plugins.typescript({
// 		typescript: require('typescript'),
// 		target: 'ES5',
// 		module: 'commonjs',
// 		declarationFiles: false,
// 		noExternalResolve: true
// 	}))
// 	.pipe(plugins.rename(function (path) {
// 		path.dirname = '';
// 	}))
// 	.pipe(gulp.dest('./build/'));
// });

gulp.task('watch', function() {
  gulp.watch(defaultAssets.components.sass, ['sass']);
});

// Lint CSS and JavaScript files.
gulp.task('lint', function(done) {
	runSequence('sass', 'tsc', ['csslint'], done);
});

// Run the project in development mode
gulp.task('default', function(done) {
	runSequence('env:dev', 'lint', ['nodemon', 'watch'], done);
});
