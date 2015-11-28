var gulp = require('gulp')
var plumber = require('gulp-plumber')
var react = require('gulp-react')
var flow = require('gulp-flowtype')
var watch = require('gulp-watch')

gulp.task('typecheck', function() {
  return gulp.src('*.js')
    .pipe(plumber())
    .pipe(watch('**/*.js'))
    .pipe(flow({
        all: false,
        weak: false,
        declarations: './declarations',
        killFlow: false,
        beep: true,
        abort: false
    }))
    .pipe(react({ stripTypes: true })) // Strip Flow type annotations before compiling
    .pipe(gulp.dest('./out'));
})

gulp.task('default', ['typecheck'])
