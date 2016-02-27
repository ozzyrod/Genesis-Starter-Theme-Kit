/**
 *
 * Gulp task recipe to produce production ready files for a WordPress theme
 * @author Calvin Koepke
 * @version 1.0
 * @link https://twitter.com/cjkoepke
 *
 */


'use strict';

//* Load and define dependencies
var gulp = require( 'gulp' );
var watch = require( 'gulp-watch' );
var sass = require( 'gulp-sass' );
var uglify = require( 'gulp-uglify' );
var rename = require( 'gulp-rename' );

var PATHS = {
	js: './assets/js/',
	scss: './assets/scss/',
	build: {
		js: './build/js/',
		css: './build/css/'
	}
}

var taskLoader = [ 'scripts', 'scss' ];

//* Gulp task to combine JS files, minify, and output to bundle.min.js
gulp.task( 'scripts', function() {

	gulp.src( PATHS.js + '*.js')
		.pipe( uglify() )
		.pipe( rename({ extname: '.min.js' }))
		.pipe( gulp.dest( PATHS.build.js ) );

});

//* Gulp task to compile, minify, and output stylesheet in place of old uncompressed version
gulp.task( 'scss', function() {

	gulp.src( PATHS.scss + 'style.scss' )
		.pipe( sass( { outputStyle: 'compressed' } ) )
		.pipe( gulp.dest( './' ) );

});

gulp.task( 'minify-css', function() {
	gulp.src( './style.css' )
		.pipe( gulp.dest( './' ) );
});

//* Watch files
gulp.task( 'watch', function() {

	gulp.watch( paths.js + '*.js', ['scripts'] );
	gulp.watch( paths.scss + '*.scss', ['scss'] );

});

//* Load tasks
gulp.task( 'default', taskLoader );