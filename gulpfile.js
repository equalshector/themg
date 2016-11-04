var gulp = require('gulp'),
    spawn = require('child_process').spawn,    
    sass = require('gulp-sass'),
    node;



gulp.task('default', function() {
    resass();
    runServer();

    gulp.watch(['app/**/*.scss'], function(){
        resass();
    });

    gulp.watch(['app/**/*.js', 'app.js'], function() {
        runServer();
    });
});

gulp.task('sass', function() {
    resass();
});


function runServer() {
    if (node) node.kill()
    node = spawn('node', ['app.js'], {stdio: 'inherit'})
    node.on('close', function (code) {
        if (code === 8) {
        gulp.log('Error detected, waiting for changes...');
        }
    });
}

function resass() {
    gulp.src('app/css/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css/'))
}
