/**
 * This task loads configuration for, and starts jasmine-node with istanbul
 *
 * uses the following parameters:
 *     config.src {String || Array}
 *     config.tests {String || Array}
 *     config.istanbul {Object}
 *     config.jasmine {Object}
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
var jasmineNode = require( 'gulp-jasmine-node' );
var istanbul = require( 'gulp-istanbul' );

module.exports = function karmaTaskFunc( name, config ) {
    gulp.task( name, config.dependency, function () {
        return gulp.src( config.src )
            .pipe( istanbul( config.istanbul ) )
            .on( 'finish', function () {
                gulp.src( config.tests )
                    .pipe( jasmineNode( config.jasmine ) )
                    .pipe( istanbul.writeReports( config.reports ) );
            } );
    } );
};
