var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var server = require('gulp-server-livereload');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var uglify = require('gulp-uglify');

var uncss = require('gulp-uncss');
 

/*gulp.task('sass', async function() {
     sass('src/sass/main.scss', { sourcemap: true, style: 'compact' })
        .on('error', sass.logError)
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(autoprefixer('last 2 version'))
        .pipe(rename('app.css'))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'));
});*/

gulp.task('js', async function() {
    gulp.src([
            'src/js/component.js'
        ])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('css', async function() {
    gulp.src([
            'src/css/*.css'
        ])
        .pipe(concat('app.css'))
         .pipe(autoprefixer('last 2 version'))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'));
});
gulp.task('js_v', async function() {
    gulp.src([
            'src/js/vendor/jquery.js',
            // 'src/js/vendor/bootstrap.min.js',
            // 'src/js/vendor/inputmask.js',
            // 'src/js/vendor/jquery.inputmask.js',
            // 'src/js/vendor/jquery.animateNumber.min.js',
            // 'src/js/vendor/jquery.scrollTo.js',
            // 'src/js/vendor/jquery.waypoints.min.js',
            // 'src/js/vendor/jqueryrotate.2.1.js',
        ])
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('images', async function(){
     gulp.src('src/images/**/*.*')
        .pipe(cache(imagemin()))
        .pipe(gulp.dest('dist/images'))
});

gulp.task('images_css', async function(){
     gulp.src('src/sass/info/images/**/*.*')
        .pipe(cache(imagemin()))
        .pipe(gulp.dest('dist/css/images'))
});

gulp.task('pages', async function(){
     gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
});

gulp.task('uncss', async function () {
     gulp.src('dist/css/app.css')
        .pipe(uncss({
            html: ['dist/*.html']
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('webserver', function() {
    gulp.src('dist')
        .pipe(server({
            livereload: {
                enable: true,
                filter: function(filePath, cb) {
                    cb( !(/.DS_Store/.test(filePath)) );
                }
            },
            directoryListing: false,
            open: true,
            log: 'info',
            defaultFile: 'index.html'
        }));
});



// gulp.task('default', gulp.series('pages', 'js', 'js_v', 'css', 'images', 'webserver'));

// gulp.watch('src/*.html', gulp.series('pages'));
// gulp.watch('src/js/*.js', gulp.series('js'));
// gulp.watch('src/js/vendor/*.js', gulp.series('js_v'));
// gulp.watch('css/*.css', gulp.series('css'));
// gulp.watch('src/images/**/*.*', gulp.series('images'));


gulp.task('default', gulp.series('pages', 'js', 'js_v', 'css', 'images', 'webserver'));

gulp.watch('src/*.html', gulp.series('pages'));
gulp.watch('src/js/*.js', gulp.series('js'));
gulp.watch('src/js/vendor/*.js', gulp.series('js_v'));
gulp.watch('src/css/*.css', gulp.series('css'));
gulp.watch('src/images/**/*.*', gulp.series('images'));