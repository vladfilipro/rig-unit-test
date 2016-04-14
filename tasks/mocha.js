/**
 * This task loads configuration for, and starts mocha with istanbul
 *
 * uses the following parameters:
 *     config.src {String || Array}
 *     config.tests {String || Array}
 *     config.istanbul {Object}
 *     config.mocha {Object}
 *     config.reports {Object}
 *                 ex: {
 *                        dir: './assets/unit-test-coverage',
 *                        reporters: [ 'lcov' ],
 *                        reportOpts: {
 *                            dir: './assets/unit-test-coverage'
 *                        }
 *                     }
 */

'use strict';

var gulp = require( 'gulp' );
var mocha = require( 'gulp-mocha' );
var istanbul = require( 'gulp-istanbul' );

module.exports = function mochaTaskFunc( name, config ) {
    gulp.task( name, config.dependency, function () {
        return gulp.src( config.src )
            .pipe( istanbul( config.istanbul ) )
            .pipe( istanbul.hookRequire() )
            .on( 'finish', function () {
                return gulp.src( config.tests )
                    .pipe( mocha( config.mocha ) )
                    .once( 'error', function () {
                        process.exit( 1 );
                    } )
                    .pipe( istanbul.writeReports( config.reports ) );
            } );
    } );
};
