var gulp		= require( 'gulp' );
var path		= require( 'path' );

// var options		= require( '../utils/options' );
var paths		= require( '../utils/paths' );

var livereload	= require( 'gulp-livereload' );



gulp.task( 'watch', function() {
	
	livereload.listen();
	
	gulp.start( 'js' );
	
	
	/* Tasks management */
	gulp.watch( [
		
		// /* htaccess */
		// paths.env.base + paths.htaccess,
		
		/* Assets */
		paths.env.dev + paths.assets.allFiles,
		'!' + paths.env.dev + paths.assets.css.minAllFiles,
		'!' + paths.env.dev + paths.assets.css.fonts.allFiles,
		'!' + paths.env.dev + paths.assets.css.maps.allFiles,
		// '!' + paths.env.dev + paths.assets.js.minAllFiles,
		// '!' + paths.env.dev + paths.assets.favicons.allFiles,
		// '!' + paths.env.dev + paths.assets.svg.sprite.allFiles,
		paths.env.dev + paths.assets.js.app.allFiles,
		
		// /* Config */
		// paths.env.dev + paths.configs.allFiles,
		// '!' + paths.env.dev + paths.configs.favicons.dataFile,
		
	], function( e ) {
		
		var filePath, ext;
		var taskname;
		
		filePath	= e.path;
		ext			= path.extname( filePath );
		console.log( ext );
		
		
		// if ( ext == '.js' )
		// 	taskname = 'js';
		
		
		if ( taskname )
			gulp.start( taskname );
		
		
		
		// var ext, desktop, mobile, shared, favicons, configs;
		// var taskname = null;
		
		// options.filePath	= e.path;
		// ext					= path.extname( options.filePath );
		// options.fileName	= path.basename( options.filePath )
		
		// desktop		= options.filePath.indexOf( 'desktop' ) > -1 ? true : false;
		// mobile		= options.filePath.indexOf( 'mobile' ) > -1 ? true : false;
		// shared		= options.filePath.indexOf( 'shared' ) > -1 ? true : false;
		// favicons	= options.filePath.indexOf( 'configs/favicons/' ) > -1 ? true : false;
		// configs		= options.filePath.indexOf( 'configs/' ) > -1 ? true : false;
		
		// // options.devicePath: used for SASS error notification
		// if ( desktop )
		// 	options.devicePath = 'desktop';
		// else if ( mobile )
		// 	options.devicePath = 'mobile';
		// else if ( shared )
		// 	options.devicePath = 'shared';
		
		
		// /* htaccess */
		// if ( options.fileName == '.htaccess' ) {
		// 	taskname = 'htaccess';
		// }
		
		// /* SASS */
		if ( ext == '.scss' )
			taskname = 'sass';
		
		// /* Favicons */
		// if ( favicons ) {
		// 	taskname		= 'favicons';
		// 	options.subtask	= 'default-favicons';
		// }
		
		// /* JS */
		// else if ( ext == '.js' ) {
		// 	taskname = 'js';
			
		// 	if ( desktop )
		// 		options.jsSrcPath = paths.env.dev + paths.assets.js.app.desktopAllFiles;
		// 	else if ( mobile )
		// 		options.jsSrcPath = paths.env.dev + paths.assets.js.app.mobileAllFiles;
		// 	else if ( shared )
		// 		options.jsSrcPath = paths.env.dev + paths.assets.js.app.sharedAllFiles;
		// }
		
		// /* JSON */
		// else if ( ext == '.json' ) {
		// 	taskname = 'json';
			
		// 	if ( configs )
		// 		options.jsonSrcPath = paths.env.dev + paths.configs.allRootJsonFiles;
		// 	else
		// 		options.jsonSrcPath = paths.env.dev + paths.assets.json.allFiles;
		// }
		
		// /* SVG */
		// else if ( ext == '.svg' ) {
		// 	taskname = 'svg';
			
		// 	options.svgSrcPath = [ paths.env.dev + paths.assets.svg.allFiles ];
		// }
		
		
		if ( taskname )
			gulp.start( taskname );
		
	} );
	
	
	/* Livereload */
	gulp.watch( [
		
		/* 3d shaders */
		paths.env.dev + paths.assets._3d.shaders.allFiles,
		
		/* CSS */
		paths.env.dev + paths.assets.css.allMinFiles,
		
		/* JS */
		paths.env.dev + paths.assets.js.minAllFiles,
		
		/* Server */
		paths.env.dev + paths.indexFile,
		
		
		
		/* htaccess */
		// paths.env.dev + paths.htaccess,
		
		/* CSS */
		// paths.env.dev + paths.assets.css.minAllFiles,
		
		/* JS */
		// paths.env.dev + paths.assets.js.allFiles,
		
		/* JSON */
		// paths.env.dev + paths.assets.json.allFiles,
		
		/* SVG */
		// paths.env.dev + paths.assets.svg.sprite.allFiles,
		
		/* Config */
		// paths.env.dev + paths.configs.allFiles,
		// '!' + paths.env.dev + paths.configs.favicons.dataFile,
		
		/* Server */
		// paths.env.dev + paths.indexFile,
		// paths.env.dev + paths.server.allFiles,
		// '!' + paths.env.dev + paths.server.vendor.allFiles
		
	] ).on( 'change', livereload.changed );
	
} );