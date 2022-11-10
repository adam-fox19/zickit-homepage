const gulp = require('gulp');

// Include plugins
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));

// Concatenate, rename and minify JS files
const task_js = () => {
  return gulp.src('js/*.js')
    .pipe(concat('main.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
}

// Concatenate, compile, and minify scss files
const task_scss = () => {
    return gulp.src('scss/*.scss')
      .pipe(concat('index.css'))
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('build/css'));
}

// Watch for changes to files during development
const task_watch = () => {
  // Watch .js files
  gulp.watch('js/*.js', task_js);
  // Watch .scss files
  gulp.watch('scss/*.scss', task_scss);
}

// Default Task
gulp.task('default', gulp.series(task_js, task_scss, task_watch));
