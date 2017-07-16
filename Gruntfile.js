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
		}
	});

	grunt.registerTask('prod', ['cssmin']);
};
