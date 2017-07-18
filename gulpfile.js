var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require("webpack");
var notifier = require('node-notifier');
var compass = require('gulp-compass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var webpackStream = require('webpack-stream');

function logError(error){
  notifier.notify({
    title: error.plugin,
    message: error.message
  })

  gutil.log(error)
}

gulp.task('build-sass', function() {
  return gulp.src(['sass/*.scss', 'sass/**/*.scss'])
    .pipe(compass({
      css: 'dist/css',
      sass: 'sass',
      image: 'dist/img',
      import_path: ["sass"]
    }))
    .on('error', logError)
    .pipe(gulp.dest('dist/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleanCSS())
    .on('error', logError)
    .pipe(gulp.dest('dist/css'))
    ;
});

gulp.task('watch-sass', function() {
  gulp.watch(['sass/*.scss', 'sass/**/*.scss'], ['build-sass']);
});

gulp.task('build-example', function() {
  var config = require('./example/webpack.config.js');
  return gulp.src('example/app.jsx')
    .pipe(webpackStream(config, webpack))
    .on('error', logError)
    .pipe(gulp.dest('./example'))
  // webpack(config, function(err, stats) {
  //   //notifier
  //   if (stats.compilation.errors.length) {
  //     notifier.notify({
  //       title: 'Webpack',
  //       message: stats.compilation.errors[0].message
  //     });
  //   }

  //   //console log
  //   gutil.log("[webpack]", stats.toString({}));
  // });
});

gulp.task('build-src', function() {
  var config = require('./src/webpack.config.js');
  return gulp.src('src/index.es6')
    .pipe(webpackStream(config, webpack))
    .on('error', logError)
    .pipe(gulp.dest('./'))
});


gulp.task('default', ['build-sass', 'watch-sass', 'build-src', 'build-example'])
