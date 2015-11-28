var gulp = require('gulp')
var plumber = require('gulp-plumber')
var react = require('gulp-react')
var flow = require('gulp-flowtype')

gulp.task('watch', function() {
  gulp.watch('./src/**/*.js', ['typecheck'])
})

gulp.task('typecheck', function() {
  return gulp.src('./src/**/*.js')
    .pipe(flow({
        all: false,
        weak: false,
        killFlow: false,
        beep: true,
        abort: false
    }))
})

gulp.task('default', ['watch'])
