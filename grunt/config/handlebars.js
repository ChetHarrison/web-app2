//   Module      : handlebars.js
// ----------------------------
//		Description : configures the grunt task
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
//

// Convert template file names into camelCase names.
// For instance, some-name.okay.ext => someNameOkay
var nodeFolderName = function( fullPath ) {
		var path = require( 'path' );

		// get an array of folders in the path
		var folders = path.parse( fullPath )
			.dir
			.split( path.sep );

		// return the last folder in the array.
		return folders[ folders.length - 1 ];
	},

	slugToCamel = function( slug ) {
		return slug.replace(/-([a-z])/g,
			function (g) { return g[1].toUpperCase(); });
	},

	processNameFromFolder = function( fullPath ) {
		var path = require( 'path' );
		var folder = nodeFolderName( fullPath );
		return folder.replace( /[-\.]([a-z0-9] )/g, function( g ) {
			return g[ 1 ].toUpperCase();
		} );
	},

	// Convert template folder names into camelCase names.
	// For instance, some-name.okay.ext => someNameOkay
	processNameFromFile = function( fullPath ) {
		var path = require( 'path' );
		var basename = path.basename( fullPath, path.extname( fullPath ) );
		return slugToCamel( basename );
	};

module.exports = {
	options: {
		processName : processNameFromFile
	},

	tpl : {
		options : {
			namespace : 'tpl',

			amd : 'handlebars'
		},

		files : [ {
			src : [ '<%= dir.es6 %>*.hbs' ],
			dest : '<%= dir.es5 %>tpl.js'
		} ]
	}

	// fixtures : {
	// 	options : {
	// 		namespace : 'fixtures',

	// 		// this path is relative to the built tpl.js dest property
	// 		amd : '<%= dir.bower %>handlebars/handlebars'
	// 	},

	// 	files : [ {
	// 		src : [ '<%= dir.es6 %>tests/**/*.hbs' ],
	// 		dest : '<%= dir.es5 %>tests/fixtures.js'
	// 	} ]
	// }
};
