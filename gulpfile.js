var gulp = require('gulp'),
	source = require('vinyl-source-stream'),
	browserify = require('browserify'),
    babel = require('gulp-babel');


gulp.task('js', function(){
    browserify('./build/js/main.js')
    .transform("babelify", {presets: ["es2015"]})
    .bundle()
    .pipe(source('browserit.js'))
    .pipe(gulp.dest('./assets/js'))
});
