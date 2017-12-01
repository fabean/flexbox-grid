/*eslint strict: ["error", "global"]*/
'use strict';

//=======================================================
// Include gulp
//=======================================================
var gulp = require('gulp');

//=======================================================
// Include Our Plugins
//=======================================================
var sassLint = require('gulp-sass-lint');

// Export our tasks.
module.exports = {

  // Lint Sass based on .sass-lint.yml config.
  sass: function() {
    return gulp.src([
      './src/**/*.scss',
    ])
      .pipe(sassLint())
      .pipe(sassLint.format());
  },
};
