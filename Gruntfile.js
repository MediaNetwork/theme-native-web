module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		cssmin: {
			prod: {
				files: {
					'css/theme.min.css': [
						'css/reset.css',
						'css/spn.css',
						'css/style.css',
						'css/responsive.css'
					]
				}
			}
		},
		uglify: {
			prod: {
				files: {
					'js/theme.min.js': [
						'js/jquery-1.12.4.min.js',
						'js/spn.min.js',
						'js/app.js'
					]
				}
			}
		}
	});

	grunt.registerTask('prod', ['cssmin', 'uglify']);
};
