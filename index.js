'use strict';

var _path = require( 'path' );
var fs = require( 'fs' );

var getTasks = function ( dir ) {
    var taskDir = _path.resolve( dir );
    var tasks = {};
    if ( fs.lstatSync( taskDir ).isDirectory() ) {
        var content;
        fs.readdirSync( taskDir ).forEach( function ( file ) {
            try {
                content = require( taskDir + '/' + file );
            } catch ( e ) {
                console.error( 'Cannot load file ', taskDir + '/' + file, e );
                content = false;
            }
            tasks[ file.replace( /\.js$/gi, '' ) ] = content;
        } );
    }
    return tasks;
};

module.exports = {
    tasks: getTasks( __dirname + '/tasks' ),
    name: require( './package' ).name
};
