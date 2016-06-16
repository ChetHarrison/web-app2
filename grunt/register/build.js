//   Module      : build.js
// ----------------------------
//		Description : register grunt build task
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
// This will compile transpile, optimze and minify
// all required JS, CSS, and HTML and place files
// in the `prod` directory for deployment.
//
module.exports = function( grunt ) {
	grunt.registerTask(
		'build',
		'Build production files to "dest" folder.',
		[
			'babel',
			'handlebars',
			'require'
		]
	);
};
