const gulp = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano');
const rev = require('gulp-rev');
const uglify = require('gulp-uglify-es').default;
const del = require('del');

gulp.task('css', function(done){
    console.log('Minifying css');
    gulp.src('./assets/scss/**/*.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest('./assets/css'))

    gulp.src('./assets/**/*.css')
    .pipe(rev())
    .pipe(gulp.dest('./public/assets'))
    .pipe(rev.manifest({
        cwd: 'public',
        merge: true
    }))
    .pipe(gulp.dest('./public/assets'));
    done()
});


gulp.task('js', function(done){
    console.log('Minifying js');
    gulp.src('./assets/**/*.js')
    .pipe(uglify())
    .pipe(rev())
    .pipe(gulp.dest('./public/assets'))
    .pipe(rev.manifest({
        cwd: 'public',
        merge: true
    }))
    .pipe(gulp.dest('./public/assets'));
    done();
});


//empty the public/assets directory
gulp.task('clean:assets', function(done){
    del.sync('./public/assets')
    done();
});

gulp.task('build', gulp.series('clean:assets', 'css', 'js'), function(done){
    console.log('Building Assets');
    done();
});