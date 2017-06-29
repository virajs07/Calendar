var babelify = require('babelify');
var browserify = require('browserify');
var gulp = require('gulp');
var plugins = require('gulp-load-plugins');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync');

//Development

gulp.task('development', ['scripts', 'styles'], () => {
    browserSync({
        'server': './',
        'snippetOptions': {
            'rule': {
                'match': /<\/body>/i,
                'fn': (snippet) => snippet
            }
        }
    });

    gulp.watch('./client/scss/*.scss', ['styles']);
    gulp.watch('./client/**/*.js', ['scripts']);
    gulp.watch('./*.html', browserSync.reload);
});


gulp.task('scripts', () => {
    return browserify({
        'entries': ['./client/index.js'],
        'debug': true,
        'transform': [
            babelify.configure({
                'presets': ['es2015', 'react']
            })
        ]
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(plugins().sourcemaps.init({'loadMaps': true}))
    .pipe(plugins().sourcemaps.write('.'))
    .pipe(gulp.dest('./assets/js/'))
    .pipe(browserSync.stream());
});

gulp.task('styles', () => {
    return gulp.src('./client/styles/*.scss')
        .pipe(plugins().sourcemaps.init())
        .pipe(plugins().sass().on('error', plugins().sass.logError))
        .pipe(plugins().sourcemaps.write())
        .pipe(gulp.dest('./assets/css/'))
        .pipe(browserSync.stream());
});


//PRODUCTION CSS && JS  minify

gulp.task('cssmin', () => {
    return gulp.src('./client/styles/*.scss')
        .pipe(plugins().sass({
            'outputStyle': 'compressed'
        }).on('error', plugins().sass.logError))
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('jsmin', () => {
  
    return browserify({
        'entries': ['./client/index.js'],
        'debug': false,
        'transform': [
            babelify.configure({
                'presets': ['es2015', 'react']
            })
        ]
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(plugins().uglify())
    .pipe(gulp.dest('./assets/js/'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['jsmin', 'cssmin'], () => {
    browserSync({
        'server': './',
        'snippetOptions': {
            'rule': {
                'match': /<\/body>/i,
                'fn': (snippet) => snippet
            }
        }
    });
});

