var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
var notify = require('gulp-notify');

gulp.task('less', function() {
    return gulp.src('./less/**/*.less')
        .pipe(concat('master.css'))
        .pipe(plumber({
            errorHandler: function (err) {
                notify.onError({
                    "title": "Styles error.",
                    "message": "<%= error.message %>",
                })(err);
                this.emit('end');
            }
        }))
        .pipe(less())
        .pipe(gulp.dest('./dist/styles'))
        .pipe(notify({
            "title": "Stylesheets compiled.",
            "message": "Compiled <%= file.relative %>",
        }));
});

gulp.task('watch:less', function () {
    return gulp.watch('./**/*.less', ["less"]);
});


gulp.task('watch', ['watch:less']);
gulp.task('default', ['less', 'watch']);