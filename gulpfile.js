const {src, dest, series, parallel} = require('gulp');
const del = require('del');
const imagemin = require('gulp-imagemin'); 

// This task is supposed to clean things

const minify = require('gulp-minify');

// This task is supposed to clean things
const concat = require('gulp-concat');

// This task is supposed to clean things
function cleanTask() {
  return del('dist');
}

function pagesTask() {
  return src('src/index.html')
    .pipe(dest('dist'))
}

function scriptsTask() {
  return src('src/scripts/**/*.js')
    .pipe(minify())
    .pipe(dest('dist/js'));
}

function stylesTask() {
  return src(["src/styles/styles.css", "src/styles/headings.css"])
    .pipe(concat('styles.css'))
    .pipe(dest("dist/css"));
}

function imagesTask() {
  return src('src/images/**/*')
    .pipe(imagemin())
    .pipe(dest('dist/images'))
}

exports.default = series(cleanTask, parallel(pagesTask,imagesTask, scriptsTask, stylesTask));
