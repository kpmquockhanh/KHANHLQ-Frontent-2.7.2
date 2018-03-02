var path = ".";
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
//
gulp.task('default', ['sass'], function() {
    browserSync.init({
        server: "app"
    });

    gulp.watch("app/scss/**/*.scss", ['sass']);
    gulp.watch("app/index.html").on('change', function(){
        console.log("Reloading");
        browserSync.reload();
    });
});


//Task compile sass
gulp.task('sass', function() {
    return gulp.src([path + "/app/scss/*.scss",path + "/app/scss/_*.scss"])
        .pipe(sass())
        .pipe(gulp.dest(path + "/app/css/"))
        .pipe(browserSync.stream());
});