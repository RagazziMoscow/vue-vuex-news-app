const gulp = require('gulp');
const webpack = require('webpack');
const gutil = require('gulp-util');

gulp.task('webpack', () => {
        // run webpack
    webpack(require('./webpack.config.js'), function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString());
        //callback();
    });
});

gulp.task('frontend', () => {
    gulp.watch(['client/**/*.js', 'client/**/*.vue'], () => {
        gulp.run('webpack');
    });
});

gulp.task('default', ['frontend']);