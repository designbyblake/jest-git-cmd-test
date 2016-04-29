var gulp = require('gulp'),
	source = require('vinyl-source-stream'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
    jshint = require('gulp-jshint'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
	browserify = require('browserify'),
    babel = require('gulp-babel'),
    runSequence = require('run-sequence');

gulp.task('js', function(){
	browserify('./main.js')
	.bundle()
    
	.pipe(source('browserit.js'))
	.pipe(gulp.dest('./'))
});

gulp.task('hint', function(){
	 gulp.src('./build/*.js')
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .on("error", notify.onError(function (error) {
        return  error.message;
    }))
});
gulp.task('min',function(){
    gulp.src('./browserit.js')
    .pipe(rename({
      suffix:'.min'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./'))
});

gulp.task('rjs', function(){
  runSequence('hint','js','min')
});