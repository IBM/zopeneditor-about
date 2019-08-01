var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin'),
  cache = require('gulp-cache');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function(done) {
  browserSync({
    server: {
      baseDir: './'
    }
  });
  done();
});

gulp.task('bs-reload', function(done) {
  browserSync.reload();
  done();
});

gulp.task('images', function(done) {
  gulp
    .src(['src/images/**/*', 'src/images/hero-learn.svg'])
    .pipe(
      cache(
        imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })
      )
    )
    .pipe(gulp.dest('dist/images/'));
    done();
});

gulp.task('styles', function(done) {
  gulp
    .src(['src/styles/**/*.scss'])
    .pipe(
      plumber({
        errorHandler: function(error) {
          console.log(error.message);
          this.emit('end');
        }
      })
    )
    // .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'compressed',
        includePaths: ['node_modules/foundation-sites/scss'] // include path to foundation in node modules
      })
    )
    // .pipe(sourcemaps.write())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('dist/styles/'))
    .pipe(browserSync.reload({ stream: true }));
    done();
});

gulp.task('scripts', function() {
  return gulp
    .src('src/scripts/**/*.js')
    .pipe(
      plumber({
        errorHandler: function(error) {
          console.log(error.message);
          this.emit('end');
        }
      })
    )
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/scripts/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts/'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('default', gulp.series('browser-sync'), function(done){
  gulp.watch("src/styles/**/*.scss", ['styles']);
  gulp.watch("src/scripts/**/*.js", ['scripts']);
  gulp.watch("*.html", ['bs-reload']);
  done(); 
});
