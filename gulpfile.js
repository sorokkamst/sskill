const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const htmlmin = require("gulp-htmlmin");
const del = require("del");


// HTML
const html = () => {
  return gulp.src("source/*.html")
    .pipe(htmlmin())
    .pipe(gulp.dest("build"))
}

// Styles

function styles() {
  return gulp.src("source/scss/style.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'));
}

exports.styles = styles;

// Images

const images = () => {
  return gulp.src("source/img/*.svg")
    .pipe(gulp.dest("build/img"))
}

exports.images = images;

// Copy

const copy = () => {
  return gulp.src([
      "source/fonts/*.{woff2,woff}",
      "source/js/*.js"
    ], {
      base: "source"
    })
    .pipe(gulp.dest("build"));
}

exports.copy = copy;

// Clean

const clean = () => {
  return del("dist");
}

// Build

const build = gulp.series(
  clean,
  gulp.parallel(
    html,
    styles,
    copy,
    images
  ))

exports.build = build;