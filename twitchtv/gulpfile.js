'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('babel', function(){
    return gulp.src('src/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));    
});

gulp.task('connect', function () {
    
    const connect = require('connect'),
        serveStatic = require('serve-static');

    const app = connect()
        .use(require('connect-livereload')({ port: 35729 }))
        .use(serveStatic(__dirname));

    require('http').createServer(app)
        .listen(9000)
        .on('listening', function () {
            console.log('Started connect web server on http://localhost:9000');
        });
});

gulp.task('serve', function () {
    require('opn')('http://localhost:9000');
});

gulp.task('watch', ['babel', 'connect', 'serve'], function () {

    const livereload = require('gulp-livereload');
    livereload.listen();

    gulp.watch('src/*.js', ['babel']);
    
    gulp.watch([
        '*.html',
        'dist/*.js',
        'css/*.css',
        'img/*'
    ]).on('change', function (file) {
        livereload.changed(file.path);
    });
});