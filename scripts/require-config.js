var bower = '../bower_components/';

requirejs.config( {
	'baseUrl' : 'scripts',

	'path' : {
		main : 			   'main',

		firebase : bower + 'firebase/firebase',
		material : bower + 'material-design-lite'
	}
} );

requirejs( [ 'main' ], function() {} );
