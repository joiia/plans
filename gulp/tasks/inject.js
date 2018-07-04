var gulp = require('gulp');
var inject = require('gulp-inject');
 

gulp.task('inject', function () {
gulp.src(['./app/**/*.html', '!./app/page.html'])
  .pipe(inject(gulp.src(['./app/header.html']), {
    starttag: '<!-- inject:header:{{ext}} -->',
    transform: function (filePath, file) {
      // return file contents as string
      return file.contents.toString('utf8')
    }
}))
    .pipe(inject(gulp.src(['./app/page-head.html']), {
    starttag: '<!-- inject:page-head:{{ext}} -->',
    transform: function (filePath, file) {
      // return file contents as string
      return file.contents.toString('utf8')
    }
}))
        .pipe(inject(gulp.src(['./app/footer.html']), {
    starttag: '<!-- inject:footer:{{ext}} -->',
    transform: function (filePath, file) {
      // return file contents as string
      return file.contents.toString('utf8')
    }
}))
    
.pipe(gulp.dest('./app'));
});