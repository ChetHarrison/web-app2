//   Module      : babel.js
// ----------------------------
//		Description : configures the grunt task
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
//
module.exports = {
	options : {
		sourceMap : true
	},
	app : {
		files : [ {
			expand : true,
			cwd : '<%= dir.es6 %>',
			src : [
				'**/*.js'
			],

			// Hack to place app and test transpiles in the
			// same build dir.
			dest : '<%= dir.es5 %>'
		} ]
	},
	tests : {
		files : [ {
			expand : true,
			cwd : '<%= dir.es6 %>tests',
			src : [ '**/*-spec.js' ],
			dest : '<%= dir.es5 %>tests'
		} ]
	}
};
